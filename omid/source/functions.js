// waits the specified number of miliseconds
// call by making function async and using await sleep(ms)

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

  for (var i = 2; i < 1000; i++) {
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
    $('.loading').css('transition', '1s ease-out');
    $('.loading').css('width', '0px');
    await sleep(1000)
    $('.loading').css('transition', '6s ease-in');
  }

}
