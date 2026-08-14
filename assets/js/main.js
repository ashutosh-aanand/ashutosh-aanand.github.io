(function () {
  'use strict';

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
})();
