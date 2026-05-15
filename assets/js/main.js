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
    function setMobileNavOpen(open) {
      if (open) {
        mobileNav.removeAttribute('hidden');
      } else {
        mobileNav.setAttribute('hidden', '');
      }
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    menuBtn.addEventListener('click', function () {
      setMobileNavOpen(mobileNav.hasAttribute('hidden'));
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMobileNavOpen(false);
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !mobileNav.hasAttribute('hidden')) {
        setMobileNavOpen(false);
        menuBtn.focus();
      }
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

  (function setupBackToTop() {
    if (document.getElementById('back-to-top')) return;
    var btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.type = 'button';
    btn.className = 'cmx-back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    document.body.appendChild(btn);

    function refreshVisibility() {
      btn.classList.toggle('cmx-back-to-top--visible', window.scrollY > 280);
    }
    window.addEventListener('scroll', refreshVisibility, { passive: true });
    refreshVisibility();

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    var footer = document.getElementById('site-footer');
    if (footer && typeof IntersectionObserver !== 'undefined') {
      var io = new IntersectionObserver(
        function (entries) {
          var raised = false;
          for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
              raised = true;
              break;
            }
          }
          btn.classList.toggle('cmx-back-to-top--raised', raised);
        },
        { root: null, rootMargin: '0px 0px 96px 0px', threshold: 0 }
      );
      io.observe(footer);
    }
  })();
})();
