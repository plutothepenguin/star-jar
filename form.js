function next(x) {
  $('.active').removeClass('active');
  $('form .form-cont:nth-child(' + x + ')').addClass('active');
  $('form .form-cont:nth-child(' + x + ') input').focus();
}
// readd able on next button click
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
$('input').keydown(function (e){
    if(e.keyCode == 13){
        next($(this).index() + 2);
    }
})
$('input[name=message]').keydown(function(e) {
  if(e.keyCode == 13){
      $('form').submit();
  }
})

$('.submit').click(function() {
  $('form').submit();
})
// $('input[type="submit"]').prop('disabled', true);
$('.next').prop('disabled', true);
$('input[name=name]').on('input', function() {
  if ($(this).val().length > 0) {
    $('.active .next').prop('disabled', false);
    // $(this).css('border-right', '3px solid green');
  }
  else if (!$(this).val()) {
    $('.active .next').prop('disabled', true);
    // $(this).css('border-right', '3px solid red');
  }
})
  $('input[name=email]').on('input', function() {
    if (!validateEmail($(this).val()) || !$(this).val()) {
      // $('input[name=email]').css('border-right', '3px solid red');
      $('.active .next').prop('disabled', true);
    }
    else {
      // $('input[name=email]').css('border-right', '3px solid green');
      $('.active .next').prop('disabled', false);
    }
  })
  // $('input[name=message]').on('input', function() {
  //   if ($(this).val().length > 0) {
  //     $(this).css('border-right', '3px solid green');
  //   }
  //   else if (!$(this).val()) {
  //     $(this).css('border-right', '3px solid red');
  //   }
  // })
