/**
 * SPÉCIMEN — retours sonores (assets/js/sound.js).
 *
 * Sons synthétisés en direct via Web Audio API — aucun fichier audio à
 * héberger. Toujours désactivé par défaut et jamais joué avant un clic
 * explicite sur l'interrupteur (règle stricte : pas de son en autoplay,
 * surtout pas devant un jury). Le choix est mémorisé (localStorage).
 *
 * Expose window.__ddbSound.beep(...) pour que d'autres scripts (la
 * scène TRACEROUTE, notamment) puissent déclencher un son ponctuel sans
 * dépendre de l'ordre de chargement des fichiers.
 */
(function () {
  'use strict';

  const KEY = 'ddb-sound';
  const buttons = document.querySelectorAll('.sound-toggle');

  let ctx = null;
  let enabled = false;
  try { enabled = localStorage.getItem(KEY) === 'on'; } catch (err) { /* stockage indisponible */ }

  function setState(on) {
    enabled = on;
    buttons.forEach((b) => {
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.classList.toggle('is-on', on);
    });
    try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch (err) { /* stockage indisponible */ }
  }
  setState(enabled);

  function ensureContext() {
    if (ctx) {
      if (ctx.state === 'suspended') ctx.resume();
      return ctx;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    try {
      ctx = new AC();
      return ctx;
    } catch (err) {
      return null;
    }
  }

  /**
   * Joue une note courte. { freq, duration, type, gain }.
   * Ne fait rien si le son est désactivé — sûr à appeler partout.
   */
  function beep(opts) {
    if (!enabled) return;
    const o = opts || {};
    const freq = o.freq || 660;
    const duration = o.duration || 0.08;
    const type = o.type || 'sine';
    const gain = o.gain || 0.05;
    const c = ensureContext();
    if (!c) return;
    try {
      const osc = c.createOscillator();
      const g = c.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, c.currentTime);
      g.gain.setValueAtTime(0, c.currentTime);
      g.gain.linearRampToValueAtTime(gain, c.currentTime + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + duration);
      osc.connect(g).connect(c.destination);
      osc.start();
      osc.stop(c.currentTime + duration + 0.02);
    } catch (err) { /* pas grave, silence */ }
  }

  window.__ddbSound = { beep: beep, isEnabled: function () { return enabled; } };

  buttons.forEach((b) => {
    b.addEventListener('click', () => {
      const next = !enabled;
      ensureContext();
      setState(next);
      if (next) beep({ freq: 880, duration: 0.09, type: 'sine', gain: 0.06 });
    });
  });

  // Petit retour discret sur les liens/boutons/accordéons, uniquement
  // quand le son est activé — jamais de bruit ambiant en continu.
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button, summary');
    if (!target || target.classList.contains('sound-toggle')) return;
    beep({ freq: 520, duration: 0.045, type: 'sine', gain: 0.035 });
  });
})();
