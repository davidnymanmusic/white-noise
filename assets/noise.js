$(document).ready(function() {
  $("#container").hide(0).delay(500).fadeIn(3000)
  $("body").hide(0).delay(500).fadeIn(3000)

  $("#buttonSettings").click(function() {
    $("#set").show("slow");
  });
  $("#buttonSettings").dblclick(function() {
    $("#set").hide("slow");
  });
  $("#timer").click(function() {
    $("#timerSet").show("slow");
  });
  $("#timer").dblclick(function() {
    $("#timerSet").hide("slow");
  });

  $("#about").click(function() {
    $("#info").show("slow");
  });
  $("#about").dblclick(function() {
    $("#info").hide("slow");


    $('.toggle-nav').click(function(e) {
      $(this).toggleClass('active');
      $('.menu ul').toggleClass('active');
      e.preventDefault();
    });
  });
});


//
// function save() {
// 	var checkbox = document.getElementById("checkbox1");
//     localStorage.setItem("checkbox1", checkbox.checked);
//     var checkbox1 = document.getElementById("playToggle1");
//       localStorage.setItem("playToggle1", checkbox.checked);
//     var checkbox2 = document.getElementById("playToggle2");
//       localStorage.setItem("playToggle2", checkbox.checked);
//     var checkbox3 = document.getElementById("playToggle3");
//       localStorage.setItem("playToggle3", checkbox.checked);
//     var checkbox4 = document.getElementById("darkToggle");
//       localStorage.setItem("darkToggle", checkbox.checked);
// }
//
// //for loading
// var checked = JSON.parse(localStorage.getItem("checkbox1"));
//     document.getElementById("checkbox1").checked = checked;
// var checked1 = JSON.parse(localStorage.getItem("playToggle1"));
//     document.getElementById("playToggle1").checked = checked;
// var checked2 = JSON.parse(localStorage.getItem("playToggle2"));
//     document.getElementById("playToggle2").checked = checked;
// var checked3 = JSON.parse(localStorage.getItem("playToggle3"));
//     document.getElementById("playToggle3").checked = checked;
// var checked4 = JSON.parse(localStorage.getItem("playToggle3"));
//     document.getElementById("darkToggle").checked = checked;
//



const {
  Path,
  Point
} = paper;

const offset = 10;
const segments = 42;
const strokeWidth = 1;
const strokeColor = 'rgba(232, 232, 232, 0.55)';

const canvas = document.querySelector('.squig');
paper.setup(canvas);
const view = paper.view;

const path = new Path();
path.strokeColor = strokeColor;
path.strokeWidth = strokeWidth;
path.strokeCap = 'round';

for (let i = 0; i <= segments; i++) {
  let width = view.size.width - (offset * 2);
  path.add(new Point((i / segments * width + offset), view.size.height / 2));
}

path.onFrame = (e) => {
  for (var i = 0; i <= segments; i++) {
    let height = 8;
    let sinus = Math.sin(e.time * 8 + i);
    path.segments[i].point.y = sinus * height + 25;
    path.smooth({
      type: 'continuous'
    });
  }
}

paper.view.draw();

function myFunction() {
  pinkNoise.stop()
  whiteNoise.stop()
  brownNoise.stop()
  rootChakra.stop();
  rootChakra2.stop();
  rootChakra3.stop();
  thirdEye.stop();
  thirdEye2.stop();
  sacral.stop();
  sacral2.stop();
  solar.stop();
  solar2.stop();
  alert('Hello');
}


$(function(){
    var $select = $(".1-100");
    for (i=1;i<=100;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});



// document.getElementById('25').innerHTML =
//   "25" + ":" + "00";
//
// function startTimer() {
//   var presentTime = document.getElementById('25').innerHTML;
//   var timeArray = presentTime.split(/[:]+/);
//   var m = timeArray[0];
//   var s = checkSecond((timeArray[1] - 1));
//   if(s==59){m=m-1}
//   //if(m<0){alert('timer completed')}
//
//   document.getElementById('25').innerHTML =
//     m + ":" + s;
//   setTimeout(startTimer, 1000);
// }
//
// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
//   if (sec < 0) {sec = "59"};
//   return sec;
// }



function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}

var vol01 = document.querySelector('#volume1')

vol01.addEventListener('input', function() {
  var vol = document.querySelector('#volume1').value;
  pinkNoise.volume.value = vol;
  whiteNoise.volume.value = vol;
  brownNoise.volume.value = vol;
});


var pinkNoise = new Tone.Noise({
  "type": "pink",
  "volume": -20,
}).toMaster();

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

var whiteNoise = new Tone.Noise({
  "type": "white",
  "volume": -20,
}).toMaster();
document.querySelector('#playToggleWhite').addEventListener('change', function(e) {
  if (e.target.checked) {
    whiteNoise.start()
  } else {
    whiteNoise.stop()
  }
});

var brownNoise = new Tone.Noise({
  "type": "brown",
  "volume": -20,
}).toMaster();

document.querySelector('#playToggleBrown').addEventListener('change', function(e) {
  if (e.target.checked) {
    brownNoise.start()
  } else {
    brownNoise.stop()
  }
});

document.querySelector('#playTogglePink').addEventListener('change', handlePlay(pinkNoise));

function handlePlay(noise) {
  return function(e) {
    if (e.target.checked) {
      noise.start()
    } else {
      noise.stop()
    }
  }
}

// var rootChakra = new Tone.Oscillator({
//   "type": "sine",
//   "frequency": 126.22,
//   "volume": -20,
// }).toMaster();

var rootChakra = new Tone.Oscillator({
  "type": "sine",
  "frequency": 396,
  "volume": -25,
}).toMaster();

// var rootChakra3 = new Tone.Oscillator({
//   "type": "sine",
//   "frequency": 194.18,
//   "volume": -20,
// }).toMaster();

var thirdEye = new Tone.Oscillator({
  "type": "sine",
  "frequency": 852,
  "volume": -25
}).toMaster();

// var thirdEye2 = new Tone.Oscillator({
//   "type": "sine",
//   "frequency": 83,
//   "volume": -20
// }).toMaster();

var sacral = new Tone.Oscillator({
  "type": "sine",
  "frequency": 417,
  "volume": -25
}).toMaster();

// var sacral2 = new Tone.Oscillator({
//   "type": "sine",
//   "frequency": 221.23,
//   "volume": -20
// }).toMaster();

var solar = new Tone.Oscillator({
  "type": "sine",
  "frequency": 528,
  "volume": -25
}).toMaster();

// var solar2 = new Tone.Oscillator({
//   "type": "sine",
//   "frequency": 147.85,
//   "volume": -20
// }).toMaster();

var heart = new Tone.Oscillator({
  "type": "sine",
  "frequency": 639,
  "volume": -25
}).toMaster();

// var heart2 = new Tone.Oscillator({
//   "type": "sine",
//   "frequency": 197,
//   "volume": -20
// }).toMaster();

var throat = new Tone.Oscillator({
  "type": "sine",
  "frequency": 741,
  "volume": -25
}).toMaster();

// var throat2 = new Tone.Oscillator({
//   "type": "sine",
//   "frequency": 126.22,
//   "volume": -20
// }).toMaster();

var crown = new Tone.Oscillator({
  "type": "sine",
  "frequency": 963,
  "volume": -25
}).toMaster();

// var crown2 = new Tone.Oscillator({
//   "type": "sine",
//   "frequency": 147.85,
//   "volume": -20
// }).toMaster();


document.querySelector('#playToggle2').addEventListener('change', function(e) {
  if (e.target.checked) {
    rootChakra.start();
    // rootChakra2.start();
    // rootChakra3.start();
  } else {
    rootChakra.stop();
    thirdEye.stop();
    sacral.stop();
    solar.stop();
    heart.stop();
    throat.stop();
    crown.stop();
  }
});

var sound = new Howl({
  src: ['https://k003.kiwi6.com/hotlink/rhsa9gtye9/ocean_2.mp3'],
  volume: 0.8,
  loop: true,
});


document.querySelector('#playToggle3').addEventListener('change', function(e) {
  if (e.target.checked) {
    sound.play();
  } else {
    sound.stop();
  }
});



document.querySelector('#chakraToggle').addEventListener('change', function(e) {
  if (e.target.checked) {
    rootChakra.start();
    // rootChakra2.start();
    // rootChakra3.start();
  } else {
    rootChakra.stop();
    // rootChakra2.stop();
    // rootChakra3.stop();
  }
});


document.querySelector('#chakraToggle1').addEventListener('change', function(e) {
  if (e.target.checked) {
    thirdEye.start();
    // thirdEye2.start();

  } else {
    thirdEye.stop();
    // thirdEye2.stop();
  }
});

document.querySelector('#chakraToggle2').addEventListener('change', function(e) {
  if (e.target.checked) {
    sacral.start();
    // sacral2.start();

  } else {
    sacral.stop();
    // sacral2.stop();
  }
});
document.querySelector('#chakraToggle3').addEventListener('change', function(e) {
  if (e.target.checked) {
    solar.start();
    // solar2.start();

  } else {
    solar.stop();
    // solar2.stop();
  }
});

document.querySelector('#chakraToggle4').addEventListener('change', function(e) {
  if (e.target.checked) {
    heart.start();
    // heart2.start();

  } else {
    heart.stop();
    // heart2.stop();
  }
});

document.querySelector('#chakraToggle5').addEventListener('change', function(e) {
  if (e.target.checked) {
    throat.start();
    // throat2.start();

  } else {
    throat.stop();
    // throat2.stop();
  }
});
document.querySelector('#chakraToggle6').addEventListener('change', function(e) {
  if (e.target.checked) {
    crown.start();
    // crown2.start();

  } else {
    crown.stop();
    // crown2.stop();
  }
});

var vol02 = document.querySelector('#volume2');

vol02.addEventListener('input', function() {
  var vol = document.querySelector('#volume2').value;
  rootChakra.volume.value = vol;
  // rootChakra2.volume.value = vol;
  // rootChakra3.volume.value = vol;
  thirdEye.volume.value = vol;
  // thirdEye2.volume.value = vol;
  sacral.volume.value = vol;
  // sacral2.volume.value = vol;
  solar.volume.value = vol;
  // solar2.volume.value = vol;
  heart.volume.value = vol;
  // heart2.volume.value = vol;
  throat.volume.value = vol;
  // throat2.volume.value = vol;
  crown.volume.value = vol;
  // crown2.volume.value = vol;
});

var vol03 = document.querySelector('#volume3');

vol03.addEventListener('input', function() {
  var vol = document.querySelector('#volume3').value;
  Howler.volume(vol);
  console.log(vol);
});

var slider01 = document.querySelector('#Slider01');

slider01.addEventListener('input', function() {
  var freq = document.querySelector('#fader01').value;
  sound01.frequency.value = freq;
});

// $("#dark").click(function() {
//   var text = $('#dark').text();
//   $('#dark').text(
//     text == "Light Mode" ? "Dark Mode" : "Light Mode");
// });
