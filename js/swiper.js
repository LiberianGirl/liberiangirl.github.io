const slider = document.querySelector('.content-swiper');

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {

      slideClass: 'content-slide',
      spaceBetween: 16,
      slidesPerView: 'auto',
      breakpoints: {
        768: {
          spaceBetween: 0,
        }
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
          }
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767 ) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }  
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});

