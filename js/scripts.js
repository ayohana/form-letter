$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    var userName = $("input#user-name").val();
    $("#userInput").text(userName);
    $("#letter").show();

    event.preventDefault();
  });
});