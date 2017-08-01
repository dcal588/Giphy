$ (document).ready( function(){	
	var topics = ["The Matrix", "Training Day", "Forrest Gump", "Star Trek", "Star Wars"];

  $("#topic-buttons").on("click", function() {
     var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      var imageUrl = response.data.image_original_url;
      var topicImage = $("<img>");
      topicImage.attr("src", imageUrl);
      topicImage.attr("alt", "topic image");
      $("#images").prepend(topicImage);
		});
  });

  function createButtons() {
        $("#topicBox").empty();
        for (var i = 0; i < topics.length; i++) {
          var a = $("<button>");
          a.addClass("topic");
          a.attr("data-name", topics[i]);
          a.text(topics[i]);
          $("#topicBox").append(a);
        }
  }
  $("#add-topic").on("click", function(event) {
        event.preventDefault();
        var topic = $("#topic-input").val();
        topics.push(topic);
        // Calling renderButtons which handles the processing of our movie array
        createButtons();
      });
  createButtons();
});