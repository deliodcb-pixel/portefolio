/**
 * SPÉCIMEN — curseur "fluide réel".
 *
 * Vraie simulation de dynamique des fluides en temps réel (méthode des
 * fluides stables de Jos Stam : advection semi-lagrangienne, projection
 * de pression incompressible par itérations de Jacobi, confinement de
 * vorticité) exécutée sur GPU via des shaders WebGL — pas une forme
 * géométrique qui imite un liquide, un vrai champ de vitesse/densité
 * qui tourbillonne et se dissipe. Un seul canal de densité (monochrome,
 * teinté en bleu accent au rendu) : pas de dégradé arc-en-ciel, juste
 * de l'encre qui se déplace dans l'eau.
 *
 * Se désactive silencieusement si WebGL est indisponible, sur souris
 * grossière (tactile) ou si l'utilisateur préfère un mouvement réduit —
 * le curseur système reprend la main automatiquement (cf. style.css,
 * html.has-cursor n'est alors jamais posée).
 */
(function () {
  'use strict';

  const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const CAN_HOVER = window.matchMedia('(pointer: fine)').matches;
  if (REDUCE || !CAN_HOVER) return;

  const canvas = document.getElementById('fluidCanvas');
  if (!canvas) return;

  // Couleur d'encre unique (bleu accent de la charte), en 0..1.
  const INK_COLOR = [27 / 255, 41 / 255, 255 / 255];

  const SIM_RESOLUTION = 96;
  const DYE_RESOLUTION = 512;
  const PRESSURE_ITERATIONS = 18;
  const VELOCITY_DISSIPATION = 0.985;
  const DENSITY_DISSIPATION = 0.965;
  const PRESSURE_DISSIPATION = 0.85;
  const CURL_STRENGTH = 11;
  const SPLAT_RADIUS = 0.022;
  const SPLAT_FORCE = 2200;

  /* ---------- Initialisation du contexte WebGL ---------- */
  function getWebGL(canvasEl) {
    const params = {
      alpha: true, depth: false, stencil: false,
      antialias: false, preserveDrawingBuffer: false, premultipliedAlpha: true,
    };
    const gl = canvasEl.getContext('webgl', params) || canvasEl.getContext('experimental-webgl', params);
    if (!gl) return null;

    const halfFloat = gl.getExtension('OES_texture_half_float');
    const linear = gl.getExtension('OES_texture_half_float_linear');
    let texType = halfFloat ? halfFloat.HALF_FLOAT_OES : gl.UNSIGNED_BYTE;

    // Vérifie qu'on peut vraiment rendre dans une texture de ce format
    // (certains GPU/drivers acceptent l'extension mais pas le rendu).
    function canRenderTo(type) {
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 4, 4, 0, gl.RGBA, type, null);
      const fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
      const ok = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
      gl.deleteFramebuffer(fbo);
      gl.deleteTexture(tex);
      return ok;
    }

    if (texType !== gl.UNSIGNED_BYTE && !canRenderTo(texType)) {
      texType = gl.UNSIGNED_BYTE;
    }
    const supportsLinear = texType === gl.UNSIGNED_BYTE || !!linear;

    return { gl, texType, supportsLinear };
  }

  const ctx = getWebGL(canvas);
  if (!ctx) return; // pas de WebGL : on laisse le curseur système, silencieusement.
  const { gl, texType, supportsLinear } = ctx;

  root().classList.add('has-cursor');
  function root() { return document.documentElement; }

  /* ---------- Shaders ---------- */
  const baseVertexShader = `
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL, vR, vT, vB;
    uniform vec2 texelSize;
    void main () {
      vUv = aPosition * 0.5 + 0.5;
      vL = vUv - vec2(texelSize.x, 0.0);
      vR = vUv + vec2(texelSize.x, 0.0);
      vT = vUv + vec2(0.0, texelSize.y);
      vB = vUv - vec2(0.0, texelSize.y);
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  const clearShader = `
    precision mediump float;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;
    void main () { gl_FragColor = value * texture2D(uTexture, vUv); }
  `;

  const splatShader = `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;
    void main () {
      vec2 p = vUv - point.xy;
      p.x *= aspectRatio;
      vec3 splat = exp(-dot(p, p) / radius) * color;
      vec3 base = texture2D(uTarget, vUv).xyz;
      gl_FragColor = vec4(base + splat, 1.0);
    }
  `;

  const advectionShader = `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform float dt;
    uniform float dissipation;
    void main () {
      vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
      gl_FragColor = dissipation * texture2D(uSource, coord);
    }
  `;

  const divergenceShader = `
    precision mediump float;
    varying vec2 vUv, vL, vR, vT, vB;
    uniform sampler2D uVelocity;
    void main () {
      float L = texture2D(uVelocity, vL).x;
      float R = texture2D(uVelocity, vR).x;
      float T = texture2D(uVelocity, vT).y;
      float B = texture2D(uVelocity, vB).y;
      vec2 C = texture2D(uVelocity, vUv).xy;
      if (vL.x < 0.0) { L = -C.x; }
      if (vR.x > 1.0) { R = -C.x; }
      if (vT.y > 1.0) { T = -C.y; }
      if (vB.y < 0.0) { B = -C.y; }
      gl_FragColor = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);
    }
  `;

  const curlShader = `
    precision mediump float;
    varying vec2 vUv, vL, vR, vT, vB;
    uniform sampler2D uVelocity;
    void main () {
      float L = texture2D(uVelocity, vL).y;
      float R = texture2D(uVelocity, vR).y;
      float T = texture2D(uVelocity, vT).x;
      float B = texture2D(uVelocity, vB).x;
      gl_FragColor = vec4(0.5 * (R - L - T + B), 0.0, 0.0, 1.0);
    }
  `;

  const vorticityShader = `
    precision highp float;
    varying vec2 vUv, vL, vR, vT, vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;
    void main () {
      float L = texture2D(uCurl, vL).x;
      float R = texture2D(uCurl, vR).x;
      float T = texture2D(uCurl, vT).x;
      float B = texture2D(uCurl, vB).x;
      float C = texture2D(uCurl, vUv).x;
      vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
      force /= length(force) + 0.0001;
      force *= curl * C;
      force.y *= -1.0;
      vec2 vel = texture2D(uVelocity, vUv).xy;
      gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
    }
  `;

  const pressureShader = `
    precision mediump float;
    varying vec2 vUv, vL, vR, vT, vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;
    void main () {
      float L = texture2D(uPressure, vL).x;
      float R = texture2D(uPressure, vR).x;
      float T = texture2D(uPressure, vT).x;
      float B = texture2D(uPressure, vB).x;
      float divergence = texture2D(uDivergence, vUv).x;
      gl_FragColor = vec4((L + R + B + T - divergence) * 0.25, 0.0, 0.0, 1.0);
    }
  `;

  const gradientSubtractShader = `
    precision mediump float;
    varying vec2 vUv, vL, vR, vT, vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;
    void main () {
      float L = texture2D(uPressure, vL).x;
      float R = texture2D(uPressure, vR).x;
      float T = texture2D(uPressure, vT).x;
      float B = texture2D(uPressure, vB).x;
      vec2 velocity = texture2D(uVelocity, vUv).xy - vec2(R - L, T - B);
      gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
  `;

  const displayShader = `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 uColor;
    void main () {
      float density = clamp(texture2D(uTexture, vUv).x, 0.0, 1.0);
      gl_FragColor = vec4(uColor * density, density);
    }
  `;

  /* ---------- Aides de compilation ---------- */
  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(shader) || 'Erreur de compilation shader');
    }
    return shader;
  }
  function createProgram(vsSource, fsSource) {
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vsSource));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program) || 'Erreur de link shader');
    }
    const uniforms = {};
    const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i++) {
      const info = gl.getActiveUniform(program, i);
      uniforms[info.name] = gl.getUniformLocation(program, info.name);
    }
    return { program, uniforms };
  }

  let programs;
  try {
    programs = {
      clear: createProgram(baseVertexShader, clearShader),
      splat: createProgram(baseVertexShader, splatShader),
      advection: createProgram(baseVertexShader, advectionShader),
      divergence: createProgram(baseVertexShader, divergenceShader),
      curl: createProgram(baseVertexShader, curlShader),
      vorticity: createProgram(baseVertexShader, vorticityShader),
      pressure: createProgram(baseVertexShader, pressureShader),
      gradientSubtract: createProgram(baseVertexShader, gradientSubtractShader),
      display: createProgram(baseVertexShader, displayShader),
    };
  } catch (err) {
    return; // navigateur trop ancien / driver capricieux : on abandonne proprement.
  }

  /* ---------- Quad plein écran ---------- */
  const quadBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(0);

  function blit(target) {
    if (target == null) {
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    } else {
      gl.viewport(0, 0, target.width, target.height);
      gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
    }
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  }

  /* ---------- FBOs (simple + double buffer ping-pong) ---------- */
  const filterMode = supportsLinear ? gl.LINEAR : gl.NEAREST;

  function createFBO(w, h) {
    gl.activeTexture(gl.TEXTURE0);
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filterMode);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filterMode);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, texType, null);

    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.viewport(0, 0, w, h);
    gl.clear(gl.COLOR_BUFFER_BIT);

    let id = -1;
    return {
      texture, fbo, width: w, height: h,
      attach(unit) { gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, texture); id = unit; return id; },
    };
  }
  function createDoubleFBO(w, h) {
    let fbo1 = createFBO(w, h);
    let fbo2 = createFBO(w, h);
    return {
      width: w, height: h,
      get read() { return fbo1; },
      get write() { return fbo2; },
      swap() { const tmp = fbo1; fbo1 = fbo2; fbo2 = tmp; },
    };
  }

  function getResolution(resolution) {
    let aspect = gl.drawingBufferWidth / gl.drawingBufferHeight;
    if (aspect < 1) aspect = 1.0 / aspect;
    const min = Math.round(resolution);
    const max = Math.round(resolution * aspect);
    return gl.drawingBufferWidth > gl.drawingBufferHeight
      ? { width: max, height: min }
      : { width: min, height: max };
  }

  let dye, velocity, divergence, curlFBO, pressure;

  function initFramebuffers() {
    const simRes = getResolution(SIM_RESOLUTION);
    const dyeRes = getResolution(DYE_RESOLUTION);
    dye = createDoubleFBO(dyeRes.width, dyeRes.height);
    velocity = createDoubleFBO(simRes.width, simRes.height);
    divergence = createFBO(simRes.width, simRes.height);
    curlFBO = createFBO(simRes.width, simRes.height);
    pressure = createDoubleFBO(simRes.width, simRes.height);
  }

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.round(window.innerWidth * dpr);
    const h = Math.round(window.innerHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      return true;
    }
    return false;
  }

  resizeCanvas();
  initFramebuffers();
  window.addEventListener('resize', () => {
    if (resizeCanvas()) initFramebuffers();
  });

  /* ---------- Pointeur ---------- */
  const pointer = { x: 0, y: 0, dx: 0, dy: 0, moved: false, down: false };
  let lastX = null, lastY = null;

  function updatePointer(x, y) {
    const rect = canvas.getBoundingClientRect();
    const nx = (x - rect.left) / rect.width;
    const ny = 1.0 - (y - rect.top) / rect.height;
    if (lastX !== null) {
      pointer.dx = (nx - lastX) * SPLAT_FORCE;
      pointer.dy = (ny - lastY) * SPLAT_FORCE;
      pointer.moved = Math.abs(pointer.dx) > 0 || Math.abs(pointer.dy) > 0;
    }
    lastX = nx; lastY = ny;
    pointer.x = nx; pointer.y = ny;
  }

  window.addEventListener('mousemove', (e) => {
    updatePointer(e.clientX, e.clientY);
    if (pointer.moved) splatAtPointer();
  }, { passive: true });

  window.addEventListener('mousedown', (e) => {
    pointer.down = true;
    updatePointer(e.clientX, e.clientY);
    // Petite salve à l'impact, pour le retour tactile au clic.
    splat(pointer.x, pointer.y, (Math.random() - 0.5) * 900, (Math.random() - 0.5) * 900, 1.2);
  }, { passive: true });
  window.addEventListener('mouseup', () => { pointer.down = false; }, { passive: true });

  /* ---------- Splat (injection de force + encre) ---------- */
  function correctRadius(radius) {
    const aspect = canvas.width / canvas.height;
    return aspect > 1 ? radius * aspect : radius;
  }

  function splat(x, y, dx, dy, amountMul) {
    gl.disable(gl.BLEND);
    const { program, uniforms } = programs.splat;
    gl.useProgram(program);
    gl.uniform1i(uniforms.uTarget, velocity.read.attach(0));
    gl.uniform1f(uniforms.aspectRatio, canvas.width / canvas.height);
    gl.uniform2f(uniforms.point, x, y);
    gl.uniform3f(uniforms.color, dx, dy, 0.0);
    gl.uniform1f(uniforms.radius, correctRadius(SPLAT_RADIUS / 100));
    blit(velocity.write);
    velocity.swap();

    const isHover = root().classList.contains('cursor-hover');
    const amount = (isHover ? 0.22 : 0.14) * (amountMul || 1);
    gl.uniform1i(uniforms.uTarget, dye.read.attach(0));
    gl.uniform3f(uniforms.color, amount, 0.0, 0.0);
    blit(dye.write);
    dye.swap();
  }

  function splatAtPointer() {
    splat(pointer.x, pointer.y, pointer.dx, pointer.dy);
  }

  /* ---------- Boucle de simulation ---------- */
  let lastTime = performance.now();

  function step(dt) {
    gl.disable(gl.BLEND);

    gl.useProgram(programs.curl.program);
    gl.uniform2f(programs.curl.uniforms.texelSize, 1.0 / velocity.width, 1.0 / velocity.height);
    gl.uniform1i(programs.curl.uniforms.uVelocity, velocity.read.attach(0));
    blit(curlFBO);

    gl.useProgram(programs.vorticity.program);
    gl.uniform2f(programs.vorticity.uniforms.texelSize, 1.0 / velocity.width, 1.0 / velocity.height);
    gl.uniform1i(programs.vorticity.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(programs.vorticity.uniforms.uCurl, curlFBO.attach(1));
    gl.uniform1f(programs.vorticity.uniforms.curl, CURL_STRENGTH);
    gl.uniform1f(programs.vorticity.uniforms.dt, dt);
    blit(velocity.write);
    velocity.swap();

    gl.useProgram(programs.divergence.program);
    gl.uniform2f(programs.divergence.uniforms.texelSize, 1.0 / velocity.width, 1.0 / velocity.height);
    gl.uniform1i(programs.divergence.uniforms.uVelocity, velocity.read.attach(0));
    blit(divergence);

    gl.useProgram(programs.clear.program);
    gl.uniform1i(programs.clear.uniforms.uTexture, pressure.read.attach(0));
    gl.uniform1f(programs.clear.uniforms.value, PRESSURE_DISSIPATION);
    blit(pressure.write);
    pressure.swap();

    gl.useProgram(programs.pressure.program);
    gl.uniform2f(programs.pressure.uniforms.texelSize, 1.0 / velocity.width, 1.0 / velocity.height);
    gl.uniform1i(programs.pressure.uniforms.uDivergence, divergence.attach(0));
    for (let i = 0; i < PRESSURE_ITERATIONS; i++) {
      gl.uniform1i(programs.pressure.uniforms.uPressure, pressure.read.attach(1));
      blit(pressure.write);
      pressure.swap();
    }

    gl.useProgram(programs.gradientSubtract.program);
    gl.uniform2f(programs.gradientSubtract.uniforms.texelSize, 1.0 / velocity.width, 1.0 / velocity.height);
    gl.uniform1i(programs.gradientSubtract.uniforms.uPressure, pressure.read.attach(0));
    gl.uniform1i(programs.gradientSubtract.uniforms.uVelocity, velocity.read.attach(1));
    blit(velocity.write);
    velocity.swap();

    gl.useProgram(programs.advection.program);
    gl.uniform2f(programs.advection.uniforms.texelSize, 1.0 / velocity.width, 1.0 / velocity.height);
    gl.uniform1i(programs.advection.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(programs.advection.uniforms.uSource, velocity.read.attach(0));
    gl.uniform1f(programs.advection.uniforms.dt, dt);
    gl.uniform1f(programs.advection.uniforms.dissipation, VELOCITY_DISSIPATION);
    blit(velocity.write);
    velocity.swap();

    gl.uniform2f(programs.advection.uniforms.texelSize, 1.0 / velocity.width, 1.0 / velocity.height);
    gl.uniform1i(programs.advection.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(programs.advection.uniforms.uSource, dye.read.attach(1));
    gl.uniform1f(programs.advection.uniforms.dissipation, DENSITY_DISSIPATION);
    blit(dye.write);
    dye.swap();
  }

  function render() {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    const { program, uniforms } = programs.display;
    gl.useProgram(program);
    gl.uniform3f(uniforms.uColor, INK_COLOR[0], INK_COLOR[1], INK_COLOR[2]);
    gl.uniform1i(uniforms.uTexture, dye.read.attach(0));
    blit(null);
  }

  function frame(now) {
    let dt = (now - lastTime) / 1000;
    dt = Math.min(dt, 1 / 30);
    lastTime = now;
    try {
      step(dt);
      render();
    } catch (err) {
      return; // erreur GPU inattendue : on arrête proprement la boucle.
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
