/* ==========================================
   SURLAB STUDIO — Landing page
   surlab-studio/assets/js/script.js
   ========================================== */

const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuBtn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.textContent = '☰';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouseX = -1000;
let mouseY = -1000;

function resizeCanvas() {
  const hero = document.getElementById('hero');
  canvas.width = hero.offsetWidth;
  canvas.height = hero.offsetHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.radius = Math.random() * 2 + 0.5;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 200) {
      const force = (200 - dist) / 200 * 0.25;
      this.vx -= (dx / dist) * force;
      this.vy -= (dy / dist) * force;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(232, 89, 12, 0.4)';
    ctx.fill();
  }
}

for (let i = 0; i < 60; i++) {
  particles.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(232, 89, 12, ${0.08 * (1 - dist / 150)})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

document.getElementById('hero').addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

document.getElementById('hero').addEventListener('mouseleave', () => {
  mouseX = -1000;
  mouseY = -1000;
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.btn-submit');
  const originalText = btn.textContent;
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  fetch(this.action, { method: 'POST', body: new FormData(this), headers: { 'Accept': 'application/json' } })
    .then(r => {
      if (r.ok) {
        btn.textContent = '¡Enviado! ✅';
        this.reset();
        setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
      } else {
        throw new Error('Network response was not ok.');
      }
    }).catch(() => {
      btn.textContent = 'Error ❌';
      setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
    });
});
