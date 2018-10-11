// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// function sleep(milliseconds) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if ((new Date().getTime() - start) > milliseconds){
//       break;
//     }
//   }
// }
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function clickSwitch(x) {
  $('.slide-img').attr('src', 'source/' + pics[x]);
  $('.active').removeClass('active');
  $('.button-cont .big-button:nth-child(' + (x+1) + ') .button').addClass('active');
}
