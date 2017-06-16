// run jQuery
$(document).ready(function(){
  //var following=[];


  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/freecodecamp",
    headers: {
     'Client-ID': 'afe431x90gpkl6o4ra4u65undxiehd'
  },
         success: function(data1){
           if(data1.stream===null){

             $("#fccStatus").html("Free Code Camp is currently OFFLINE");
           }else{

             $("#fccStatus").html("Free Code Camp is currently ONLINE")
           }
           }
      });

      $.ajax({
         type: "GET",
         url: "https://api.twitch.tv/kraken/streams/kindafunnygames",
         headers: {
          'Client-ID': 'afe431x90gpkl6o4ra4u65undxiehd'
       },
       // after change another channel, its work!!!
       // try to find down data2
       // keep using console.log to test every single step

   
