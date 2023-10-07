// Animation on Scroll PLug-in Initiation
AOS.init();

// Loader
// const loaderWrapper = document.querySelector('.loader-wrapper');

// window.addEventListener('load', function() {
//   loaderWrapper.classList.add('fade-out');
// });

// Navbar Fade on Scroll
var lastScrollTop = 0;
    navbar = document.getElementById('navbar');
window.addEventListener('scroll', function(){
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-50px';
    navbar.style.transition = 'all .3s ease';
  } else {
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop;
});

// Typing Animation
    let typed = new Typed('.animate', {
      strings: [
        'Web Developer',
        'UI/UX Designer',
        'Software Developer',
        'Gamer'
      ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });