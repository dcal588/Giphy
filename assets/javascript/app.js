$ (document).ready( function(){	
var topics = ["The Matrix", "Training Day", "Forrest Gump", "Star Trek", "Star Wars"];
      
    function displayer() {
        var topics = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        topics + "&api_key=25e6b8b7abc14f53a86853319e29c240&limit=10";
        
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          var topicBox = $("<div class='topics'>");
          var ratingBox = response.rating;
          var paragraphRating = $("<p>").text("Rating: " + ratingBox);
          topicsBox.append(paragraphRating);
          var gifImageUrl = response.URL;
          var gifImage = $("<img>").attr("src", gifImageUrl);
          topicsBox.append(gifImage);
          $("#gifTopicsViewer").prepend(topicBox);
        });
      }

      function createButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < topics.length; i++) {
          var a = $("<button>");
          a.addClass("topics");
          a.attr("data-name", topics[i]);
          a.text(topics[i]);
          $("#gifTopicsViewer").append(a);
        }
      }
      $("#add-topics").on("click", function(event) {
        event.preventDefault();
        var topics = $("#topics-input").val().trim();
        topics.push(topics);

        createButtons();
      });
      $(document).on("click", ".topics", displayer);
      // Calling the renderButtons function to display the intial buttons
      createButtons();
});
