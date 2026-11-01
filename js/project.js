// Task 11: accordion menu
$(document).ready(function () {
  $("#acc h3").click(function () {
    var body = $(this).next(".body");
    $("#acc .body").not(body).slideUp(300); // close the others
    body.slideToggle(300);                  // open or close this one
  });
});
