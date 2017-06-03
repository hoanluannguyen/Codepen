// run jQuery
$(document).ready(function(){
  // stream info ad status API call
  var url= "https://api.twitch.tv/kraken/streams/freecodecamp";
  $.getJSON(url,function(data1){
    if(data1.stream===null){
      $("#fccStatus").html("Free Code Camp is currently OFFLINE")
    }
    else{
      $("#fccStatus").html("Free Code Camp is currently ONLINE")
    }



  });
});
