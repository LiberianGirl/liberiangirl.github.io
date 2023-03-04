/* Контейнеры */

const sideMenuWrapper = document.querySelector('.side-menu__wrapper'); // Wrapper бокового меню
const sideMenuOverlay = document.querySelector('.side-menu__overlay'); // Overlay бокового меню

const pageHeader = document.querySelector('.page__header'); // контейнер Header страницы (верхнее меню)
const modalCall = document.querySelector('.modal-call'); // контейнер Modal Call
const modalFeedback =  document.querySelector('.modal-feedback'); // контейнер Modal Feedback

const callOverlay = modalCall.querySelector('.modal__overlay'); // Overlay Moadal Call 
const callWrapper = modalCall.querySelector('.modal__wrapper'); // Wrapper Moadal Call 
const feedbackOverlay = modalFeedback.querySelector('.modal__overlay'); // Overlay Moadal Feedback
const feedbackWrapper = modalFeedback.querySelector('.modal__wrapper'); // Wrapper Moadal Feedback

const btnLeftCall = modalCall.querySelector('.modal__button-left'); // кнопка закрытия в Modal Call
const btnLeftFeedback = modalFeedback.querySelector('.modal__button-left'); // кнопка закрытия в Modal Feedback


/* Кнопки */

const btnOpenMenu = pageHeader.querySelector('.button-menu--open-burger'); // Кнопка открытия бокового меню в Header
const btnCloseMenu = sideMenuWrapper.querySelector('.button-menu--close'); // Кнопка закрытия бокового меню в SideMenu
 
const btnOpenCall = pageHeader.querySelector('.button-menu--call'); // Кнопка открытия Moadal Call меню в Header
const btnOpenFeedback = pageHeader.querySelector('.button-menu--message'); // Кнопка открытия Moadal Call меню в Header

const btnCloseCall = modalCall.querySelector('.button-menu--close'); // Кнопка закрытия Moadal Call 
const btnCloseFeedback = modalFeedback.querySelector('.button-menu--close'); // Кнопка закрытия Modal Feedback

const btnMenuCall = sideMenuWrapper.querySelector('.button-menu--call'); // Кнопка открытия Moadal Call меню в SideMenu
const btnMenuFeedback = sideMenuWrapper.querySelector('.button-menu--message'); // Кнопка открытия Moadal Call меню в SideMenu

/* Классы */

const sideMenuActive = 'side-menu__overlay--active';
const sideMenuOpen = 'side-menu__wrapper--open';
const modalActive = 'modal__overlay--active';
const modalOpen = 'modal__wrapper--open';
const btnLeftOpen = 'modal__button-left--open';

/* Функции */

const openingAction = function(element, wrapper, overlay, opening, active) {

  element.addEventListener('click', function () { 

    wrapper.classList.add(opening); 
    overlay.classList.add(active);
  });

}

const closingAction = function(element, wrapper, overlay, opening, active) {

  element.addEventListener('click', function () {  

    wrapper.classList.remove(opening);
    overlay.classList.remove(active);
  });

  wrapper.addEventListener('click', function () { // запрет на всплытие (чтобы при клике на Wrapper меню Modal не закрывались)
    event.stopPropagation()
  });
}

const btnOpen = function(element, btn, btnOpen) {

  element.addEventListener('click', function () { 
    btn.classList.add(btnOpen);
  });
}

const btnClose = function(element, btn, btnOpen) {

  element.addEventListener('click', function () { 
    btn.classList.remove(btnOpen);
  });

  btn.addEventListener('click', function () { 
    event.stopPropagation()
  });

}


// Open and Close SideMenu 
openingAction(btnOpenMenu, sideMenuWrapper, sideMenuOverlay, sideMenuOpen, sideMenuActive) // клик по кнопке в Header (открытие бокового)
closingAction(btnCloseMenu, sideMenuWrapper, sideMenuOverlay, sideMenuOpen, sideMenuActive) // клик по кнопке в SideMenu (закрытие бокового меню)
closingAction(sideMenuOverlay, sideMenuWrapper, sideMenuOverlay, sideMenuOpen, sideMenuActive) // клик по Overlay в SideMenu (закрытие бокового меню)

// Open and Close Modal 
openingAction(btnOpenCall, callWrapper, callOverlay, modalOpen, modalActive) // клик по кнопке в Header (открытие Modal Call)
openingAction(btnOpenFeedback, feedbackWrapper, feedbackOverlay, modalOpen, modalActive) // клик по кнопке в Header (открытие ModalFeedback)

openingAction(btnMenuCall, callWrapper, callOverlay, modalOpen, modalActive) // клик по кнопке в SideMenu (открытие ModalC all)
openingAction(btnMenuFeedback, feedbackWrapper, feedbackOverlay, modalOpen, modalActive) // клик по кнопке в SideMenu (открытие Modal Feedback)

closingAction(btnCloseCall, callWrapper, callOverlay, modalOpen, modalActive) // клик по кнопке в Modal Call (закрытие Modal Call)
closingAction(callOverlay, callWrapper, callOverlay, modalOpen, modalActive) // клик по Overlay в Modal Call (закрытие Modal Call)

closingAction(btnCloseFeedback, feedbackWrapper, feedbackOverlay, modalOpen, modalActive)  // клик по кнопке в Modal Feedback (закрытие Modal Feedback)
closingAction(feedbackOverlay, feedbackWrapper, feedbackOverlay, modalOpen, modalActive) // клик в Overlay в Modal Feedback (закрытие Modal Feedback)

btnOpen(btnOpenFeedback, btnLeftFeedback, btnLeftOpen);
btnOpen(btnMenuFeedback, btnLeftFeedback, btnLeftOpen);
btnOpen(btnOpenCall, btnLeftCall, btnLeftOpen);
btnOpen(btnMenuCall, btnLeftCall, btnLeftOpen);

btnClose(btnCloseFeedback, btnLeftFeedback, btnLeftOpen);
btnClose(feedbackOverlay, btnLeftFeedback, btnLeftOpen);
btnClose(btnCloseCall, btnLeftCall, btnLeftOpen);
btnClose(callOverlay, btnLeftCall, btnLeftOpen);





/* Обработчик на Escape */

document.addEventListener('keydown', function (evt) {
  if (!callWrapper.classList.contains(modalOpen) && !feedbackWrapper.classList.contains(modalOpen)) {
    if (sideMenuWrapper.classList.contains(sideMenuOpen)) {
      if (evt.keyCode === 27 ) {
        sideMenuOverlay.classList.remove(sideMenuActive);
        sideMenuWrapper.classList.remove(sideMenuOpen);
      }
    }
  } else if (callWrapper.classList.contains(modalOpen)) {
    if (evt.keyCode === 27 ) {
      callOverlay.classList.remove(modalActive);
      callWrapper.classList.remove(modalOpen);
      btnLeftCall.classList.remove(btnLeftOpen);
    }
  } else if (feedbackWrapper.classList.contains(modalOpen)) {
    if (evt.keyCode === 27 ) {
      feedbackOverlay.classList.remove(modalActive);
      feedbackWrapper.classList.remove(modalOpen);
      btnLeftFeedback.classList.remove(btnLeftOpen);
    }
  }
});


/* --- Обработчики для кнопок Читатать далее, Показать/Скрыть --- */

/* Массив с разделом Content */
const sectionContent = document.querySelectorAll('.content'); 

/* кнопки Читатать далее, Показать/Скрыть */
const buttonContent = sectionContent[0].querySelector('.content__button'); // "Читать далее"
const buttonBrands = sectionContent[1].querySelector('.content__button'); // в Брендах
const buttonDevices = sectionContent[2].querySelector('.content__button');  // в Устройствах

/* Текст в разделе "О компании" */
const contentText = sectionContent[0].querySelector('.content__text'); 

/* список слайдов в свайпере */
const wrapperBrands = sectionContent[1].querySelector('.content-swiper__wrapper'); // в Брендах
const wrapperDevices = sectionContent[2].querySelector('.content-swiper__wrapper');  // в Устройствах

/* класс для поворота стрелок*/ 
const contentButtonUp = 'content__button--up'; 

/* класс hidden */

const contentHidden = 'content__text--hidden'; // для раздела "О компании"
const wrapperHidden = 'content-swiper__wrapper--hidden'; // для списка свайперов


buttonContent.addEventListener('click', function() {

  if (contentText.classList.contains(contentHidden)) { //условие для смены текста
    buttonContent.children[0].textContent = "Скрыть"; //смена текста в спане
    buttonContent.classList.add(contentButtonUp); //смена класса кнопки
  } else {
    buttonContent.children[0].textContent = "Читать далее"; //смена текста в спане
    buttonContent.classList.remove(contentButtonUp); //смена класса кнопки
  }

  contentText.classList.toggle(contentHidden); //переключатель
});


buttonBrands.addEventListener('click', function() {

  if (wrapperBrands.classList.contains(wrapperHidden)) { //условие для смены текста
    buttonBrands.children[0].textContent = "Скрыть"; //смена текста в спане
    buttonBrands.classList.add(contentButtonUp); //смена класса кнопки
  } else {
    buttonBrands.children[0].textContent = "Показать все"; //смена текста в спане
    buttonBrands.classList.remove(contentButtonUp); //смена класса кнопки
  }

  wrapperBrands.classList.toggle(wrapperHidden); //переключатель
});

buttonDevices.addEventListener('click', function() {

  if (wrapperDevices.classList.contains(wrapperHidden)) { //условие для смены текста
    buttonDevices.children[0].textContent = "Скрыть"; //смена текста в спане
    buttonDevices.classList.add(contentButtonUp); //смена класса кнопки
  } else {
    buttonDevices.children[0].textContent = "Показать все"; //смена текста в спане
    buttonDevices.classList.remove(contentButtonUp); //смена класса кнопки
  }

  wrapperDevices.classList.toggle(wrapperHidden); //переключатель
});

/* ------- */
