const USE_UGLY_THEME = false;

let count = 0;

const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const themeStylesheet = document.getElementById('theme-stylesheet');

themeStylesheet.setAttribute('href', USE_UGLY_THEME ? 'ugly.css' : 'modern.css');

function render() {
  countEl.textContent = count;
}

incrementBtn.addEventListener('click', () => {
  count++;
  render();
});

decrementBtn.addEventListener('click', () => {
  count--;
  render();
});
