(function () {
  'use strict';

  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }

  var menuBtn = document.getElementById('mobile-menu-btn');
  var mobileNav = document.getElementById('mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      mobileNav.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', String(!mobileNav.classList.contains('hidden')));
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  var dealerForm = document.getElementById('dealer-form');
  if (dealerForm) {
    dealerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('form-success');
      if (msg) {
        msg.classList.remove('hidden');
        dealerForm.reset();
        msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }
})();
