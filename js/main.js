
$(function(){
  $("a[href^='#']").click(function(){
          var _href = $(this).attr("href");
          var plus = -50;
          $("html, body").animate({scrollTop: $(_href).offset().top + plus +  "px"}, 800);
          return false;
  });
});
