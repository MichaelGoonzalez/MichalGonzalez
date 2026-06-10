/* ==========================================
   PORTFOLIO — Hero / About Section
   portfolio/assets/js/about.js
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const nameEl = document.getElementById('heroName');
  if (nameEl) {
    nameEl.classList.add('glitch');
    setTimeout(() => nameEl.classList.remove('glitch'), 300);
  }

  const musicFill = document.getElementById('musicFill');
  const musicTime = document.getElementById('musicTime');
  let progress = 52;
  const totalDuration = 195;
  let currentTime = 102;

  if (musicFill && musicTime) {
    setInterval(() => {
      progress += 0.08;
      currentTime += 0.048;
      if (progress > 100) { progress = 0; }
      if (currentTime > totalDuration) { currentTime = 0; }
      musicFill.style.width = Math.min(progress, 100) + '%';
      const mins = Math.floor(currentTime / 60);
      const secs = Math.floor(currentTime % 60);
      const totalMins = Math.floor(totalDuration / 60);
      const totalSecs = Math.floor(totalDuration % 60);
      musicTime.textContent = mins + ':' + secs.toString().padStart(2, '0') + ' / ' + totalMins + ':' + totalSecs.toString().padStart(2, '0');
    }, 1000);
  }

  const hero = document.getElementById('hero');
  if (hero) {
    const heroObserver = new IntersectionObserver(
      function (entries) {
        var entry = entries[0];
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          hero.classList.add('fade-out');
        } else {
          hero.classList.remove('fade-out');
        }
      },
      { threshold: 0, rootMargin: '-120px 0px 0px 0px' }
    );
    heroObserver.observe(hero);
  }
});
