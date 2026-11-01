$(document).ready(function () {
  // Task 5: add and remove list items
  var n = 2;
  $("#add").click(function () {
    n++;
    $("#list").append("<li>Item " + n + "</li>");
  });
  $("#addTop").click(function () {
    n++;
    $("#list").prepend("<li>Item " + n + "</li>");
  });
  $("#del").click(function () {
    $("#list li:last").remove();
  });

  // Task 6: attributes
  $("#href").text($("#lnk").attr("href"));
  $("#chSrc").click(function () {
    var cur = $("#photo").attr("src");
    $("#photo").attr("src", cur == "img/pic1.svg" ? "img/pic2.svg" : "img/pic1.svg");
  });
  $("#chHref").click(function () {
    var cur = $("#lnk").attr("href");
    var next = cur == "https://api.jquery.com" ? "https://www.w3schools.com/jquery/" : "https://api.jquery.com";
    $("#lnk").attr("href", next);
    $("#href").text(next);
  });

  // Task 7: live form output
  $("#name").on("input", function () { $("#outName").text($(this).val()); });
  $("#email").on("input", function () { $("#outEmail").text($(this).val()); });
});
