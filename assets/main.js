/* Guneet Kaur Julka · portfolio behaviour */

/* ── theme switch: light (default) · sepia · dark, saved per visitor ── */
(function () {
  var html = document.documentElement;
  var THEMES = ['light', 'sepia', 'dark'];
  var inputs = Array.prototype.slice.call(document.querySelectorAll('input[name="theme"]'));
  var meta = document.querySelector('meta[name="theme-color"]');
  var BAR = { light: '#0F5C52', sepia: '#285A4A', dark: '#0B1513' };

  function apply(theme) {
    if (theme === 'light') delete html.dataset.theme;
    else html.dataset.theme = theme;
    inputs.forEach(function (i) { i.checked = (i.value === theme); });
    if (meta) meta.setAttribute('content', BAR[theme]);
  }

  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) { /* no-op */ }
  apply(THEMES.indexOf(stored) > -1 ? stored : 'light');

  inputs.forEach(function (i) {
    i.addEventListener('change', function () {
      if (!i.checked) return;
      try { localStorage.setItem('theme', i.value); } catch (e) { /* no-op */ }
      apply(i.value);
    });
  });
}());

/* ── highlight the nav link for the section in view ── */
(function () {
  if (!('IntersectionObserver' in window)) return;
  var links = {};
  document.querySelectorAll('.nav a[href^="#"]').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting || !links[e.target.id]) return;
      Object.keys(links).forEach(function (k) { links[k].classList.toggle('is-active', k === e.target.id); });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(links).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) obs.observe(el);
  });
}());

/* ── gentle fade-in as sections scroll into view ── */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  var targets = document.querySelectorAll('.section-head, .comp, .role, .quote, .beyond, .pillars li, .edu-card, .tools, .contact-card, .article, .newsletters');
  document.documentElement.classList.add('js-reveal');
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  targets.forEach(function (t) { t.classList.add('reveal'); obs.observe(t); });
}());

/* ── profile photo: loaded from an external URL, never stored in the repo.
      Falls back to the monogram if the URL is empty, expired or blocked. ── */
(function () {
  document.querySelectorAll('[data-photo]').forEach(function (slot) {
    var url = (slot.getAttribute('data-photo') || '').trim();
    if (!url) return;
    var img = new Image();
    img.alt = '';                       /* decorative: the name sits right beside it */
    img.decoding = 'async';
    img.referrerPolicy = 'no-referrer'; /* some CDNs refuse hotlinked requests that carry a referrer */
    img.onload = function () { slot.classList.add('has-photo'); };
    img.onerror = function () { img.remove(); };
    img.src = url;
    slot.appendChild(img);
  });
}());

/* ── keep the footer year current ── */
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}());
