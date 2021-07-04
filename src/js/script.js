$(document).ready(function(){
    function height() {
        $('.height_adjustment').height(function(){
            return $(this).width();
        });
    }
    height();
    $(window).resize(function() {
        height();
    });

})










