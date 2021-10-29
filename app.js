// codigo do scroll do menu 

$('nav a').click(function(e){
    e.preventDefaut();
    var id = $(this).alttr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
        }, 500
    );
});