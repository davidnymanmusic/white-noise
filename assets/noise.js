$(document).ready(function(){
    $("#container").hide(0).delay(500).fadeIn(3000)
    $("body").hide(0).delay(500).fadeIn(3000)

    $("#buttonSettings").click(function(){
           $("#set").show("slow");
       });
    $("#buttonSettings").dblclick(function(){
           $("#set").hide("slow");
       });

});

var pinkNoise = new Tone.Noise("pink").toMaster();
var vol01 = document.querySelector('#volume1')

vol01.addEventListener('input', function() {
  var vol = document.querySelector('#volume1').value;
  pinkNoise.volume.value = vol;
})


document.querySelector('.playToggle').addEventListener('change', function(e){
	if (e.target.checked){
  	pinkNoise.start()
  } else {
  	pinkNoise.stop()
  }
});
