(function($){
    
    //페럴렉스 효과
    var nav = ("#nav ul li");
    var cont = ("#contents > div")

    nav.click(function(e){
        e.preventDefault();
        var taget = $(this);
        var index = taget.index();
        var section = cont.eq(index);
        var offset = section.offset().top;
        $("html, body").animate({scrollTop: offset},600,"easeInOutExpo");
    
    });
})(jQuery);

