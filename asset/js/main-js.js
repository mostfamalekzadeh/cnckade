/* 
$(document).ready(function () {
  $(".down").click(function () {
    $(".down").hide();
    $(".top").css({ display: "inline" });
    $(".drop-meno").css({ opacity: 1 });
  });
});
$(document).ready(function () {
  $(".top").click(function () {
    $(".top").hide();
    $(".down").show();
    $(".drop-meno").css({ opacity: 0 });
  });
});
$(document).ready(function () {
  $(".open-menu").click(function () {
    $(".open-menu").hide();
    $(".nav-menu").css({ display: "inline" });
  });
});
$(document).ready(function(){
$(".close-menu").click(function(){
$(".nav-menu").css({display:"none"});
$(".open-menu").show();

});



});
 */

$(".top").hide();
$(".drop").hide();
$(document).ready(function () {
  $(".down").click(function () {
    $(".down").hide();
    $(".top").show();
    $(".drop").show();
  });
});
$(document).ready(function () {
  $(".top").click(function () {
    $(".down").show();
    $(".top").hide();
    $(".drop").hide();
  });
});

$(document).ready(function () {
  $(".menu").click(function () {
    $(".menu").hide();
    $(".nav").css({ right: 0 });
  });
});
$(document).ready(function () {
  $(".close").click(function () {
    $(".nav").css({ right: "-100%" });

    $(".menu").show();
  });
});
