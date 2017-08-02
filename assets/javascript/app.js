$ (document).ready( function(){	
	var topics = ["The Matrix", "Training Day", "Forrest Gump", "Star Trek", "Star Wars"];

	
  function displayGifs() {
  	var topic = $(this).attr("data-name");
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q='+ encodeURIComponent(topic) +'&api_key=dc6zaTOxFJmzC&limit=10';
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
    	$("#images").empty();
    	for(var i=0; i<10; i++) {

      	var imageUrl = response.data[i].images.fixed_height.url;
      	var imageUrlStill = response.data[i].images.fixed_height_still.url;
      	var ratingResponse = response.data[i].rating;
        var gifBox = $("<div>");
      	var topicImage = $("<img>");
      	var rating = $("<p> Rating: "+ ratingResponse + "</p>");
        gifBox.attr("class", "gifs");
      	topicImage.attr("id", "gif");
      	topicImage.attr("src", imageUrlStill);
     		topicImage.attr("data-still", imageUrlStill);
      	topicImage.attr("data-animate", imageUrl);
      	topicImage.attr("data-state", "still");
      	topicImage.attr("alt", topic + " Image");
        $("#images").append(gifBox);
      	gifBox.append(rating);
      	gifBox.append(topicImage);
    	}
		});
  }

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
        createButtons();
      });
  $(document).on("click", ".topic", displayGifs);
  $(document).on("click", "#gif", switcher);

  function switcher() {
      var state = $(this).attr("data-state");
      console.log(state);
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    }
  createButtons();
});