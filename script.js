const media = [...document.querySelectorAll('audio,video')];
media.forEach(player => player.addEventListener('play', () => media.forEach(other => { if (other !== player) other.pause(); })));
media.forEach(player => {
  player.addEventListener('loadedmetadata', () => { if (Number.isFinite(player.duration)) player.closest('.card').querySelector('.duration').textContent = player.duration.toFixed(1) + ' s'; });
  player.addEventListener('error', () => { player.closest('.card').querySelector('.duration').textContent = 'Media unavailable'; });
});
const cards = [...document.querySelectorAll('.card')];
const sections = [...document.querySelectorAll('.task-section')];
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.task-nav a')];
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) links.forEach(link => { const active = link.hash === '#' + entry.target.id; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); }); }, { rootMargin: '-12% 0px -65% 0px' });
  sections.forEach(section => observer.observe(section));
}
