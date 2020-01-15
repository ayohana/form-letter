$(document).ready(function() {
  $("form#user-input").submit(function(event) {

    var userName = $("input#user-name").val();
    $(".user-name").text(userName);

    $("#letter").show();

    event.preventDefault();
  });
});