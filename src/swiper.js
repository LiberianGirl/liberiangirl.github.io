// Init Swiper
var swiper = new Swiper('.swiper', {
    // Install Plugin To Swiper
    spaceBetween: 16,
    slidesPerView: 'auto',
    breakpoints: {
      768: {
        spaceBetween: 24,
        allowTouchMove: false,
      },
      1120: {
        spaceBetween: 32,
        allowTouchMove: false,
      }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        }
      });

