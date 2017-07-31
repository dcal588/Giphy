<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Quoth the Giphy</title>
</head>

<body>
  <div id="buttons">
    <button data-person="arnold schwarzenegger">
      I'll be back
    </button>
    <button data-person="michael j fox">
      My happiness grows in direct proportion to my acceptance,
      and in inverse proportion to my expectations.
    </button>

    <!-- STEP ONE: Open this file in the browser and click on the buttons. Watch what happens -->

    <!-- STEP TWO: between the dashed lines below
            * add three more buttons
            * add a data-person attribute of famous people you know
            * with a quote said by them -->

    <!-- **************************************** -->

    <!-- YOUR BUTTONS GO HERE!!!!!! Obviously delete this text after you put them between the dashed lines here.  -->
    <button data-person="Tom Hanks">
      Life is Like a Box of Chocolates
    </button>
    <button data-person="Darth Vader">
      No, I am your father
    </button>

    <!-- **************************************** -->


    <!-- STEP THREE: open this file in the browser and click on your buttons. If they don't work, then fix your buttons -->

    <!-- STEP FOUR: go over the JavaScript with your partners, and explain the lines of code to each other. -->

  </div>

  <div id="gifs-appear-here">
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    $("button").on("click", function() {
      var person = $(this).attr("data-person");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });
  </script>
</body>

</html>

