// if (/Mobi|Android/i.test(navigator.userAgent)) {
//   $('.header-item-cont').css('display', 'none');
//   $('.menu').css('display', 'inline-block');
//   $('.header-item').css('display', 'none');
//   var openmenu = false;
//   $('.menu').click(function() {
//     if (openmenu === false) {
//       $('.header').css('background-color', 'white');
//       $('.header').css('height', '400px');
//       $('.title-cont').unbind('click');
//       $('html, body').css('overflow-y', 'hidden');
//       $('.menu').css('margin-right', '0');
//       $('.header-item').css('display', 'block');
//       $('.header-item-cont').css({'display': 'block', 'height': '70px', 'width': '300px', 'margin': '0 auto', 'font-size': '40px', 'line-height': '70px'});
//       openmenu = true;
//     }
//     else {
//       $('.menu').css('margin-right', '10px');
//       $('html, body').css('overflow-y', 'auto');
//       $('.header').css('background-color', 'rgba(256, 256, 256, 0.3)');
//       $('.header').css('height', '50px');
//       $('.header-item').css('display', 'none');
//       $('.header-item-cont').css('display', 'none');

//       $('.title-cont').click(function() {
//         container.animate({
//           scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
//         });
//       });
//       openmenu = false;
//     }
//     $(document).click(function(e) {
//       if ( $(e.target).closest('.header').length === 0 ) {
//         $('.menu').css('margin-right', '10px');
//         $('html, body').css('overflow-y', 'auto');
//         $('.header').css('background-color', 'rgba(256, 256, 256, 0.3)');
//         $('.header').css('height', '50px');
//         $('.menu-item').css('display', 'none');
//         $('.header-item-cont').css('display', 'none');
//       }
//     });
//   });
// }

function openMenu() {
  $('.header').toggleClass('responsive');
}
$('.icon').click(function() {
  $('i').toggleClass('fa').toggleClass('fa-bars').toggleClass('fas').toggleClass('fa-times');
  $('.header-item').toggleClass('big');
  $('html, body').toggleClass('scroll');
})

$(document).scroll(function() {
  var scrollTop = $(document).scrollTop();
  var offsetTop = $('.top').offset().top;
  var height = $('.top').height();

  if( (offsetTop + height) <= scrollTop){
    $('.header').addClass('sticky');
    $('.header-item').addClass('header-item-sticky');
    $('.logo-cont').addClass('logo-sticky');
    $('.header-item-cont').addClass('header-item-cont-sticky');
  }
  else{
    $('.header').removeClass('sticky');
    $('.header-item').removeClass('header-item-sticky');
    $('.logo-cont').removeClass('logo-sticky');
    $('.header-item-cont').removeClass('header-item-cont-sticky');
  }
});

var container = $('html, body');
var scrollTo = $('#mid-1');

$('.title-cont').click(function() {
  container.animate({
    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
  });
});
