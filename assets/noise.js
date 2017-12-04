$(document).ready(function() {
  $("#container").hide(0).delay(500).fadeIn(3000)
  $("body").hide(0).delay(500).fadeIn(3000)

  $("#buttonSettings").click(function() {
    $("#set").show("slow");
  });
  $("#buttonSettings").dblclick(function() {
    $("#set").hide("slow");
  });

  $("#about").click(function() {
    $("#info").show("slow");
  });
  $("#about").dblclick(function() {
    $("#info").hide("slow");
  });
});



$("#dark").click(function() {
  var text = $('#dark').text();
  $('#dark').text(
    text == "Light Mode" ? "Dark Mode" : "Light Mode");
});

function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}


$(document).ready(function() {
  $('.toggle-nav').click(function(e) {
    $(this).toggleClass('active');
    $('.menu ul').toggleClass('active');

    e.preventDefault();
  });
});

var vol01 = document.querySelector('#volume1')

vol01.addEventListener('input', function() {
  var vol = document.querySelector('#volume1').value;
  pinkNoise.volume.value = vol;
  whiteNoise.volume.value = vol;
  brownNoise.volume.value = vol;
})

var pinkNoise = new Tone.Noise("pink").toMaster();
document.querySelector('#playToggle1').addEventListener('change', function(e) {
  if (e.target.checked) {
    pinkNoise.start()
    whiteNoise.start()
    brownNoise.start()
  } else {
    pinkNoise.stop()
    whiteNoise.stop()
    brownNoise.stop()
  }
});
var whiteNoise = new Tone.Noise("white").toMaster();
document.querySelector('#playToggleWhite').addEventListener('change', function(e) {
  if (e.target.checked) {
    whiteNoise.start()
  } else {
    whiteNoise.stop()
  }
});
var brownNoise = new Tone.Noise("brown").toMaster();
document.querySelector('#playToggleBrown').addEventListener('change', function(e) {
  if (e.target.checked) {
    brownNoise.start()
  } else {
    brownNoise.stop()
  }
});

document.querySelector('#playTogglePink').addEventListener('change', function(e) {
  if (e.target.checked) {
    pinkNoise.start()
  } else {
    pinkNoise.stop()
  }
});




var sound01 = new Tone.Oscillator({
  "partials": [11, 1],
  "type": "custom",
  "frequency": 320,
  "volume": -25
}).toMaster();

var sound02 = new Tone.Oscillator({
  "partials": [11, 8, 7, 6, 3, 2, 1],
  "type": "custom",
  "frequency": 426.7,
  "volume": -30
}).toMaster();

var rootChakra = new Tone.Oscillator({
  "type": "sine",
  "frequency": 194.18,
  "volume": -25
}).toMaster();
var rootChakra2 = new Tone.Oscillator({
  "type": "sine",
  "frequency": 396,
  "volume": -25
}).toMaster();

var thirdEye = new Tone.Oscillator({
  "type": "sine",
  "frequency": 852,
  "volume": -25
}).toMaster();
var thirdEye2 = new Tone.Oscillator({
  "type": "sine",
  "frequency": 83,
  "volume": -25
}).toMaster();


document.querySelector('#playToggle2').addEventListener('change', function(e) {
  if (e.target.checked) {
    rootChakra.start();
    rootChakra2.start();

    // sound01.start();
    // sound02.start();
  } else {
    rootChakra.stop();
    rootChakra2.stop();
    // sound01.stop();
    // sound02.stop();
  }
});

var sound = new Howl({
  src: ['https://k003.kiwi6.com/hotlink/rhsa9gtye9/ocean_2.mp3'],
  volume: 0.8,
});


document.querySelector('#playToggle3').addEventListener('change', function(e) {
  if (e.target.checked) {
sound.play();
  } else {
sound.stop();
  }
});
var vol03 = document.querySelector('#volume3')
vol03.addEventListener('input', function() {
  var vol = document.querySelector('#volume3').value;
   Howler.volume(vol);
  console.log(vol);

});


document.querySelector('#chakraToggle').addEventListener('change', function(e) {
  if (e.target.checked) {
    rootChakra.start();
    rootChakra2.start();

    // sound01.start();
    // sound02.start();
  } else {
    rootChakra.stop();
    rootChakra2.stop();
    // sound01.stop();
    // sound02.stop();
  }
});
document.querySelector('#chakraToggle1').addEventListener('change', function(e) {
  if (e.target.checked) {
    thirdEye.start();
    thirdEye2.start();
    rootChakra.stop();
    rootChakra2.stop();

    // sound01.start();
    // sound02.start();
  } else {
    thirdEye.stop();
    thirdEye2.stop();
    // sound01.stop();
    // sound02.stop();
  }
});
var vol02 = document.querySelector('#volume2')
vol02.addEventListener('input', function() {
  var vol = document.querySelector('#volume2').value;
  sound01.volume.value = vol;
  rootChakra.volume.value = vol;
  rootChakra2.volume.value = vol;
  thirdEye.volume.value = vol;
  thirdEye2.volume.value = vol;
  // sound02.volume.value = vol;
});

var slider01 = document.querySelector('#Slider01');
slider01.addEventListener('input', function() {
  var freq = document.querySelector('#fader01').value;
  sound01.frequency.value = freq;
});
