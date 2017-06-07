// run jQuery
$(document).ready(function(){
  var following=[];
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
  var followerURL ="https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/"
  $.getJSON(followerURL, function(data2){
    for (var i=0; i<data2.follows.length; i++ ){
      var displayName= data2.follows[i].channel.display_name;
      following.push(displayName);
    }
    following.push('name1');
    following.push('name2');
    following.push('ESL_SC2');

    for(var i=0; i<following.length; i++){
      var url2='https://api.twitch.tv/kraken/streams/' + following[i] + '/?callback=?';

      $.getJSON(url2).done(function(data3){
        var logo;
        var status;
        var name;
        if(data3.error){
          logo="";
          name = data2.message;
          status = data2.error;
        }
      });
    }
  })
});
