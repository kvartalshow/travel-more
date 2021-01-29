$(document).ready(function() {
    $(window).bind("load", function() {
      //Пример исключения ссылки:
      //$('a[href*="#"]:not([href="#"],[href="#spu-209"],[href="#spu-211"],[href="#spu-212"],[href="#spu-213"],[href="#spu-214"],[href="#spu-215"],[href="#spu-217"])').click(function() {
      $('a:not(.spu-clickable)[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
          location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $("html, body").animate({
              // $('html, body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
          }
        }
      });
    });
  });
  $(window).load(function() {
    function goToByScroll(id) {
      $("html, body").animate({
        scrollTop: $("#" + id).offset().top
      }, 500);
    }
    if (window.location.hash != '') {
      goToByScroll(window.location.hash.substr(1));
    }
  });
