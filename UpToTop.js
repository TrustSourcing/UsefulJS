$(document).scroll(function () {
    if ($(this).scrollTop() > 100) {
        if (!$('.toTop').length) {
            $(".content").append("<div class='toTop'>Up To Top</div>");
            $('.toTop').fadeIn('fast').on('click', function () {
                $(this).animate({
                    'bottom': "+=" + $(window).height(),
                        'opacity': "0"
                }, 500, "easeInOutQuart");
                /*for timing function "easeInOutQuart" U need to connect jQueryUI. 
                    in other case just don't set this parameter*/
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        }
    } else {
        $('.toTop').fadeOut('fast', function () {
            $(this).remove();
        });
    }
});
