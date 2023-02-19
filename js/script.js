const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');

const btnOpenMenu = document.querySelector('.button-menu--open-burger'); 
const btnCloseMenu = sideMenu.querySelector('.button-menu--close-burger'); 

btnOpenMenu.addEventListener('click', function () { 

    sideMenu.classList.add('side-menu--open');
    overlay.classList.add('overlay--active');

});

btnCloseMenu.addEventListener('click', function () { 

    sideMenu.classList.remove('side-menu--open');
    overlay.classList.remove('overlay--active');

});


overlay.addEventListener('click', function () { 

  sideMenu.classList.remove('side-menu--open');
  overlay.classList.remove('overlay--active');

});


document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
    sideMenu.classList.remove('side-menu--open');
    overlay.classList.remove('overlay--active');
    
    }
  });



/* Кнопка Читать далее*/

const buttonContent = document.querySelector('.content__button'); 

 const buttonDown = function () {

  let buttonContentText = document.querySelector('.content__text'); 

  buttonContent.addEventListener('click', function() {

    buttonContentText.classList.remove('content__text--hidden');
    buttonContent.classList.add('content__button--hidden')

  });
}

buttonDown(buttonContent)




  

/* Кнопка Показать/Скрыть */

/* находим раздел где находить кнопка */
const contentWrapper = document.querySelector('.content__wrapper'); 
/* нашли кнопку Показать/Скрыть */
const contentButton = contentWrapper.querySelector('.content__button');
/* класс hidden для кнопки*/ 
const contentButtonUp = 'content__button--up'; 
/* нашли список слайдов в свайпере */
const contentSwiperWrapper = document.querySelector('.content-swiper__wrapper')
/* класс hidden для списка свайпера*/
const contentSswiperWrapperHidden = 'content-swiper__wrapper--hidden';


/* Функция Показать/Скрыть */

 const buttonShow = function (btn, hidden, content, list) {
 
  btn.addEventListener('click', function() {

    if (content.classList.contains(list)) { //условие для смены текста
      btn.children[0].textContent = "Скрыть"; //меняем текст в спане
      btn.classList.add(hidden); //меняем класс кнопки
    } else {
      btn.children[0].textContent = "Показать все"; //меняем текст в спане
      btn.classList.remove(hidden); //меняем класс кнопки
    }
    content.classList.toggle(list); //переключатель
  });
}

buttonShow(contentButton, contentButtonUp, contentSwiperWrapper, 
  contentSswiperWrapperHidden);










