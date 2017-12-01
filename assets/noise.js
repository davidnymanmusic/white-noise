$(document).ready(function() {
  $("#container").hide(0).delay(500).fadeIn(3000)
  $("body").hide(0).delay(500).fadeIn(3000)

  $("#buttonSettings").click(function() {
    $("#set").show("slow");
  });
  $("#buttonSettings").dblclick(function() {
    $("#set").hide("slow");
  });

});


var vol01 = document.querySelector('#volume1')

vol01.addEventListener('input', function() {
  var vol = document.querySelector('#volume1').value;
  pinkNoise.volume.value = vol;
})

var pinkNoise = new Tone.Noise("pink").toMaster();
document.querySelector('#playToggle1').addEventListener('change', function(e) {
  if (e.target.checked) {
    pinkNoise.start()
  } else {
    pinkNoise.stop()
  }
});

var sound01 = new Tone.Oscillator({
  "partials": [6, 5, 4, 3, 2, 1],
  "type": "custom",
  "frequency": 426.7,
  "volume": -25
}).toMaster()

document.querySelector('#playToggle2').addEventListener('change', function(e) {
  if (e.target.checked) {
    sound01.start()
  } else {
    sound01.stop()
  }
});
var vol02 = document.querySelector('#volume2')
vol02.addEventListener('input', function() {
  var vol = document.querySelector('#volume2').value;
  sound01.volume.value = vol;
})
