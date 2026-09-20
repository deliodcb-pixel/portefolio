/**
 * SPÉCIMEN — nom du hero en particules.
 *
 * Le prénom et le nom sont échantillonnés depuis un rendu texte sur
 * canvas (une particule par pixel non-transparent de la police Clash
 * Display) puis animés : chaque particule est repoussée par le
 * pointeur dans un rayon donné, et revient à sa position d'origine par
 * un ressort amorti — même principe qu'un effet "particle text"
 * classique (ex. ParticleText de Framer), réécrit ici en JS/canvas
 * natif pour notre stack sans dépendance.
 *
 * Repli automatique : si le script échoue à n'importe quelle étape (pas
 * de canvas, police non chargée, erreur), le <h1> réel reste affiché
 * normalement (cf. style.css, .hero-title-wrap sans .particles-ready).
 */
(function () {
  'use strict';

  const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const CAN_HOVER = window.matchMedia('(pointer: fine)').matches;
  // Sur tactile, il n'y a personne pour "repousser" les particules : on
  // garde le vrai texte (net, moins coûteux) plutôt qu'un rendu pointillé
  // purement statique.
  if (REDUCE || !CAN_HOVER) return;

  const wrap = document.querySelector('.hero-title-wrap');
  const textEl = document.getElementById('heroTitleText');
  const canvas = document.getElementById('heroTitleCanvas');
  if (!wrap || !textEl || !canvas) return;

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return;

  const LINES = ['DÉLIO', 'DUCHESNE', '-BRAJON'];
  const PARTICLE_GAP = 3.4;     // distance entre points échantillonnés (px CSS)
  const PARTICLE_SIZE = 1.6;
  const MOUSE_RADIUS = 130;
  const RETURN_SPEED = 0.06;
  const DAMPING = 0.9;

  let particles = [];
  let particleColor = '#0E0E0E';
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let cssWidth = 0, cssHeight = 0;
  const mouse = { x: -9999, y: -9999 };

  function readColor() {
    // On lit directement la variable CSS --fg, jamais color calculée sur
    // <body>/<h1> : ces éléments ont une transition CSS sur `color`, donc
    // juste après un changement de thème, getComputedStyle(...).color
    // renvoie une valeur interpolée en plein milieu de la transition (et
    // ce serait alors celle-là qui resterait figée pour toujours, vu
    // qu'on ne relit qu'une fois par bascule). Une variable CSS, elle,
    // change de valeur instantanément, sans transition possible dessus.
    const value = getComputedStyle(document.documentElement).getPropertyValue('--fg').trim();
    particleColor = value || '#0E0E0E';
  }

  function buildParticles() {
    const rect = textEl.getBoundingClientRect();
    cssWidth = Math.max(1, Math.round(rect.width));
    cssHeight = Math.max(1, Math.round(rect.height));

    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;
    canvas.style.width = cssWidth + 'px';
    canvas.style.height = cssHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const style = getComputedStyle(textEl);
    const fontSize = parseFloat(style.fontSize) || 80;
    const lineHeight = fontSize * 0.92; // cf. .display { line-height: 0.92 }

    ctx.clearRect(0, 0, cssWidth, cssHeight);
    ctx.fillStyle = '#000';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.font = `600 ${fontSize}px "Clash Display", "Space Grotesk", Arial, sans-serif`;

    LINES.forEach((line, i) => {
      // Le texte réel est en majuscules via text-transform CSS ; le
      // canvas ne l'applique pas tout seul, donc on le fait ici.
      ctx.fillText(line.toUpperCase(), 0, lineHeight * (i + 1));
    });

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const gapPx = Math.max(2, Math.round(PARTICLE_GAP * dpr));
    const next = [];
    for (let y = 0; y < canvas.height; y += gapPx) {
      for (let x = 0; x < canvas.width; x += gapPx) {
        const alpha = imageData[(y * canvas.width + x) * 4 + 3];
        if (alpha > 128) {
          const px = x / dpr, py = y / dpr;
          next.push({ x: px, y: py, baseX: px, baseY: py, vx: 0, vy: 0 });
        }
      }
    }
    particles = next;
    ctx.clearRect(0, 0, cssWidth, cssHeight);
  }

  function onPointerMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  }
  function onPointerLeave() { mouse.x = -9999; mouse.y = -9999; }

  function tick() {
    ctx.clearRect(0, 0, cssWidth, cssHeight);
    ctx.fillStyle = particleColor;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const dx = mouse.x - p.x, dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_RADIUS) {
        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
        const angle = Math.atan2(dy, dx);
        p.vx -= Math.cos(angle) * force * 2.4;
        p.vy -= Math.sin(angle) * force * 2.4;
      }
      p.vx += (p.baseX - p.x) * RETURN_SPEED;
      p.vy += (p.baseY - p.y) * RETURN_SPEED;
      p.vx *= DAMPING;
      p.vy *= DAMPING;
      p.x += p.vx;
      p.y += p.vy;

      ctx.beginPath();
      ctx.arc(p.x, p.y, PARTICLE_SIZE, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }

  let resizeTimer = null;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      buildParticles();
    }, 200);
  }

  function init() {
    try {
      readColor();
      buildParticles();
      if (!particles.length) return; // police pas encore prête / échec de mesure : on abandonne, le <h1> reste visible.
      wrap.classList.add('particles-ready');
      window.addEventListener('mousemove', onPointerMove, { passive: true });
      window.addEventListener('mouseleave', onPointerLeave, { passive: true });
      window.addEventListener('resize', onResize);
      new MutationObserver(readColor).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
      requestAnimationFrame(tick);
    } catch (err) {
      // Repli silencieux : le <h1> reste affiché normalement.
    }
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(init).catch(init);
  } else {
    setTimeout(init, 300);
  }
})();
