/**
 * Shared header & footer (ek hi jagah edit karo — `assets/js/layout.js`).
 * Logo: footer `logo-lockup.png` (full). Header `logo-lockup-header.png` — same brand, bulky teal slab hata di.
 * Har page: `<body data-page="...">` + `<div id="site-header"></div>` + `<div id="site-footer"></div>`
 * data-page: home | about | products | gallery | contact | product-wall | product-multi | product-floor
 */
(function () {
  'use strict';

  var page = document.body.getAttribute('data-page') || 'home';

  function navDesktop(key) {
    var active = 'text-sm font-medium text-brandcyan transition';
    var idle = 'text-sm font-medium text-royal transition hover:text-brandcyan';
    if (key === 'home') return page === 'home' ? active : idle;
    if (key === 'about') return page === 'about' ? active : idle;
    if (key === 'products')
      return page === 'products' || page === 'product-wall' || page === 'product-multi' || page === 'product-floor'
        ? active
        : idle;
    if (key === 'gallery') return page === 'gallery' ? active : idle;
    if (key === 'contact') return page === 'contact' ? active : idle;
    return idle;
  }

  function navMobile(key) {
    var active = 'py-2 font-medium text-brandcyan';
    var idle = 'py-2 font-medium text-white/95 transition hover:text-brandcyan';
    if (key === 'home') return page === 'home' ? active : idle;
    if (key === 'about') return page === 'about' ? active : idle;
    if (key === 'products')
      return page === 'products' || page === 'product-wall' || page === 'product-multi' || page === 'product-floor'
        ? active
        : idle;
    if (key === 'gallery') return page === 'gallery' ? active : idle;
    if (key === 'contact') return page === 'contact' ? active : idle;
    return idle;
  }

  var logoHeader =
    '<img src="images/logo-lockup.png" alt="Chetak Maxx Building Solutions" class="site-logo site-logo--nav block h-9 w-auto max-w-[230px] object-contain object-left sm:h-10 sm:max-w-[268px]" width="268" height="78" decoding="async" />';

  var logoFooter =
    '<img src="images/logo-lockup.png" alt="Chetak Maxx Building Solutions" class="site-logo site-logo--footer block h-9 w-auto max-w-[220px] object-contain object-left sm:h-10 sm:max-w-[260px]" width="260" height="80" decoding="async" />';

  var headerHtml =
    '<header class="fixed left-0 right-0 top-0 z-50 glass-nav border-b border-white/10">' +
    '<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">' +
    '<a href="index.html" class="group flex shrink-0 items-center transition hover:opacity-90">' +
    logoHeader +
    '</a>' +
    '<nav class="hidden items-center gap-8 lg:flex" aria-label="Main">' +
    '<a href="index.html" class="' +
    navDesktop('home') +
    '">Home</a>' +
    '<a href="about.html" class="' +
    navDesktop('about') +
    '">About Us</a>' +
    '<a href="products.html" class="' +
    navDesktop('products') +
    '">Products</a>' +
    '<a href="gallery.html" class="' +
    navDesktop('gallery') +
    '">Gallery</a>' +
    '<a href="contact.html" class="' +
    navDesktop('contact') +
    '">Contact</a>' +
    '<a href="contact.html#dealer" class="rounded-full bg-brandgold px-5 py-2 text-sm font-semibold text-royal-deep shadow-md transition hover:bg-brandgold-light">Trade Enquiry</a>' +
    '</nav>' +
    '<button type="button" id="mobile-menu-btn" class="inline-flex items-center justify-center rounded-lg border border-slate-400 bg-white/80 p-2 text-royal shadow-sm cmx-nav-mobile-only" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">' +
    '<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>' +
    '</button></div>' +
    '<div id="mobile-nav" hidden class="border-t border-white/10 bg-royal-deep/95 px-4 py-4 cmx-nav-mobile-only">' +
    '<div class="flex flex-col gap-3">' +
    '<a href="index.html" class="' +
    navMobile('home') +
    '">Home</a>' +
    '<a href="about.html" class="' +
    navMobile('about') +
    '">About Us</a>' +
    '<a href="products.html" class="' +
    navMobile('products') +
    '">Products</a>' +
    '<a href="gallery.html" class="' +
    navMobile('gallery') +
    '">Gallery</a>' +
    '<a href="contact.html" class="' +
    navMobile('contact') +
    '">Contact</a>' +
    '<a href="contact.html#dealer" class="rounded-lg bg-brandgold py-3 text-center font-semibold text-royal-deep">Trade Enquiry</a>' +
    '</div></div></header>';

  var footerHtml =
    '<footer class="border-t border-slate-200 bg-slate-100 py-14">' +
    '<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">' +
    '<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">' +
    '<div><a href="index.html" class="group inline-flex">' +
    logoFooter +
    '</a>' +
    '<p class="mt-5 text-sm text-slate-600">Premium tile adhesives and construction chemicals for professionals who demand reliability.</p></div>' +
    '<div><p class="font-display text-sm font-bold uppercase tracking-wider text-royal">Quick Links</p>' +
    '<ul class="mt-4 space-y-2 text-sm">' +
    '<li><a href="index.html" class="text-slate-600 hover:text-brandcyan">Home</a></li>' +
    '<li><a href="about.html" class="text-slate-600 hover:text-brandcyan">About Us</a></li>' +
    '<li><a href="products.html" class="text-slate-600 hover:text-brandcyan">Products</a></li>' +
    '<li><a href="gallery.html" class="text-slate-600 hover:text-brandcyan">Gallery</a></li>' +
    '<li><a href="contact.html" class="text-slate-600 hover:text-brandcyan">Contact</a></li></ul></div>' +
    '<div><p class="font-display text-sm font-bold uppercase tracking-wider text-royal">Connect</p>' +
    '<div class="mt-4 flex gap-3">' +
    '<a href="#" class="flex h-10 w-10 items-center justify-center rounded-full bg-white text-royal shadow ring-1 ring-slate-200 transition hover:bg-brandcyan hover:text-white" aria-label="LinkedIn"><svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>' +
    '<a href="#" class="flex h-10 w-10 items-center justify-center rounded-full bg-white text-royal shadow ring-1 ring-slate-200 transition hover:bg-brandcyan hover:text-white" aria-label="Facebook"><svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.858v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>' +
    '<a href="#" class="flex h-10 w-10 items-center justify-center rounded-full bg-white text-royal shadow ring-1 ring-slate-200 transition hover:bg-brandcyan hover:text-white" aria-label="Instagram"><svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>' +
    '</div></div>' +
    '<div><p class="font-display text-sm font-bold uppercase tracking-wider text-royal">Certification</p>' +
    '<p class="mt-4 font-display text-2xl font-bold text-royal">ISO 9001:2015</p>' +
    '<p class="mt-1 text-sm text-slate-600">Quality management certified operations.</p></div></div>' +
    '<div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 sm:flex-row sm:text-left">' +
    '<p>© <span id="y"></span> Chetak Maxx Building Solutions. All rights reserved.</p>' +
    '<p class="font-medium text-slate-400 cmx-footer-tagline">नाम नहीं, Quality में नंबर 1</p></div></div></footer>';

  function injectChrome() {
    var h = document.getElementById('site-header');
    var f = document.getElementById('site-footer');
    if (h && !h.getAttribute('data-cmx-layout')) {
      h.innerHTML = headerHtml;
      h.setAttribute('data-cmx-layout', '1');
    }
    if (f) {
      if (!f.getAttribute('data-cmx-layout')) {
        f.innerHTML = footerHtml;
        f.setAttribute('data-cmx-layout', '1');
        var y = document.getElementById('y');
        if (y) y.textContent = new Date().getFullYear();
      }
      return;
    }
    document.addEventListener('DOMContentLoaded', injectChrome, { once: true });
  }

  injectChrome();
})();
