const btn = document.getElementById('btn');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefalt();
const nav = document.getElementById('nav');  
nav.classList.toggle('active');
const active = nav.classList.contains('active');
event.currentTarget.setAttribute('aria-expanded', active);
}

btn.addEventListener("click", toggleMenu);
btn.addEventListener("touchstart", toggleMenu);
