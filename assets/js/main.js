/**
 * SPÉCIMEN — comportements du site (défilement fluide, révélations,
 * curseur personnalisé, préchargeur, transition entre pages).
 * Respecte prefers-reduced-motion à chaque étape.
 */
(function () {
  'use strict';

  const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const CAN_HOVER = window.matchMedia('(pointer: fine)').matches && !REDUCE;
  const root = document.documentElement;
  const body = document.body;

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ---------- Thème clair / sombre ---------- */
  (function () {
    let saved = null;
    try { saved = localStorage.getItem('ddb-theme'); } catch (err) { /* stockage indisponible */ }
    if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);

    function syncThemeColor() {
      const meta = document.querySelector('meta[name="theme-color"]');
      if (!meta) return;
      const bg = getComputedStyle(root).getPropertyValue('--bg').trim();
      if (bg) meta.setAttribute('content', bg);
    }
    syncThemeColor();

    document.querySelectorAll('.theme-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const current = root.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
        const next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('ddb-theme', next); } catch (err) { /* stockage indisponible */ }
        syncThemeColor();
      });
    });
  })();

  /* ---------- Défilement fluide (Lenis) ---------- */
  let lenis = null;
  if (!REDUCE && window.Lenis) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on('scroll', () => window.ScrollTrigger && ScrollTrigger.update());
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }

  /* ---------- Curseur : positionnement de l'étiquette ----------
     Le rendu visuel du curseur (simulation de fluide) vit dans son
     propre fichier, assets/js/fluid-cursor.js, qui gère lui-même ses
     conditions d'activation. Ici on ne place que l'étiquette texte
     ("PDF", "Source ↗"…) et on détecte le survol des éléments cliquables. */
  if (CAN_HOVER) {
    root.classList.add('has-cursor');
    const label = document.getElementById('cursorLabel');
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;

    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      if (label) label.style.transform = `translate(${mx + 26}px, ${my - 12}px)`;
    }, { passive: true });

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('[data-cursor], a, button, summary');
      if (!target) return;
      const text = target.dataset.cursor || (target.tagName === 'SUMMARY' ? (target.closest('details').open ? 'Fermer' : 'Ouvrir') : '');
      if (label) label.textContent = text;
      root.classList.toggle('cursor-hover', !!text);
    });
    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('[data-cursor], a, button, summary');
      if (target && !e.relatedTarget?.closest?.('[data-cursor], a, button, summary')) {
        root.classList.remove('cursor-hover');
        if (label) label.textContent = '';
      }
    });
  }

  /* ---------- Boutons magnétiques ---------- */
  if (CAN_HOVER) {
    document.querySelectorAll('.magnetic').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const relX = e.clientX - (r.left + r.width / 2);
        const relY = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${relX * 0.25}px, ${relY * 0.35}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- Menu mobile ---------- */
  const burger = document.getElementById('navBurger');
  const navMobile = document.getElementById('navMobile');
  if (burger && navMobile) {
    burger.addEventListener('click', () => {
      const open = navMobile.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navMobile.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
      navMobile.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }));
  }

  /* ---------- Retour en haut ---------- */
  const toTop = document.getElementById('toTop');
  if (toTop) {
    window.addEventListener('scroll', () => {
      toTop.classList.toggle('is-visible', window.scrollY > 600);
    }, { passive: true });
  }

  /* ---------- Formulaire de contact (repli mailto) ----------
     Version statique (GitHub Pages) : pas de serveur PHP disponible pour
     traiter le formulaire, donc on ouvre directement la messagerie de
     l'utilisateur avec le message pré-rempli, comme sur l'ancien site.
     Enregistré tôt, avant les blocs GSAP décoratifs ci-dessous : une
     erreur d'animation ne doit jamais empêcher le formulaire de marcher. */
  const form = document.getElementById('contactForm');
  if (form) {
    const note = document.getElementById('formNote');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (form.site_web && form.site_web.value) return; // honeypot : robot probable, on ignore.
      const nom = (form.nom?.value || '').trim();
      const email = (form.email?.value || '').trim();
      const message = (form.message?.value || '').trim();
      if (!nom || !email || !message) {
        note.textContent = 'Merci de remplir tous les champs.';
        note.className = 'form-note is-error';
        return;
      }
      const subject = encodeURIComponent(`Contact portfolio — ${nom}`);
      const body = encodeURIComponent(`${message}\n\n— ${nom} (${email})`);
      window.location.href = `mailto:deliodcb@gmail.com?subject=${subject}&body=${body}`;
      note.textContent = 'Ta messagerie va s\'ouvrir avec le message prêt à envoyer.';
      note.className = 'form-note is-ok';
    });
  }

  /* ---------- Rideau de transition entre les pages ---------- */
  const curtain = document.getElementById('curtain');
  const curtainLabel = curtain ? curtain.querySelector('.curtain-label') : null;

  function goWithCurtain(url, label) {
    if (!curtain || REDUCE || !window.gsap) { window.location.href = url; return; }
    if (curtainLabel) curtainLabel.textContent = label;
    sessionStorage.setItem('curtainNav', '1');
    gsap.to(curtain, {
      yPercent: -100, duration: 0.7, ease: 'power3.inOut',
      onComplete: () => { window.location.href = url; },
    });
  }

  document.querySelectorAll('[data-transition]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      goWithCurtain(link.href, link.dataset.transition.toUpperCase());
    });
  });

  function revealCurtainOut() {
    if (!curtain) return;
    curtain.style.transform = 'translateY(0%)';
    if (REDUCE || !window.gsap) { curtain.style.display = 'none'; return; }
    gsap.to(curtain, { yPercent: 100, duration: 0.7, ease: 'power3.inOut', delay: 0.15 });
  }

  /* ---------- Préchargeur (page d'accueil uniquement) ---------- */
  const preloader = document.getElementById('preloader');
  const arrivedByCurtain = sessionStorage.getItem('curtainNav') === '1';
  sessionStorage.removeItem('curtainNav');

  function runPreloader() {
    const countEl = document.getElementById('preloaderCount');
    if (REDUCE || !window.gsap) {
      preloader.style.display = 'none';
      playHeroReveal();
      return;
    }
    const counter = { n: 0 };
    gsap.timeline({
      onComplete: () => {
        gsap.to(preloader, {
          duration: 0.9, ease: 'power4.inOut',
          onStart: () => {
            preloader.querySelector('.preloader-panel--top').style.transform = 'translateY(-105%)';
            preloader.querySelector('.preloader-panel--bottom').style.transform = 'translateY(105%)';
          },
        });
        gsap.to('.preloader-count, .preloader-name', { opacity: 0, duration: 0.4 });
        gsap.delayedCall(1, () => { preloader.style.display = 'none'; playHeroReveal(); });
      },
    })
      .to(counter, {
        n: 100, duration: 1.6, ease: 'power2.inOut',
        onUpdate: () => { countEl.textContent = String(Math.round(counter.n)).padStart(2, '0'); },
      })
      .to({}, { duration: 0.3 });
  }

  /* ---------- Révélation du hero (titre pré-découpé en lignes) ---------- */
  function playHeroReveal() {
    const lines = document.querySelectorAll('.hero-title .line, .veille-title .line');
    if (!lines.length) return;
    try {
      if (REDUCE || !window.gsap) throw new Error('no-gsap');
      gsap.set(lines, { yPercent: 110 });
      gsap.to(lines, { yPercent: 0, duration: 1, ease: 'power4.out', stagger: 0.08, delay: 0.1 });
      gsap.from('.hero-foot, .veille-lede, .veille-back', { opacity: 0, y: 20, duration: 0.8, delay: 0.5, stagger: 0.1 });
    } catch (err) {
      lines.forEach((l) => { l.style.transform = 'none'; });
      document.querySelectorAll('.hero-foot, .veille-lede, .veille-back').forEach((el) => { el.style.opacity = 1; });
    }
  }

  // Chaque bloc GSAP ci-dessous est isolé dans son propre try/catch :
  // si l'un échoue (CDN capricieux, navigateur inhabituel…), les autres
  // et surtout le contenu lui-même restent fonctionnels et visibles.

  try {
    if (preloader) {
      if (body.classList.contains('page-accueil') && !arrivedByCurtain) {
        runPreloader();
      } else {
        preloader.style.display = 'none';
        if (arrivedByCurtain) revealCurtainOut();
        playHeroReveal();
      }
    }
  } catch (err) {
    if (preloader) preloader.style.display = 'none';
    playHeroReveal();
  }

  /* ---------- Révélations au scroll (SplitType + ScrollTrigger) ---------- */
  try {
    if (!window.gsap || !window.ScrollTrigger || REDUCE) throw new Error('no-gsap');

    if (window.SplitType) {
      document.querySelectorAll('.split-lines').forEach((el) => {
        const split = new SplitType(el, { types: 'lines', lineClass: 'split-line' });
        split.lines.forEach((line) => {
          const wrap = document.createElement('span');
          wrap.className = 'split-line-wrap';
          wrap.style.display = 'block';
          wrap.style.overflow = 'hidden';
          line.parentNode.insertBefore(wrap, line);
          wrap.appendChild(line);
        });
        gsap.from(split.lines, {
          yPercent: 110, opacity: 0, duration: 0.9, ease: 'power4.out', stagger: 0.06,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });
    }

    gsap.utils.toArray('.reveal-group').forEach((group) => {
      const items = group.children.length ? Array.from(group.children) : [group];
      gsap.from(items, {
        opacity: 0, y: 24, duration: 0.7, ease: 'power3.out', stagger: 0.05,
        scrollTrigger: { trigger: group, start: 'top 92%' },
      });
    });

    /* Section épinglée : le bandeau de la page Veille reste fixe pendant
       que les statistiques défilent sous lui. */
    const pinTarget = document.querySelector('[data-pin]');
    if (pinTarget) {
      ScrollTrigger.create({
        trigger: pinTarget,
        start: 'top top+=88',
        end: '+=260',
        pin: true,
        pinSpacing: true,
      });
    }
  } catch (err) {
    document.querySelectorAll('.split-lines, .reveal-group').forEach((el) => {
      el.style.opacity = 1;
    });
  }

})();
