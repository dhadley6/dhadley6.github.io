$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
      $('#mainNav').addClass("affix");
    } else{
      $('#mainNav').removeClass("affix");
    }
  });

  $(".page-scroll").on("click", function() {
    var thisID = $(this).attr("href");

    $("body").animate({
      scrollTop: $(thisId).offset().top
    });
  });

    $('body').scrollspy({target: '#mainNav'});
  });
