$(document).ready(function() {
 /* if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var long;
      var lat;

      long = position.coords.longitude;
      console.log(long);
      lat = position.coords.latitude;
  */

  //    $("#data").html("latitude: " + lat + "<br>longitude: " + long);
 var lat;
  var long;
  $.getJSON("http://ip-api.com/json",function(data2){
    lat = data2.lat;
    long = data2.lon;
    var api =
    "http://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    long +
    "&appid=ee3db4c3a2271806fd163fcdbcd96c01";

 // the alternative one below:
 //var api = 'http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=ee3db4c3a2271806fd163fcdbcd96c01';

  $.getJSON(api, function(data) {
    var fTemp;
    var cTemp;
    var kTemp;
    var tempSwap=true;

    var weatherType = data.weather[0].description;
        kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;

    fTemp = (kTemp * (9 / 5) - 459.67).toFixed(1);
    cTemp = (kTemp - 273).toFixed(1);
// .toFixed(2) to round number to 1 decimal
    console.log(city);
    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#fTemp").html(fTemp + "&#8457;");
    $("#fTemp").click(function(){

       if(tempSwap === false){
         $("#fTemp").html(fTemp + "&#8457;");

         tempSwap=true;
       }
       else{
         $("#fTemp").html(cTemp + "&#8451;");
         tempSwap=false;
       }
     });
windSpeed = (2.237*(windSpeed)).toFixed(1);
    $("#windSpeed").html(windSpeed + " mph");
    if(fTemp>80){
     $('body').css('background-image','url(http://www.mrwallpaper.com/wallpapers/Sunny-Summer-Day.jpg)');
    }
    else if(fTemp>70) {
      $('body').css('background-image','url(http://www.almanac.com/sites/default/files/image_nodes/thanksgiving-weather.jpg)');
    }
    else(fTem<=70)
      $('body').css('background-image','url(http://certifieddronevideography.com/wp-content/uploads/2017/03/green-wheat-field-sunset.jpg)');

});
  });



});
