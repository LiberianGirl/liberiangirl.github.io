const slider = document.querySelector('.content-swiper');

let mySwiper;

function mobileSlider() {
  if (/*window.innerWidth*/document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {

      slideClass: 'content-slide',
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
          }
    });

    slider.dataset.mobile = 'true';
  }

  if (/*window.innerWidth*/document.documentElement.clientWidth > 767 ) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }  
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});

