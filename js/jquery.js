$(function () {

    // 네비게이션 메뉴------------------------------------------     
 

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
            
            $(this).parent().toggleClass("orangeColor").siblings().removeClass("orangeColor");
        }
    });


    //PC 네비게이션 메뉴

    $("#nav>li").on({
        "mouseenter": function () {
            if (winWidth > 1270) {
                $(".sub").css("height","300px");
                $(this).addClass("orangeColor").siblings().removeClass("orangeColor");
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
            $("#nav>li").removeClass("orangeColor");
            // $('.sub>li').animate({ display: 'block' }, 500)
        }
        else {
            // $(this)
        }
    })
   
    //-------------------PRODUCT CATEGORY-------------------
    let cateliLeng = $('.categoryList>li').length;
    let nowNum = 0;
    let maxNum = 0;
    //section의 크기
    let cateliWidth = $('.categoryList>li').width();
    let secWidth = $('.category').width();
    
    let num = Math.round(secWidth / cateliWidth);
    maxNum = cateliLeng - num;
    
    //원도우 resize시 넓이를 다시 측정.
    $(window).resize(function(){
        $('.categoryList>li').stop().css({"left": 0 + "px"});
        nowNum = 0; //초기화
        maxNum = 0;
        
        //section의 크기
        cateliWidth = $('.categoryList>li').width();
        secWidth = $('.category').width();    
        
        num = Math.round(secWidth / cateliWidth);
        maxNum = cateliLeng - num;
    }); 
    
    $('.catearrowRight').on("click",function(){
        if(nowNum < maxNum){
            nowNum++;
            $('.categoryList>li').stop().animate({"left": -cateliWidth*nowNum + "px"});
        }        
    });
    
    $('.catearrowLeft').on("click",function(){  
        if(nowNum == 0){ 
            return false;
        }
        else{
            nowNum--;
            $('.categoryList>li').stop().animate({"left": -cateliWidth*nowNum + "px"});
        }
    });
    






    //서브페이지1 ---------------------------------------------------------
    
    $('.conNav>li').on("click",function(){
        let idx = $(this).index();
        
        $('.conNav>li').eq(idx).addClass('conNav_active')
        .siblings("li").removeClass('conNav_active');

      });


    //서브페이지2 ---------------------------------------------------------
  
    //색상 토글
    $('.down_arr').on("click",function(){
        $('.color_list').toggleClass( 'cl_on' );
    })
    $('.color_list>li').on("click",function(){
        $('.selectColor').css("display","block");
    })


    //row>li(i번째)클릭하면 bike_slide_Wrap>li(i번째)가 activeImg클래스
    $('.row>li').on("click",function(){
        console.log($(this).index());  

        let idx = $(this).index();

        $('bike_slide_Wrap>li').eq(idx).addClass("activeImg")
        .siblings("li").removeClass("activeImg");

        $('.mySlide').eq(idx).css("display","block")
        .siblings('.mySlide').css("display","none");     
     
    })

    //.mySize 내사이즈찾아보기 모달창
    $(".mySize").click(function(){
        $('.modal').show();
        $(".grayLayer").show();
    });

    $('.grayLayer, .modal').click(function(){
        $('.grayLayer').hide();
        $('.modal').hide();
    });


    
});