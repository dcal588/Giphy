$ (document).ready( function(){	
var topics = ["The Matrix", "Training Day", "Forrest Gump", "Star Trek", "Star Wars"];


    $("#topic-button").on("click", function() {
      // Storing our giphy API URL for a random cat image
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";
      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After the data from the AJAX request comes back
      .done(function(response) {
        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;
        // Creating and storing an image tag
        var topicImage = $("<img>");
        // Setting the catImage src attribute to imageUrl
        topicImage.attr("src", imageUrl);
        topicImage.attr("alt", "cat image");
        // Prepending the catImage to the images div
        $("#images").prepend(topicImage);
});
    });
  });