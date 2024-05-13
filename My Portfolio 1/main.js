/*============================= Toggle navbar =================================*/ 
document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    });

    /*============================= Scroll sections active link =================================*/ 
    let navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', function() {
        let fromTop = window.scrollY;

        navLinks.forEach(function(link) {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop + 150 &&
                section.offsetTop + section.offsetHeight > fromTop + 150
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    /*============================= Sticky navbar =================================*/ 
    let header = document.getElementById('header');

    if (header) {
        window.addEventListener('scroll', function() {
            header.classList.toggle('sticky', window.scrollY > 100);
        });
    }

    /*============================= Remove toggle icon and navbar when click navbar link (scroll) =================================*/ 
    let navLinksArray = Array.from(navLinks);

    navLinksArray.forEach(function(link) {
        link.addEventListener('click', function() {
            menuIcon.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        });
    });
});

/*=====================Scroll reveal ======================*/ 
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
 });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*============== typed js=================*/ 
const typed= new Typed('.multiple-text', {
    strings: ['Web Developer', 'Web Designer', 'Ethical Hacker'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});