// ── Navigasi antar halaman ──
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-trigger animasi fade-in
  document.querySelectorAll('#' + id + ' .fade-in').forEach(el => {
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = '';
  });
}

// ── Filter proyek ──
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.project-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.removeAttribute('data-hidden');
    } else {
      card.dataset.hidden = 'true';
    }
  });
}

// ── Pasang semua event listener setelah DOM siap ──
document.addEventListener('DOMContentLoaded', function () {

  // Nav links
  document.getElementById('nav-home').addEventListener('click', function () { showPage('home'); });
  document.getElementById('nav-about').addEventListener('click', function () { showPage('about'); });
  document.getElementById('nav-portfolio').addEventListener('click', function () { showPage('portfolio'); });

  // Tombol CTA di Home hero
  var btnPortfolio = document.getElementById('btn-go-portfolio');
  var btnAbout     = document.getElementById('btn-go-about');
  if (btnPortfolio) btnPortfolio.addEventListener('click', function () { showPage('portfolio'); });
  if (btnAbout)     btnAbout.addEventListener('click',     function () { showPage('about'); });

  // Featured cards di Home
  document.querySelectorAll('.featured-card').forEach(function (card) {
    card.addEventListener('click', function () { showPage('portfolio'); });
  });

  // Filter buttons di Portfolio
  document.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterProjects(btn.dataset.filter, btn);
    });
  });

});
