$(function () {
  // Tirgger
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".gnb").toggleClass("active");
  });
  $("section, .menu a").click(function () {
    $(".gnb").removeClass("active");
    $(".trigger").removeClass("active");
  });

  // Header Nav
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
      $(".gototop").addClass("active");
      // $(".trigger span").css("background-color", "#000");
      // $("#main-logo").attr("src", "./images/logo.png");
    } else {
      $("header").removeClass("active");
      $(".gototop").removeClass("active");
      // $(".trigger span").css("background-color", "#fff");
      // $("#main-logo").attr("src", "./images/logo_white.png");
    }
  });

  // typeing
  $("#typing").typeIt({
    speed: 200,
    autoStart: true,
    breakLines: false,
  });
});
