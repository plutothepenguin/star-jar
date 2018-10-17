$('html, body').ready(function(){
    $('html, body').scrollTop(0);
});
$(window).focus(function() {
  document.title = 'Star Jar';
});
$(window).blur(function() {
  document.title = 'we miss you';
});

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
