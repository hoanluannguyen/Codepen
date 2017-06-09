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
    url: "https://api.twitch.tv/kraken/streams/freecodecamp",
    headers: {
     'Client-ID': 'afe431x90gpkl6o4ra4u65undxiehd'
  },
   success: function(data2){
     for (var i = 0; i < data2.follows.length; i++) {

       var displayName= data2.follows[i].channel.display_name;
       var logo = data2.follow[i].channel.logo;
       var status = data2.follow[i].channel.status;
       if(logo === null) {
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
       }
      $("#followerInfo").prepend("<div class = 'row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>"
                                    +
                                     "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>"
                                    + status + "</div></div>");
   }
   }
 });
 var deletedFollowers=['brunofin', 'comster404'];
  for(var i = 0; i<deletedFollowers.length; i++){
    $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/"+deletedFollowers[i],
    headers: {
     'Client-ID': 'afe431x90gpkl6o4ra4u65undxiehd'
  },
      error: function(data3){  //logo = 'http://web.vmc3.com/projects/bufs/branch/marines/logos/NoLogo.jpg';
        var logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
        var displayName = data3.statusText;
        console.log(data3.statusText
                    );
        var status = data3.status;
      $("#followerInfo").prepend("<div class = 'row'>" + "<div class='col-md-4'>" +
                                 "<img src='" + logo + "'>"
                                    +
                                     "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>"
                                    + status + "</div></div>");

      }
    });

  };

});



/*
  }
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
          //logo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g';
        //  $("#followerInfo").prepend("<div class = 'row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>"
          //                          +
            //                         "</div>" + "<div class='col-md-4'>" + data2.message + "</div>" + "<div class='col-md-4'>"
              //                      + data2.error + "</div></div>");
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
          });
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
  });
//var followerURL ="https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/"

 // $.getJSON('https://api.twitch.tv/kraken/users/freecodecamp/follows/channels', function(data2) {
   // for (var i = 0; i<data.follows.length; i++ )

   */
