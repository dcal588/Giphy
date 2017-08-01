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
          var topicBox = $("<div class='topics'>");
          var ratingBox = response.rating;
          var paragraphRating = $("<p>").text("Rating: " + ratingBox);
          topicsBox.append(paragraphRating);
          var gifImageUrl = response.URL;
          var gifImage = $("<img>").attr("src", gifImageUrl);
          topicsBox.append(gifImage);
          $("#gifTopicViewer").prepend(topicBox);
        });
      }
      
      
      
      
      
      
      // Function for displaying movie data
      function renderButtons() {
        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();
        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {
          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("movie");
          // Adding a data-attribute
          a.attr("data-name", movies[i]);
          // Providing the initial button text
          a.text(movies[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }
      // This function handles events where a movie button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();
        // Adding movie from the textbox to our array
        movies.push(movie);
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });
      // Adding a click event listener to all elements with a class of "movie"
      $(document).on("click", ".movie", displayMovieInfo);
      // Calling the renderButtons function to display the intial buttons
      renderButtons();
    </script>
});
