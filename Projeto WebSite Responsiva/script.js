const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('Clicar', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})