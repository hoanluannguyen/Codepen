$(document).ready(function(){
 $('#searchBtn').click(function(){
   var searchTerm = $('#searchTerm').val();
 var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";

   $.ajax({
     type: 'GET',
     url: url,
     async: false,
     dataType: 'json',
     success: function(data){
       $('#output').html('');
       for (i=0; i<data[1].length; i++){
      $('#output').append("<li><a href="+data[3][i]+" target='_blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
       }
     },
     error: function(errorMessage){
       alert('Error');
       // need debug
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
