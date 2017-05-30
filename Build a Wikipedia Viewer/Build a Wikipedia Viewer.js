$(document).ready(function(){
  $('#searh').click(function(){
    var searchTerm= $('#searchTerm').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        console.log(url);
      },
      error: function(errorMessage){
        alert("Error");
        // try again later!!
      }
    });
  });
});


  /*       $('#btn').click(function() {
           $.ajax({
               url: 'http://en.wikipedia.org/w/api.php',
               data: { action: 'query', list: 'search', srsearch: $("input[name=Wikipedia]").val(), format: 'json' },
               dataType: 'jsonp',
               success: processResult
           });
       });
   });

 function processResult(apiResult){
    for (var i = 0; i < apiResult.query.search.length; i++){
         $('#display-result').append('<p>'+apiResult.query.search[i].title+'</p>');
    }
    */
 
