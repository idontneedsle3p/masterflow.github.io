(function () {
  'use strict';

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var navMobile = document.querySelector('.nav-mobile');

  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', function () {
      var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
      navMobile.classList.toggle('is-open');
    });

    // Close menu when a link is clicked (in-page anchor)
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMobile.classList.remove('is-open');
      });
    });
  }

  // Кнопки «Попробовать бота» — показываем уведомление вместо перехода
  document.querySelectorAll('a[href*="t.me/your_booking_bot"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      alert('В разработке');
    });
  });

  // Smooth scroll for anchor links (enhancement; CSS scroll-behavior already set)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
