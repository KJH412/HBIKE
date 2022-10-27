$(function () {

    // 2.모바일 네비게이션 메뉴     

    // let windowWidth = $(window).innerWidth();  

    let winWidth = $(window).width();

    function resizeInit() {
        //
        winWidth = $(window).width();
        $('.sub').stop().slideUp();
        $("#nav>li").removeClass("color");
    }

    resizeInit();

    $(window).on("resize", function () {
        resizeInit();
    })

    // 모바일 네비게이션 메뉴     
    // function mobileEventNav() {      console.log("mobile");
    $("#nav>li>a").on("click", function () {
        if (winWidth < 1270) {
            $('.sub').stop().slideUp();
            $(this).parent().find('.sub').stop().slideToggle();
            
            $(this).parent().toggleClass("color").siblings().removeClass("color");
        }
    });


    //PC

    $("#nav>li").on({
        "mouseenter": function () {
            if (winWidth > 1270) {
                $(this).addClass("color").siblings().removeClass("color");
                $('.sub').stop().slideDown(500);
            }
            else {
                return;
            }
        }
    });

    $("nav").on("mouseleave", function () {
        if (winWidth > 1270) {
            $(this).find('.sub').stop().slideUp(500);
            $("#nav>li").removeClass("color");
            // $('.sub>li').animate({ display: 'block' }, 500)
        }
        else {
            // $(this)
        }
    })


});