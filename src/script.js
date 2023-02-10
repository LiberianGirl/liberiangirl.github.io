/*const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');

const btnOpenMenu = document.querySelector('.button-menu--open-burger'); 
const btnCloseMenu = sideMenu.querySelector('.button-menu--close-burger'); 

btnOpenMenu.addEventListener('click', function () { 

    sideMenu.classList.add('side-menu--open');

});

btnCloseMenu.addEventListener('click', function () { 

    sideMenu.classList.remove('side-menu--open');

});


document.addEventListener('keydown', function (evt) {
    if (evt.code === "Escapes") {
    sideMenu.classList.remove('side-menu--open');
    }
  });
*/


/* Кнопка Читать далее*/
/*
const buttonContent = document.querySelector('.content__button'); 

 const buttonDown = function () {

  let buttonContentText = document.querySelector('.content__text'); 

  buttonContent.addEventListener('click', function() {

    buttonContentText.classList.remove('content__text--hidden');
    buttonContent.classList.add('content__button--hidden')

  });
}

buttonDown(buttonContent)*/



/* Кнопка Показать/Скрыть */

/* находим раздел где находить кнопка */
const contentWrapper = document.querySelector('.content__wrapper'); 
/* нашли кнопку Показать/Скрыть */
const swiperButton = contentWrapper.querySelector('.swiper__button'); 
/* нашла блок свайпера */ 
const contentBrands = document.querySelector('.swiper');
/* нашли список слайдов в свайпере */
const swiperWrapper = contentBrands.querySelector('.swiper-wrapper')
/* класс hidden для списка свайпера*/
const swiperWrapperHidden = 'swiper-wrapper--hidden';


/* Функция Показать/Скрыть */

 const buttonShow = function (btn, content, list) {
 
  btn.addEventListener('click', function() {

    if (content.classList.contains(list)) { //условие для смены текста
      btn.children[0].textContent = "Скрыть"; //меняем текст в спане
    } else {
      btn.children[0].textContent = "Показать все"; //меняем текст в спане
    }
    content.classList.toggle(list); //переключатель

  });
}
/* переменная вызова функции Показать/Скрыть */
const contentButtonShow = buttonShow(swiperButton, swiperWrapper, 
  swiperWrapperHidden);















