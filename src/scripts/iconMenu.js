const iconMenu = document.querySelector('.icon-menu');
const burgerMenuContainer = document.querySelector('.header_menu-container')

let menuVisible = false;

iconMenu.addEventListener('click', function () {
    if (menuVisible) {
        burgerMenuContainer.style.display = 'none';
        iconMenu.classList.remove('_active');
        menuVisible = false;
    } else {
        burgerMenuContainer.style.display = 'block';
        iconMenu.classList.add('_active');
        menuVisible = true;
    }
});

document.addEventListener('click', function (event) {
    if (burgerMenuContainer && (event.target !== iconMenu && !iconMenu.contains(event.target)
        && event.target !== burgerMenuContainer && !burgerMenuContainer.contains(event.target))) {
        burgerMenuContainer.style.display = 'none';
        iconMenu.classList.remove('_active');
        menuVisible = false;
    }
});