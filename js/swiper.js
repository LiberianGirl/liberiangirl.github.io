const slider = document.querySelector('.swiper');
const screenWidth = document.documentElement.clientWidth;


console.log(screenWidth)
let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
          }
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 768 ) {
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
//if ((window.innerWidth || screenWidth) <= 767 && slider.dataset.mobile == 'false') {

//if ((window.innerWidth || screenWidth) > 767 ) {