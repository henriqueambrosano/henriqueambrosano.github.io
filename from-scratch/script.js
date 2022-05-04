$(document).ready(() => {
  $(window).scroll(() => {
    if (this.scrollY > 50) {
      $('.navbar').addClass('active');
    } else {
      $('.navbar').removeClass('active');
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  $('.scroll-up-btn').click(() => {
    $('html').animate({ scrollTop: 0 });
  });

  const typed = new Typed('.typed', {
    strings: [
      'Back-end Developer',
      'Front-end Developer',
      'Freelancer',
      'Programmer',
    ],
    typeSpeed: 60,
    backSpeed: 100,
    loop: true,
  });

  const typed2 = new Typed('.typed2', {
    strings: [
      'Back-end Developer',
      'Front-end Developer',
      'Freelancer',
      'Programer',
    ],
    typeSpeed: 60,
    backSpeed: 100,
    loop: true,
  });

  // owl-carousel script

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
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
