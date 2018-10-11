// replace await sleep with something else
pics = ['peng1.jpg', 'peng2.jpg', 'peng3.jpg'];

function switchPic(z) {
  $('.loading').css('transition', '5s');
  $('.loading').css('width', '300px');

  async function undo() {
    await sleep(5000);
    $('.loading').css('transition', '1s');
    $('.loading').css('width', '0px');
    $('.slideshow-pic').attr("src", "source/" + pics[z]);
  }
  undo();
}
switchPic(1);
// for (var x = 2; x < 100; x++) {
//   if (x % 3 == 0) {
//     switchPic(2);
//   }
//   if (x % 2 == 0) {
//     switchPic(1);
//   }
//   else {
//     switchPic(0);
//   }
// }
