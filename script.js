const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const menu = document.getElementById('nav');

openMenu.addEventListener('click', function() {
    menu.classList.toggle('open');
});

closeMenu.addEventListener('click', function() {
    menu.classList.toggle('open');
});