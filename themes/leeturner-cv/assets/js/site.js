// Theme toggle and the print button.
(function () {
  var root = document.documentElement;

  document.querySelectorAll('.theme-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  });

  // Only offer the print button when JS runs to handle it.
  document.querySelectorAll('.print-button').forEach(function (button) {
    button.hidden = false;
    button.addEventListener('click', function () { window.print(); });
  });
})();
