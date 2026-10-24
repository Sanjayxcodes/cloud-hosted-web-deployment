// Lightweight interactions for this static, S3-ready portfolio.
const header = document.querySelector('.site-header');
const progress = document.querySelector('.scroll-progress span');
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = [...document.querySelectorAll('.nav-links a')];
const sections = [...document.querySelectorAll('main section[id]')];

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation menu');
  navLinks.classList.remove('open');
}

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Open navigation menu' : 'Close navigation menu');
  navLinks.classList.toggle('open', !expanded);
});

navItems.forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

function updateScrollUI() {
  header.classList.toggle('scrolled', window.scrollY > 8);
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${maxScroll ? (window.scrollY / maxScroll) * 100 : 0}%`;
}
window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navItems.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-28% 0px -62% 0px', threshold: 0 });
sections.forEach((section) => sectionObserver.observe(section));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  if (!name || !email || !message || !form.elements.email.validity.valid) {
    feedback.textContent = 'Please enter your name, a valid email address, and a message.';
    feedback.classList.add('error');
    return;
  }
  feedback.classList.remove('error');
  feedback.textContent = 'Opening your email app with your message addressed to Sanjay.';
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:sanjaybanait.2027@gmail.com?subject=${subject}&body=${body}`;
});
