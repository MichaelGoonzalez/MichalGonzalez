/* ==========================================
   HUB — Main Hub Portal (Maicol · SurLab)
   assets/js/main.js
   ========================================== */

const splitLeft = document.getElementById('splitLeft');
const splitRight = document.getElementById('splitRight');
const dividerGlow = document.getElementById('dividerGlow');

function updateSplit(leftWidth) {
  const rightWidth = 100 - leftWidth;
  document.documentElement.style.setProperty('--split-left', leftWidth + '%');
  document.documentElement.style.setProperty('--split-right', rightWidth + '%');
  splitLeft.classList.toggle('hover', leftWidth > 52);
  splitRight.classList.toggle('hover', rightWidth > 52);
  dividerGlow.classList.toggle('active', leftWidth > 52 || rightWidth > 52);
}

function resetSplit() {
  splitLeft.classList.remove('hover');
  splitRight.classList.remove('hover');
  dividerGlow.classList.remove('active');
  document.documentElement.style.setProperty('--split-left', '50%');
  document.documentElement.style.setProperty('--split-right', '50%');
}

splitLeft.addEventListener('mouseenter', () => updateSplit(65));
splitRight.addEventListener('mouseenter', () => updateSplit(35));
document.querySelector('.split-container')?.addEventListener('mouseleave', resetSplit);

document.addEventListener('mousemove', (e) => {
  const ratio = e.clientX / window.innerWidth;
  if (window.innerWidth > 768) {
    const threshold = 0.35;
    if (ratio < threshold) {
      updateSplit(65);
    } else if (ratio > (1 - threshold)) {
      updateSplit(35);
    } else {
      resetSplit();
    }
  }
});

let leftToggled = false;
let rightToggled = false;

splitLeft.addEventListener('click', () => {
  if (window.innerWidth > 768) return;
  if (rightToggled) { rightToggled = false; updateMobile(50, 50); }
  leftToggled = !leftToggled;
  updateMobile(leftToggled ? 70 : 50, leftToggled ? 30 : 50);
});

splitRight.addEventListener('click', () => {
  if (window.innerWidth > 768) return;
  if (leftToggled) { leftToggled = false; updateMobile(50, 50); }
  rightToggled = !rightToggled;
  updateMobile(rightToggled ? 30 : 50, rightToggled ? 70 : 50);
});

function updateMobile(topHeight, bottomHeight) {
  splitLeft.style.height = topHeight + '%';
  splitRight.style.height = bottomHeight + '%';
}

const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.25;
    this.vy = (Math.random() - 0.5) * 0.25;
    this.radius = Math.random() * 1.6 + 0.3;
    this.opacity = Math.random() * 0.3 + 0.1;
    this.hue = Math.random() > 0.5 ? 190 : 20;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    const alpha = this.opacity * (0.6 + 0.4 * Math.sin(Date.now() * 0.001 + this.x * 0.01));
    ctx.fillStyle = this.hue === 190 ? `rgba(0,212,255,${alpha})` : `rgba(232,89,12,${alpha})`;
    ctx.fill();
  }
}

const particleCount = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 18000));
for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const alpha = 0.04 * (1 - dist / 120);
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}
animate();
