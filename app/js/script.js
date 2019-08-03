window.onscroll = function() {
    console.log(window.pageYOffset);
    const imgNavbar = document.getElementById('js-navbar-logo');
    if ( window.pageYOffset > 100 ) {
        imgNavbar.src = "./assets/img/logo-onscroll.png";
        imgNavbar.classList.add('scroll');
    } else {
        imgNavbar.src = "./assets/img/logo-full.png";
        imgNavbar.classList.remove('scroll');
    }
}