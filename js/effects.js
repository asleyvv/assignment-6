$(document).ready(function () {
  // Task 2: hide / show / toggle
  $("#hide").click(function () { $("#para").hide(); });
  $("#show").click(function () { $("#para").show(); });
  $("#toggle").click(function () { $("#para").toggle(); });

  // Task 3: fade
  $("#fin").click(function () { $("#pic").fadeIn(); });
  $("#fout").click(function () { $("#pic").fadeOut(); });
  $("#ftog").click(function () { $("#pic").fadeToggle(600); });

  // Task 4: slide
  $("#sup").click(function () { $("#panel").slideUp(); });
  $("#sdown").click(function () { $("#panel").slideDown(); });
  $("#stog").click(function () { $("#panel").slideToggle(); });
});
