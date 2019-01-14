var menu = document.getElementById("menu");
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__menu');
var header = document.querySelector('.page-header--main');

// navMain.classList.remove('main-nav--nojs');

window.onscroll = function() {
  scrollFunction()
};

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

$('.main-nav__link').on("click", function() {
  $('#hamburger-menu').click();
});

$(document).ready(function() {
  if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    skrollr.init({
      forceHeight: false
    });
  }
})

$(".cats__item").click(function() {
  if ($(this).hasClass("cats__item--closed")) {
    $(this).removeClass("cats__item--closed");
    $(this).addClass("cats__item--opened");
  } else {
    $(this).addClass("cats__item--closed");
    $(this).removeClass("cats__item--opened");
  }
});

$(".questions__item").click(function() {
  if ($(this).hasClass("questions__item--closed")) {
    $(this).removeClass("questions__item--closed");
    $(this).addClass("questions__item--opened");
  } else {
    $(this).addClass("questions__item--closed");
    $(this).removeClass("questions__item--opened");
  }
});

setTimeout(function() {
  skrollr.get().refresh();
}, 0);
