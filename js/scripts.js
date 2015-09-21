$(document).ready(function() {

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var tasks = { task: inputtedTask };

    list.tasks.each(function(task)
    $("ul#tasks").append("<li><span class='task'>" + tasks.task + "</span></li>");
  });


  $(".task").last().click(function() {
    $("#show-task").show();
    $("#show-task h2").text(newTask);
    list
  });

  $("input#new-task").val("");

});
