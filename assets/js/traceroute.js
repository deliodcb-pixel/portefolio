/**
 * SPÉCIMEN — scène TRACEROUTE (assets/js/traceroute.js).
 *
 * Concept : le hero est traversé par le trajet d'un paquet réseau, façon
 * commande `traceroute` — une caméra glisse le long d'un câble en 3D
 * (Three.js) qui relie six "sauts" représentant le parcours du BTS SIO
 * SLAM (source → développement → réseaux → cybersécurité → veille →
 * destination/contact), pendant qu'un relevé façon terminal s'affiche
 * saut par saut. Purement décoratif : n'ajoute aucun contenu réel, ne
 * bloque jamais l'accès au sommaire des comptes rendus juste en dessous.
 *
 * Robustesse : si Three.js ou WebGL sont indisponibles, ou en cas
 * d'erreur à n'importe quelle étape, le canvas et le HUD restent
 * invisibles (opacity 0) et le hero reste identique à sa version sans
 * script — jamais de contenu manquant ni d'erreur bloquante.
 */
(function () {
  'use strict';

  const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.getElementById('tracerouteCanvas');
  const hud = document.getElementById('tracerouteHud');
  const hudList = document.getElementById('tracerouteHudList');
  // Purement décoratif : en mouvement réduit, on ne l'affiche même pas
  // (cohérent avec le grain, le curseur, etc. ailleurs sur le site).
  if (!canvas || !window.THREE || REDUCE) return;

  const HOPS = [
    { label: 'src.local', sub: 'toi' },
    { label: 'dev.module', sub: 'développement web' },
    { label: 'net.module', sub: 'réseaux & systèmes' },
    { label: 'sec.module', sub: 'cybersécurité' },
    { label: 'watch.module', sub: 'veille techno' },
    { label: 'contact.dst', sub: 'destination' },
  ];

  function cssVar(name, fallback) {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fallback;
  }
  function hexToInt(hex) {
    return parseInt(hex.replace('#', ''), 16);
  }

  let renderer, scene, camera, tube, nodes = [], cores = [];
  let width, height;

  function buildScene() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);

    const points = [
      new THREE.Vector3(-1.6, 0.35, 2.2),
      new THREE.Vector3(-0.5, -0.3, 0.6),
      new THREE.Vector3(1.1, 0.45, -0.9),
      new THREE.Vector3(-0.7, -0.45, -2.4),
      new THREE.Vector3(1.3, 0.25, -4.0),
      new THREE.Vector3(0, 0, -5.4),
    ];
    const curve = new THREE.CatmullRomCurve3(points);
    curve.curveType = 'centripetal';

    const inkColor = hexToInt(cssVar('--fg', '#0E0E0E'));
    const accentColor = hexToInt(cssVar('--accent', '#1B29FF'));

    const tubeGeo = new THREE.TubeGeometry(curve, 220, 0.014, 8, false);
    const tubeMat = new THREE.MeshBasicMaterial({ color: accentColor, transparent: true, opacity: 0.45 });
    tube = new THREE.Mesh(tubeGeo, tubeMat);
    scene.add(tube);

    points.forEach((p) => {
      const wire = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.09, 0),
        new THREE.MeshBasicMaterial({ color: inkColor, wireframe: true, transparent: true, opacity: 0.55 })
      );
      wire.position.copy(p);
      scene.add(wire);
      nodes.push(wire);

      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.032, 12, 12),
        new THREE.MeshBasicMaterial({ color: accentColor })
      );
      core.position.copy(p);
      scene.add(core);
      cores.push(core);
    });

    return curve;
  }

  function measure() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
  }

  function resize() {
    measure();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function updateThemeColors() {
    const inkColor = hexToInt(cssVar('--fg', '#0E0E0E'));
    const accentColor = hexToInt(cssVar('--accent', '#1B29FF'));
    nodes.forEach((n) => n.material.color.setHex(inkColor));
    cores.forEach((c) => c.material.color.setHex(accentColor));
    if (tube) tube.material.color.setHex(accentColor);
  }

  function addHopLine(i) {
    if (!hudList) return;
    const hop = HOPS[i];
    const ms = (i === 0 ? 0.6 : 0.6 + i * (3 + Math.random() * 3)).toFixed(1);
    const li = document.createElement('li');
    li.innerHTML = `${String(i + 1).padStart(2, '0')} ${hop.label} — ${hop.sub}<span class="hop-ms">${ms} ms</span>`;
    hudList.appendChild(li);
    requestAnimationFrame(() => li.classList.add('is-in'));
    if (window.__ddbSound) window.__ddbSound.beep({ freq: 380 + i * 55, duration: 0.07, type: 'triangle', gain: 0.045 });
  }

  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setClearColor(0x000000, 0);
    measure();
    const curve = buildScene();
    resize();
    window.addEventListener('resize', resize);

    canvas.classList.add('is-ready');

    const state = { t: 0 };
    let lastHop = -1;
    const tick = () => {
      const t = Math.min(state.t, 0.995);
      const pos = curve.getPointAt(t);
      const tangent = curve.getTangentAt(t);
      camera.position.copy(pos).add(new THREE.Vector3(0, 0.15, 0.6));
      camera.lookAt(pos.clone().add(tangent));

      const hopIndex = Math.min(HOPS.length - 1, Math.floor(t * HOPS.length));
      if (hopIndex > lastHop) {
        for (let i = lastHop + 1; i <= hopIndex; i++) addHopLine(i);
        lastHop = hopIndex;
      }
      renderer.render(scene, camera);
    };

    if (window.gsap) {
      gsap.to(state, {
        t: 1, duration: 4.5, ease: 'power2.inOut',
        onUpdate: tick,
        onComplete: () => {
          // Dérive lente une fois la destination atteinte : la scène
          // reste vivante sans redevenir un carrousel qu'il faut suivre.
          gsap.to(scene.rotation, { y: 0.12, duration: 6, yoyo: true, repeat: -1, ease: 'sine.inOut', onUpdate: () => renderer.render(scene, camera) });
        },
      });

      // Léger parallaxe au scroll dans le hero uniquement (pas de scroll
      // hijacké, pas de hauteur ajoutée) : on déplace le groupe de nœuds,
      // jamais la caméra, pour ne jamais entrer en conflit avec le vol
      // initial ou la dérive une fois la destination atteinte.
      if (window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
          trigger: canvas.closest('.hero'),
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
          onUpdate: (self) => {
            scene.position.y = self.progress * -0.35;
            renderer.render(scene, camera);
          },
        });
      }
    } else {
      // Pas de GSAP disponible : va directement à l'état final.
      state.t = 1; tick();
      HOPS.forEach((_, i) => { if (i > lastHop) addHopLine(i); });
    }

    new MutationObserver(updateThemeColors).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  } catch (err) {
    // Repli silencieux : le canvas et le HUD restent invisibles (opacity 0),
    // le hero se comporte exactement comme sans cette scène.
  }
})();
