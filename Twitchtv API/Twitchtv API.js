// run jQuery
$(document).ready(function(){
  var following=[];

  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/freecodecamp",
    headers: {
     'Client-ID': 'afe431x90gpkl6o4ra4u65undxiehd'
  },
         success: function(data1){

  }
  });

  //var followerURL ="https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/"

  $.getJSON('https://api.twitch.tv/kraken/users/freecodecamp/follows/channels', function(data2) {
    for (var i = 0; i<data.follows.length; i++ ) {
      var displayName= data2.follows[i].channel.display_name;
      following.push(displayName);
    }
    following.push('name1');
    following.push('name2');
    following.push('ESL_SC2');

    for(var i=0; i<following.length; i++){
      var url2= 'https://api.twitch.tv/kraken/streams/' + following[i] + '/?callback=?';

      $.getJSON(url2).done(function(data2){
        var logo;
        var status;
        var name;

        if(data2.error){
          logo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g';
          $("#followerInfo").prepend("<div class = 'row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>"
                                    +
                                     "</div>" + "<div class='col-md-4'>" + data2.message + "</div>" + "<div class='col-md-4'>"
                                    + data2.error + "</div></div>");
        }
        if (data2.stream === null) {
          $.getJSON(data2._link.channel, function(data3) {
            var status = "OFFLINE";
            var logo = data3.logo;
            var name = data3.display_name;
            if (logo === null) {
              logo = 'http://web.vmc3.com/projects/bufs/branch/marines/logos/NoLogo.jpg';
            }
            $("#followerInfo").prepend("<div class = 'row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>"
                                    +
                                     "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>"
                                    + status + "</div></div>");
        }
                    else {
                    status = data2.stream.channel.status;
                    logo = data2.stream.channel.logo;
                    name = data2.stream.channel.display_name;

                    if (logo === null) {
            logo ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g';
          }
          $("#followerInfo").prepend("<div class = 'row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>"
                                    +
                                     "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>"
                                    + status + "</div></div>");
                    }

        }
      });
    }
  })
});
