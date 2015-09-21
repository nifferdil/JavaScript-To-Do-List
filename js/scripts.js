$(document).ready(function() {

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#new-city").val();
    var inputtedCountry = $("input#new-country").val();
    var inputtedYear = $("input.new-year").val();
    var inputtedPerson = $("input.new-person").val();
    var inputtedNotes = $("input.new-notes").val();

    var newPlace = { city: inputtedCity,
      country: inputtedCountry,
      year: inputtedYear,
      person: inputtedPerson,
      notes: inputtedNotes };

      $("ul#places").append("<li><span class='place'>" + newPlace.city + ", " + newPlace.country + "</span></li>");

      $(".place").last().click(function() {
        $("#show-place").show();
        $("#show-place h2").text(newPlace.city + ", " + newPlace.country);
        $(".new-city").text(newPlace.city);
        $(".new-country").text(newPlace.country);
        $(".new-year").text(newPlace.year);
        $(".new-person").text(newPlace.person);
        $(".new-notes").text(newPlace.notes);

      });

      $("input#new-city").val("");
      $("input#new-country").val("");
      $("input.new-year").val("");
      $("input.new-person").val("");
      $("input.new-notes").val("");
    });
  });
