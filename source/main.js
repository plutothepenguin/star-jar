$(document).scroll(function() {
  var scrollTop = $(document).scrollTop();
  var offsetTop = $('.top').offset().top - 70;
  var height = $(".top").height();

  if( (offsetTop + height) <= scrollTop){
    $(".header").addClass('sticky');
    $(".header-item").addClass('header-sticky');
  }
  else{
    $(".header").removeClass('sticky');
    $(".header-item").removeClass('header-sticky');
  }
});
