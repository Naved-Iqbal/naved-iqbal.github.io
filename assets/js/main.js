// Mobile nav toggle
(function () {
  const toggle = document.getElementById('navToggle');
  const panel = document.getElementById('navMobile');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', function () {
    const isOpen = panel.classList.toggle('show');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  panel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      panel.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Scroll reveal
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(function (el) { observer.observe(el); });
})();
