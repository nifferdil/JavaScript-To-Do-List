$(document).ready(function() {

  $("form#new-task").submit(function(event) {
  //  var inputtedTask = $("input#new-task").val();
    var inputtedTask = $(this).find("input#new-task").val();

    $("ul#tasks").append("<li><span class='task'>" + inputtedTask + "</span></li>");


    $(".task").click(function() {

      $("ul#complete").append("<li><span class='task'>" + inputtedTask + "</span></li>");
      $(this).remove();

    });

  $("input#new-task").val("");
  event.preventDefault();
});

});
