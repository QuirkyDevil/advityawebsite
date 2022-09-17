$(function () {
  $(window).on("resize", function () {
    $(".scene").css("min-height", $(window).height());
    $(".scene").css("min-width", $(window).width());
  });
});
