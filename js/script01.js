(function($){
    
    $(".ham").click(function(e){
        e.preventDefault();
        $(".header > ul > li").slideToggle();
    });
})(jQuery);

