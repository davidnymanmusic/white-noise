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
