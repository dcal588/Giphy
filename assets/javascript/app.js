$ (document).ready( function(){	
var topics = ["The Matrix", "Training Day", "Forrest Gump", "Star Trek", "Star Wars"];
      
    function displayer() {
        var topics = $(this).attr("data-name");
        var queryURL = var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        topics + "&api_key=25e6b8b7abc14f53a86853319e29c240&limit=10";
        
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          var topicsBox = $("<div class='topics'>");
          var ratingBox = response.rating;
          var paragraphRating = $("<p>").text("Rating: " + ratingBox);
          topicsBox.append(paragraphRating);
