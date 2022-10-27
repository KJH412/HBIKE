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
            $(".sub").css("height","auto");
            $('.sub').stop().slideUp();
            $(this).parent().find('.sub').stop().slideToggle();
            
            $(this).parent().toggleClass("color").siblings().removeClass("color");
        }
    });


    //PC

    $("#nav>li").on({
        "mouseenter": function () {
            if (winWidth > 1270) {
                $(".sub").css("height","300px");
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


    /*
    * 메인배너  
    */
    let mainBanner = $('#mainBanner');
    let banner = $('.banner');
    let bannerLi = $('.banner>li');

    let liWidth = bannerLi.outerWidth();
    let liLength = bannerLi.length;

    let rightArrow = $('.arrowRight');
    let leftArrow = $('.arrowLeft');

    var rolling; //slideBanner함수에 쓸 변수.

    // slideBanner(); 

    function move() {
        banner.css("width", liWidth * liLength);
        banner.animate({ "left": -liWidth + "px" }, function () {

            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");

            $(this).find("li:first").remove();

            $(this).css("left", 0);
        });
    }

    function slideBanner() {
        rolling = setInterval(function () {
            move();
        }, 4000);
    }


    rightArrow.on("click", function () {
        banner.stop().animate({ "left": -liWidth + "px" }, function () {

            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");

            $(this).find("li:first").remove();

            $(this).css("left", 0);
        })
    })
    leftArrow.on("click", function () {
        banner.prepend("<li>" + banner.find("li:last").html() + "</li>");
        banner.find("li:last").remove();
        banner.css("left", -liWidth);
        banner.stop().animate({ "left": 0 });
        // banner.stop().animate({"left":liWidth + "px"}, function(){        
        //     $(this).prepend("<li>" + $(this).find("li:last").html() + "</li>");            
        //     $(this).find("li:last").remove();           
        //     $(this).css("left", 0);                         
        // })
    })



});