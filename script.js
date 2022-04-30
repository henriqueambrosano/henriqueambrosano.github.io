$(document).ready(() => {
  $(window).scroll(() => {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(() => {
    $('html').animate({ scrollTop: 0 });
  });

  //   toggle menu/navbar Script
  $('.menu-btn').click(() => {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // typing animation script using typed.js
  const typed = new Typed('.typing', {
    strings: [
      'Front-end Developer',
      'Back-end Developer',
      'Freelancer',
      'Programer',
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  const typed2 = new Typed('.typing-2', {
    strings: [
      'Front-end Developer',
      'Back-end Developer',
      'Freelancer',
      'Programer',
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $('.owl-carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    stagePadding: 50,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
