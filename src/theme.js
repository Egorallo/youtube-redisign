const HTML = document.querySelector('html');
const SWITCH = document.querySelector('#switch');

SWITCH.addEventListener('click', () => {
  HTML.classList.toggle('dark');
});
