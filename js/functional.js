/*
 * Created on Sat November 18 2024
 *
 * Written by Allen  
 */
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 60) {
        $("#nav").addClass("boxshadow");
    }else{
        $("#nav").removeClass("boxshadow");
    }
});

$('.scrollbutton-left').on('click', function() {
    $(this).closest('div').find('.scrollbox').animate( { scrollLeft: '-=400' }, 500);
});
$('.scrollbutton-right').on('click', function() {
    $(this).closest('div').find('.scrollbox').first().animate( { scrollLeft: '+=400' }, 500);
});
