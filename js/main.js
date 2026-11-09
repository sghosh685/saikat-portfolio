/**
 * Saikat Ghosh Portfolio — Core JavaScript
 * Modern Web Standards, A11y Announcements & Interactive Features
 */

(function () {
  'use strict';

  // --- Theme Management ---
  const root = document.documentElement;
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  const themeBtn = document.getElementById('tt');

  const SUN_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line><line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line><line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line><line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line></svg>`;
  const MOON_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  function getActiveTheme() {
    const explicit = root.getAttribute('data-theme');
    if (explicit) return explicit;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function updateThemeUI(theme) {
    if (!themeBtn) return;
    const isDark = theme === 'dark';
    themeBtn.innerHTML = isDark ? SUN_ICON : MOON_ICON;
    const nextThemeLabel = isDark ? 'Switch to light theme' : 'Switch to dark theme';
    themeBtn.setAttribute('aria-label', nextThemeLabel);
    themeBtn.setAttribute('title', nextThemeLabel);
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (metaColorScheme) {
      metaColorScheme.content = theme;
    }
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      /* ignore storage quota issues */
    }
    updateThemeUI(theme);
  }

  // Initialize theme UI
  updateThemeUI(getActiveTheme());

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      const current = getActiveTheme();
      const target = current === 'dark' ? 'light' : 'dark';
      setTheme(target);
    });
  }

  // Listen to OS system preference changes if user hasn't explicitly set a preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      updateThemeUI(e.matches ? 'dark' : 'light');
    }
  });

  // --- Scroll Progress Indicator ---
  const progressBar = document.getElementById('pg');
  function updateScrollProgress() {
    if (!progressBar) return;
    const scrollHeight = root.scrollHeight - window.innerHeight;
    const scrolled = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, scrolled))}%`;
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  // --- Project Filter System ---
  const filterButtons = document.querySelectorAll('.fb');
  const projectCards = document.querySelectorAll('.bld');

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const selectedFilter = button.dataset.f;

      // Update ARIA pressed state and visual class
      filterButtons.forEach(function (btn) {
        const isActive = btn === button;
        btn.classList.toggle('on', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      // Filter visible cards
      projectCards.forEach(function (card) {
        const match = selectedFilter === 'all' || card.dataset.cat === selectedFilter;
        if (match) {
          card.removeAttribute('hidden');
        } else {
          card.setAttribute('hidden', '');
        }
      });
    });
  });

  // --- Copy Email Button with Accessible Announcement ---
  const copyBtn = document.getElementById('cp');
  const copyStatus = document.getElementById('copy-status');
  const EMAIL_ADDRESS = 'saikatghosh369@gmail.com';

  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(EMAIL_ADDRESS).then(
          function () {
            handleCopySuccess();
          },
          function () {
            fallbackPromptCopy();
          }
        );
      } else {
        fallbackPromptCopy();
      }
    });
  }

  function handleCopySuccess() {
    copyBtn.textContent = 'Copied ✓';
    if (copyStatus) {
      copyStatus.textContent = 'Email address copied to clipboard.';
    }
    setTimeout(function () {
      copyBtn.textContent = 'Copy email';
      if (copyStatus) {
        copyStatus.textContent = '';
      }
    }, 2500);
  }

  function fallbackPromptCopy() {
    window.prompt('Copy email to clipboard:', EMAIL_ADDRESS);
  }

  // --- Intersection Observer for Animations & Nav Highlighting ---
  if ('IntersectionObserver' in window) {
    // 1. Reveal Animation
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.card, .job, .proj, .stat, .facts, .glance').forEach(function (el) {
      el.classList.add('rv');
      revealObserver.observe(el);
    });

    // 2. Active Section Nav Spy
    const navLinks = document.querySelectorAll('nav ul a');
    const sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(function (link) {
              const href = link.getAttribute('href');
              link.classList.toggle('act', href === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    document.querySelectorAll('main section, main .hero').forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  // --- Résumé Print & Preview Controls ---
  const heroPrintBtn = document.getElementById('hero-print-btn');
  const navResumeBtn = document.getElementById('nav-resume-btn');
  const exitResumeBtn = document.getElementById('exit-resume-btn');

  if (heroPrintBtn) {
    heroPrintBtn.addEventListener('click', function () {
      window.print();
    });
  }

  function setResumePreview(active) {
    document.body.classList.toggle('resume-preview-active', active);
    if (navResumeBtn) {
      navResumeBtn.textContent = active ? 'Portfolio View' : 'Résumé View';
      navResumeBtn.setAttribute('title', active ? 'Switch to interactive web portfolio' : 'Switch to structured résumé preview');
    }
    const resumeView = document.getElementById('resume-print-view');
    if (resumeView) {
      resumeView.setAttribute('aria-hidden', active ? 'false' : 'true');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (navResumeBtn) {
    navResumeBtn.addEventListener('click', function () {
      const isCurrentlyActive = document.body.classList.contains('resume-preview-active');
      setResumePreview(!isCurrentlyActive);
    });
  }

  if (exitResumeBtn) {
    exitResumeBtn.addEventListener('click', function () {
      setResumePreview(false);
    });
  }
})();
