// pics to scroll through
pics = ['peng1.jpg', 'peng2.jpg', 'peng3.jpg'];
// $('.loading').css('width', '300px');

function Switch(y) {
  $(".slide-img").css("opacity", "0");
  $(".slide-img").attr("src", "source/peng" + y + ".jpg");
  $(".slide-img").css("opacity", "1");
  $('.active').removeClass('active');
  $('.button-cont .big-button:nth-child(' + y + ') .button').addClass('active');
}
async function autoSwitch() {

  for (var i = 2; i < 100; i++) {
    $('.loading').css('width', '300px');
    await sleep(6000);

    if (i % 3 == 0) {
      Switch(3);
      console.log("3");
    }
    else if ((i-2) % 3 == 0 || i == 2) {
      Switch(2);
      console.log("2");
    }
    else {
      Switch(1);
      console.log("1");
    }
    $('.loading').css('transition', '1s ease-in');
    $('.loading').css('width', '0px');
    await sleep(1000)
    $('.loading').css('transition', '6s ease-in');
  }

}
autoSwitch();
