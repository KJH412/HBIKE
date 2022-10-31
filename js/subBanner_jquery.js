$(function () {
    
    /*
    * 서브 배너  
    */
    let mainBanner = $('#mainBanner');
    let banner = $('.banner');
    let bannerLi = $('.banner>li');

    let liWidth = bannerLi.outerWidth();
    let liLength = bannerLi.length;

    let rightArrow = $('.arrowRight');
    let leftArrow = $('.arrowLeft');

    let rolling; //slideBanner함수에 쓸 변수.

   
    //리사이즈 이벤트
    let winWidth = $(window).width(); //jquery.js에 한번 선언했음.

    function resize(){
        winWidth = $(window).width();
        console.log(winWidth);

        liWidth = winWidth;
        showBanner = 0;

        $('.banner').css("left", 0)
    }

    $(window).on("resize", function () {
        resize();
    }) 
   
    //
    //마우스올리면 멈춤.
    $("#mainBanner").on({
        "mouseover":function(){
            clearInterval(rolling);
        },
        "mouseout":function(){
            rolling = setInterval(function(){
                rightArrow.trigger("click");
                
            },4000)
        }
    })  

    rolling = setInterval(function(){
        rightArrow.trigger("click");
        
    },4000)
  
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
    })


});