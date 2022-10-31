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
            
            $(this).parent().toggleClass("color").siblings().removeClass("color");
        }
    });


    //PC 네비게이션 메뉴

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


    //-------------------PRODUCT CATEGORY-------------------
   
    // let ulcate =  $('.categoryList') ul
    let cateliWidh = $('.categoryList>li').width();
    let cateliLeng = $('.categoryList>li').length;
    let nowNum = 0;
    
    //오른쪽 // 리사이즈 사이즈별로 nowNum체크
    $('.catearrowRight').on("click",function(){  
        console.log("카테고리 오른쪽");
        if(winWidth>1270){
            if(nowNum < 2){
                nowNum++;
                $('.categoryList>li').stop().animate({"left": -cateliWidh*nowNum + "px"});
            }else{
                console.log(nowNum);
                return false;
            }            
        }else if(winWidth<=1270){
            if(nowNum < 3){
                nowNum++;
                $('.categoryList>li').stop().animate({"left": -cateliWidh*nowNum + "px"});
            }else{
                return false;
            }  
        }else if(winWidth<500){
            if(nowNum < 4){
                nowNum++;
                $('.categoryList>li').stop().animate({"left": -cateliWidh*nowNum + "px"});
            }else{
                return false;
            }  
        }
    })
    // 왼쪽
    $('.catearrowLeft').on("click",function(){  
        if(nowNum == 0){ 
            return false;
        }
        else{
            nowNum--;
            $('.categoryList>li').stop().animate({"left": -cateliWidh*nowNum + "px"});
        }
    })

    
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