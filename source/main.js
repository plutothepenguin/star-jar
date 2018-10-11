// pics to scroll through
pics = ['peng1.jpg', 'peng2.jpg', 'peng3.jpg'];
$('.loading').css('width', '300px');

function autoswitch(y) {
  $(".slide-img").attr("src", "source/peng" + y + ".jpg");
}
async function autoswitchRun() {
  for (var i = 2; i < 100; i++) {
    await sleep(5000);
    if (i % 3 == 0) {
      autoswitch(3);
      console.log("3");
    }
    else if ((i-2) % 3 == 0 || i == 2) {
      autoswitch(2);
      console.log("2");
    }
    else {
      autoswitch(1);
      console.log("1");
    }
  }
}
autoswitchRun();
