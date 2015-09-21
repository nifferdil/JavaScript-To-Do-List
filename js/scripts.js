$(document).ready(function() {

  $("form#new-task").submit(function(event) {
    var inputtedTask = $(this).find("input#new-task").val();

    $("ul#tasks").append("<li><span class='task'>" + inputtedTask + "</span></li>");


    $(".task").last().click(function() {
      $("#tasks li").last().appendTo('#complete');
    });

    $("input#new-task").val("");
    event.preventDefault();
  });

});
