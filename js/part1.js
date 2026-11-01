// Task 0: setup
$(document).ready(function () {
  console.log("jQuery is ready!");

  // Task 1: selectors (id, class, tag) + .text() .html() .css()
  $("#btnText").click(function () {
    $("#title").text("Heading changed with .text()");
  });
  $("#btnHtml").click(function () {
    $("#box").html("This box now has <b>bold</b> and <i>italic</i> text from .html()");
  });
  $("#btnCss").click(function () {
    $(".note").css({ "background-color": "#fff3cd", "border-left-color": "#f0a500" });
    $("li").css("color", "#2b57d6");
    $("#title").css("font-size", "2rem");
  });
  $("#btnReset").click(function () {
    location.reload();
  });
});
