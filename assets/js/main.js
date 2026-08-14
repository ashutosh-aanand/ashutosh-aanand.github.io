(function () {
  'use strict';

  /* ---- Theme toggle ----------------------------------------------------- */

  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* private mode */ }
    });
  }

  // Follow the OS only while the visitor has not made an explicit choice.
  if (window.matchMedia) {
    var query = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function (e) {
      var stored = null;
      try { stored = localStorage.getItem('theme'); } catch (err) { /* noop */ }
      if (!stored) root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    };
    if (query.addEventListener) query.addEventListener('change', onChange);
    else if (query.addListener) query.addListener(onChange);
  }

  /* ---- By date / by tag ------------------------------------------------- */

  var buttons = document.querySelectorAll('.segmented__btn');
  var panels = document.querySelectorAll('[data-panel]');

  function show(view) {
    buttons.forEach(function (btn) {
      var active = btn.dataset.view === view;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    panels.forEach(function (panel) {
      panel.hidden = panel.dataset.panel !== view;
    });
    try { localStorage.setItem('listing-view', view); } catch (e) { /* noop */ }
  }

  if (buttons.length) {
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () { show(btn.dataset.view); });
    });

    var saved = null;
    try { saved = localStorage.getItem('listing-view'); } catch (e) { /* noop */ }
    if (saved === 'tag') show('tag');
  }
})();
