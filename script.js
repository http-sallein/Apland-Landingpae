window.addEventListener('scroll', () => {

    let header = document.querySelector('header');

    if(window.scrollY >= 100) header.classList.add('header-active'); 
    else header.classList.remove('header-active');
});

window.addEventListener('load', () => {
    
    let toggleButton = document.querySelector('#toggleButton');

    let menuMobile = document.querySelector('.menu-mobile');
    let hamburger = document.querySelector('.input-menu');
    
    toggleButton.addEventListener('click', () => {

        toggleButton.children.item(0).classList.toggle('toggleModeSun');
        document.body.classList.toggle('dark-mode');
    });

    hamburger.addEventListener('click', () => {

        menuMobile.classList.toggle('menu-mobile-active');
        document.body.classList.toggle('menuActive');
    })
});