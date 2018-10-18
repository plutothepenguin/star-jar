// waits the specified number of miliseconds
// call by making function async and using await sleep(ms)
autoSwitch();
function sleep(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
}

// switches to specified image in slideshow
// used by autoswitch as well

function Switch(y) {
 $('.active-img').removeClass('active-img');
 $('.img-cont .slide-img:nth-child(' + y + ')').addClass('active-img');

 $('.active-button').removeClass('active-button');
 $('.button-cont .big-button:nth-child(' + y + ') .button').addClass('active-button');
}

// automatically switches images with sexy as heck effects

async function autoSwitch() {
 for (var i = 2; i < 100; i++) {
   $('.loading').css('width', '300px');
   await sleep(6000);

   if (i % 3 == 0) {
     Switch(3);
   }
   else if ((i-2) % 3 == 0 || i == 2) {
     Switch(2);
   }
   else {
     Switch(1);
   }
   $('.loading').css('transition', '1s ease-out');
   $('.loading').css('width', '0px');
   await sleep(1000)
   $('.loading').css('transition', '6s ease-in');

 }
}

function openMenu() {
 $('.header').toggleClass('responsive');
}
// shows loading spinner until loaded

window.onload = async function() {
 // maybe remove sleep on deployment
 await sleep(300);
 $('.content').css('display', 'block');
 $('.lds-ring').css('display', 'none');
}
// scrolls to top when loaded
$('html, body').ready(function(){
    $('html, body').scrollTop(0);
});
// fixes header when hamburger menu is clicked
$('.icon').click(function() {
  $('i').toggleClass('fa').toggleClass('fa-bars').toggleClass('fas').toggleClass('fa-times');
  $('.header-item').toggleClass('big');
  $('html, body').toggleClass('scroll');
});
// changes header when scroll far enough
$(document).scroll(function() {
  var scrollTop = $(document).scrollTop();
  var offsetTop = $('.top').offset().top;
  var height = $('.top').height();

  if ((offsetTop + height) <= scrollTop) {
    $('.header').addClass('sticky');
    $('.header-item').addClass('header-item-sticky');
    $('.logo-cont').addClass('logo-sticky');
    $('.header-item-cont').addClass('header-item-cont-sticky');
  }
  else {
    $('.header').removeClass('sticky');
    $('.header-item').removeClass('header-item-sticky');
    $('.logo-cont').removeClass('logo-sticky');
    $('.header-item-cont').removeClass('header-item-cont-sticky');
  }
});
