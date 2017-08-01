$ (document).ready( function(){	
	var topics = ["The Matrix", "Training Day", "Forrest Gump", "Star Trek", "Star Wars"];
  function displayGifs() {
  	var topic = $(this).attr("data-name");
    var queryURL = 'http://api.giphy.com/v1/gifs/search?q='+ encodeURIComponent(topic) +'&api_key=dc6zaTOxFJmzC&limit=10';
    console.log(queryURL)
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
    	$("#images").empty();
    	for(i=0;i<10;i++) {
      	var imageUrl = response.data[i].images.fixed_height.url;
      	var topicImage = $("<img>");
      	topicImage.attr("src", imageUrl);
      	topicImage.attr("alt", topic + " Image");
      	$("#images").prepend(topicImage);
      	console.log(imageUrl);
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
  createButtons();
});