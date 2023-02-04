let menuOpen = document.querySelector('.menu-toggle');
let menWrapper = document.querySelector('.menu-wrapper');


menuOpen.addEventListener('click', function(){
    menuOpen.classList.toggle('bx-x');
    menuwrapper.classList.toggle('active')
})