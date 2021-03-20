$(document).ready(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });



    function checkScroll(scrollOffset) {
      if( scrollOffset >= introH ) {
        header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }
    }


    /*Smooth scroll */

    $('[data-scroll]').on('click', function (event) {
      event.preventDefault();

      var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });

    /*Burger menu*/ 
    $("#nav_toggle").on("click", function(event) {
      event.preventDefault();

      $(this).toggleClass("active");
      $("#user_navigation").toggleClass("active");
    });

    /*Slider*/

    /*$('[data-slider]').slick({
      infinite: true,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });*/

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });

    $('#main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.intro-slider'
    });
    $('.intro-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '#main-slider',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });

    $('#form').submit(function (event) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
        }).done(function() {
        $(this).find("input").val("");
        alert("Сообщение успешно отправлено");
        $("form").trigger("reset");
        console.log('отправил');
    });
      return false;
    });

});



/*$("body").on("click","[data-active]",function(){
  var src		=$(this).attr('data-src');
  $(this).toggleClass("active");
  $(src).toggleClass("active");
});*/