/* =====================================================
   Insight Hub — Main JavaScript
   ===================================================== */

'use strict';

/* ── Google Analytics (gtag.js) — Automatically active on all pages ── */
(function() {
  const GA_ID = 'G-CMF4NQ1GP6';
  if (!window.gtagScriptInjected) {
    window.gtagScriptInjected = true;
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
  }
})();


/* ── Article Database (for search) ── */
const ARTICLES = [
  { title: 'Nalanda University: History, Location and Importance', category: 'History', url: 'blog/nalanda-history.html', keywords: 'nalanda ancient university bihar buddhism' },
  { title: 'History of Ancient India: Major Periods and Events', category: 'History', url: 'blog/ancient-india-history.html', keywords: 'ancient india vedic period empires civilization' },
  { title: 'Geography of India: Physical Features and Regions', category: 'Geography', url: 'blog/geography-of-india.html', keywords: 'india geography physical features regions terrain' },
  { title: 'Major Rivers of India and Their Importance', category: 'Geography', url: 'blog/major-rivers-india.html', keywords: 'rivers ganga yamuna brahmaputra godavari krishna' },
  { title: 'Himalayan Mountains: Geography, Climate and Importance', category: 'Geography', url: 'blog/himalayan-mountains.html', keywords: 'himalaya mountains climate snow ranges peaks' },
  { title: 'Indian Monsoon: How It Works and Why It Matters', category: 'Geography', url: 'blog/indian-monsoon.html', keywords: 'monsoon rain season southwest northeast weather' },
  { title: 'Maurya Empire: History, Administration and Achievements', category: 'History', url: 'blog/maurya-empire.html', keywords: 'maurya chandragupta ashoka empire pataliputra' },
  { title: 'Gupta Empire: The Golden Age of Ancient India', category: 'History', url: 'blog/gupta-empire.html', keywords: 'gupta golden age chandragupta vikramaditya arts science' },
  { title: 'How to Make Effective College Notes', category: 'Education', url: 'blog/effective-college-notes.html', keywords: 'notes study college cornell method organization' },
  { title: 'How to Prepare for University Exams', category: 'Education', url: 'blog/prepare-university-exams.html', keywords: 'exams study preparation revision schedule tips' },
  { title: 'Best Study Techniques for College Students', category: 'Education', url: 'blog/study-techniques.html', keywords: 'study techniques spaced repetition pomodoro flashcards' },
  { title: 'Time Management for First-Year College Students', category: 'Education', url: 'blog/time-management-college.html', keywords: 'time management college students schedule productivity' },
  { title: 'How to Build a Resume as a College Student', category: 'Career', url: 'blog/build-resume-college.html', keywords: 'resume cv college student internship job career' },
  { title: 'Best Skills to Learn During College', category: 'Career', url: 'blog/skills-to-learn-college.html', keywords: 'skills college digital coding communication career' },
  { title: 'How Students Can Build a Freelancing Career', category: 'Career', url: 'blog/freelancing-for-students.html', keywords: 'freelancing career students upwork fiverr gig remote' },
  { title: 'What Is Artificial Intelligence? A Beginner\'s Guide', category: 'Technology', url: 'blog/what-is-artificial-intelligence.html', keywords: 'AI artificial intelligence machine learning basics guide' },
  { title: 'How Generative AI Is Changing Education', category: 'Technology', url: 'blog/generative-ai-education.html', keywords: 'generative AI education chatgpt learning tools' },
  { title: 'What Is Cloud Computing? Simple Explanation', category: 'Technology', url: 'blog/what-is-cloud-computing.html', keywords: 'cloud computing AWS Google Azure infrastructure SaaS' },
  { title: 'What Is Blockchain Technology?', category: 'Technology', url: 'blog/what-is-blockchain.html', keywords: 'blockchain distributed ledger cryptocurrency bitcoin decentralized' },
  { title: 'How Students Can Use AI for Productivity', category: 'AI', url: 'blog/ai-for-student-productivity.html', keywords: 'AI productivity students tools automation study help' },
  { title: 'AI Tools Every College Student Should Know', category: 'AI', url: 'blog/ai-tools-for-students.html', keywords: 'AI tools students chatgpt notion grammarly dall-e' },
  { title: 'How to Write Better Prompts for AI', category: 'AI', url: 'blog/ai-prompt-writing.html', keywords: 'prompts AI chatgpt prompt engineering tips techniques' },
  { title: 'Personal Finance Basics for College Students', category: 'Finance', url: 'blog/personal-finance-students.html', keywords: 'finance budget savings investment college students money' },
  { title: 'What Is UPI and How Does It Work?', category: 'Finance', url: 'blog/what-is-upi.html', keywords: 'UPI unified payment interface NPCI digital payment India' },
  { title: 'Savings vs Investment: Understanding the Difference', category: 'Finance', url: 'blog/savings-vs-investment.html', keywords: 'savings investment difference mutual funds fd returns' },
  { title: 'Best Historical Places to Visit in Bihar', category: 'Travel', url: 'blog/historical-places-bihar.html', keywords: 'Bihar travel historical places Nalanda Bodh Gaya Vaishali Rajgir' },
  { title: 'Famous Historical Places in Delhi', category: 'Travel', url: 'blog/historical-places-delhi.html', keywords: 'Delhi historical places Red Fort Qutub Minar Humayun tomb' },
  { title: 'Interesting Facts About India', category: 'India', url: 'blog/interesting-facts-india.html', keywords: 'India facts culture diversity languages history amazing' },
  { title: 'Indian States and Their Geographical Features', category: 'India', url: 'blog/indian-states-geography.html', keywords: 'India states geography features terrain capitals culture' },
  { title: '50 Important General Knowledge Facts About India', category: 'General Knowledge', url: 'blog/general-knowledge-india.html', keywords: 'general knowledge GK India facts quiz questions' },
];

/* ── DOM Ready ── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initSearch();
  initFAQ();
  initBackToTop();
  initReadingProgress();
  initNewsletter();
  initLazyImages();
  highlightActiveNav();
});

/* ── Navigation ── */
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
    }
  });
}

/* ── Search ── */
function initSearch() {
  const searchBtns = document.querySelectorAll('.search-btn');
  const overlay    = document.getElementById('search-overlay');
  const closeBtn   = document.getElementById('search-close');
  const input      = document.getElementById('search-input');
  const results    = document.getElementById('search-results');
  if (!overlay) return;

  searchBtns.forEach(btn => btn.addEventListener('click', openSearch));
  closeBtn && closeBtn.addEventListener('click', closeSearch);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeSearch(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSearch(); });

  input && input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    renderResults(q, results);
  });

  function openSearch() {
    overlay.classList.add('open');
    setTimeout(() => input && input.focus(), 80);
  }
  function closeSearch() {
    overlay.classList.remove('open');
  }
}

function renderResults(q, container) {
  if (!container) return;
  if (!q) { container.innerHTML = ''; return; }
  const matches = ARTICLES.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.category.toLowerCase().includes(q) ||
    a.keywords.toLowerCase().includes(q)
  ).slice(0, 8);

  if (!matches.length) {
    container.innerHTML = '<p style="color:#9CA3AF;font-size:.9rem;padding:8px 0">No results found. Try different keywords.</p>';
    return;
  }
  container.innerHTML = matches.map(a => `
    <a href="${a.url}" class="search-result-item">
      <div>
        <div class="result-cat">${a.category}</div>
        <div class="result-title">${a.title}</div>
      </div>
    </a>`).join('');
}

/* ── FAQ Accordion ── */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ── Back to Top ── */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Reading Progress ── */
function initReadingProgress() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const scrolled = doc.scrollTop;
    const total    = doc.scrollHeight - doc.clientHeight;
    bar.style.width = (scrolled / total * 100) + '%';
  }, { passive: true });
}

/* ── Newsletter ── */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input && input.value) {
      showToast('✓ Thank you for subscribing!');
      input.value = '';
    }
  });
}

/* ── Lazy Images ── */
function initLazyImages() {
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const img = e.target;
          if (img.dataset.src) { img.src = img.dataset.src; delete img.dataset.src; }
          obs.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    document.querySelectorAll('img[data-src]').forEach(img => obs.observe(img));
  } else {
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
    });
  }
}

/* ── Active Nav Highlight ── */
function highlightActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.primary-nav a, .mobile-nav a').forEach(a => {
    if (a.getAttribute('href') && path.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });
}

/* ── Toast ── */
function showToast(msg) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

/* ── Category Filter (Homepage) ── */
function filterCategory(cat) {
  document.querySelectorAll('.cat-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.cat === cat || (cat === 'all' && c.dataset.cat === 'all'));
  });
  const cards = document.querySelectorAll('.article-card[data-cat]');
  cards.forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.style.display = show ? '' : 'none';
  });
}
window.filterCategory = filterCategory;

/* ── Share Article ── */
function shareArticle() {
  if (navigator.share) {
    navigator.share({ title: document.title, url: location.href });
  } else {
    navigator.clipboard.writeText(location.href);
    showToast('🔗 Link copied to clipboard!');
  }
}
window.shareArticle = shareArticle;
