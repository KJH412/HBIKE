
/*
 *모바일 네비게이션 메뉴  
 */
$(function(){           
    $("#nav>li").on("click", function(){
        $(this).find('.sub').stop().slideToggle(300)
        .parents().siblings().find('.sub').slideUp();

    })    
});