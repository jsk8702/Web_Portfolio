(function($){
    
    $("#header .header #Mnav").click(function(e){
        e.preventDefault();
        $(".header > ul > li").slideToggle();
    });
})(jQuery);

