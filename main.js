const dragBar = document.querySelector('.drag-bar');
const dragBarLight = document.querySelector('.drag-bar-light');
const toggleHighlightBtn = document.querySelector('.toggle-highlight-btn');
const colorLeft = document.querySelectorAll('.color-left');

let isDragging = false;

dragBar.addEventListener('mousedown', () => {
  isDragging = true;
  document.body.style.cursor = 'e-resize';
});

document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  let newLeftPercent = ((e.clientX + 8) / window.innerWidth) * 100;
  newLeftPercent = Math.max(5, newLeftPercent);
  newLeftPercent = Math.min(newLeftPercent, 95);

  dragBar.style.left = `${newLeftPercent}%`;
  colorLeft.forEach(el => {
    el.style.width = `${newLeftPercent}%`;
  });
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.cursor = '';
});

toggleHighlightBtn.addEventListener('click', () => {
  dragBarLight.style.backgroundColor = dragBarLight.style.backgroundColor ? '' : 'red';
});
