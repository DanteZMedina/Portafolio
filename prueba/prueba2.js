// ===============================
// THEME TOGGLE (LIGHT / DARK)
// ===============================
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.className = savedTheme;
  toggleButton.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

toggleButton.addEventListener('click', () => {
  const isDark = body.classList.contains('dark');
  body.classList.toggle('dark', !isDark);
  body.classList.toggle('light', isDark);

  const newTheme = isDark ? 'light' : 'dark';
  toggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', newTheme);
});

// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// ===============================
// MENU MOBILE
// ===============================
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ===============================
// NAVBAR ACTIVE LINK
// ===============================
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
});

// ===============================
// INTERSECTION OBSERVER (ANIMACIONES)
// ===============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(
  '.card, .cert-card, .tech-grid div'
).forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
