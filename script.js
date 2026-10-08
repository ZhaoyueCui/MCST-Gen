const media = [...document.querySelectorAll('audio,video')];
media.forEach(player => player.addEventListener('play', () => media.forEach(other => { if (other !== player) other.pause(); })));
media.forEach(player => {
  player.addEventListener('loadedmetadata', () => { if (Number.isFinite(player.duration)) player.closest('.card').querySelector('.duration').textContent = player.duration.toFixed(1) + ' s'; });
  player.addEventListener('error', () => { player.closest('.card').querySelector('.duration').textContent = 'Media unavailable'; });
});
const cards = [...document.querySelectorAll('.card')];
const sections = [...document.querySelectorAll('.task-section')];
document.querySelector('#search').addEventListener('input', event => {
  const query = event.target.value.trim().toLowerCase();
  let count = 0;
  cards.forEach(card => { card.hidden = !card.dataset.search.includes(query); if (!card.hidden) count++; else card.querySelector('audio,video').pause(); });
  sections.forEach(section => { section.hidden = ![...section.querySelectorAll('.card')].some(card => !card.hidden); });
  document.querySelector('#search-status').textContent = query ? `${count} of ${cards.length} examples match` : '';
  document.querySelector('#empty-results').hidden = count > 0;
});
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.task-nav a')];
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) links.forEach(link => { const active = link.hash === '#' + entry.target.id; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); }); }, { rootMargin: '-12% 0px -65% 0px' });
  sections.forEach(section => observer.observe(section));
}
