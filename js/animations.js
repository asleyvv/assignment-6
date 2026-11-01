$(document).ready(function () {
  // Task 8: basic animate (size + position)
  $("#go1").click(function () {
    $("#sq1").stop(true).animate({ width: "120px", height: "120px", left: "300px", top: "40px" }, 1000);
  });
  $("#reset1").click(function () {
    $("#sq1").stop(true).css({ width: "60px", height: "60px", left: 0, top: 0 });
  });

  // Task 9: sequential animations (jQuery queues chained .animate calls)
  $("#go2").click(function () {
    $("#sq2").stop(true)
      .animate({ left: "300px" }, 700)                     // move right
      .animate({ top: "130px" }, 700)                      // move down
      .animate({ width: "30px", height: "30px" }, 700)     // shrink
      .animate({ left: 0, top: 0, width: "60px", height: "60px" }, 700); // back to start
  });
  $("#reset2").click(function () {
    $("#sq2").stop(true).css({ width: "60px", height: "60px", left: 0, top: 0 });
  });

  // Task 10: opacity + size + movement in one call
  $("#go3").click(function () {
    $("#sq3").stop(true).animate({
      opacity: 0.4,
      width: "140px",
      height: "140px",
      left: "250px",
      top: "30px"
    }, 1500);
  });
  $("#reset3").click(function () {
    $("#sq3").stop(true).css({ opacity: 1, width: "60px", height: "60px", left: 0, top: 0 });
  });
});
