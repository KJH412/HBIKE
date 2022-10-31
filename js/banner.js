$(function () {  
    /* 메인배너  .banner*/
    let showBanner = 0;

    let moveX = 0;

    let cloneObj = $(".banner>li").eq(0).clone();
    $(".banner").append(cloneObj);

    let liWidth = $(".banner>li").eq(0).width();
        console.log(liWidth);

    let count = $(".banner>li").length;
    console.log(count + "  :  li개수"); //4 찍힘

    let timer;

    //리사이즈 이벤트
    let winWidth = $(window).width(); //jquery.js에 한번 선언했음.

    function resizeBanner(){
        winWidth = $(window).width();
        console.log(winWidth);
 
        liWidth = winWidth;
        showBanner = 0;

        $('.banner').css("margin-left", 0)
    }

    $(window).on("resize", function () {
        resizeBanner();
    })

    //

    function moveSlide(){
        // moveX만큼 배너가 왼쪽으로 이동한다.
        moveX = -liWidth * showBanner;
            console.log(moveX + "  : moveX");  
        $(".banner").stop().animate({
            "margin-left" : moveX + "px"
        },2000);

        if(showBanner === 3){
            $(".pager>span").eq(0).addClass("pager_active")
            .siblings("span").removeClass("pager_active");
            
        } else {
            // 선택한 배너를 보기위해 pager버튼을 클릭하면 선택한 pager>span만 active클래스가 추가됨
            $(".pager>span").eq(showBanner).addClass("pager_active") 
            .siblings("span").removeClass("pager_active");
        }
        console.log("moveSlide()"); 
    }

    $(".arrowRight").on("click",function(){
        //showBanner값이 3번째가되면 다음 페이지가 1이 되면서 무한슬라이드 되어야 하기때문에
        //복사본이 나오면 그 뒤에 다시 슬라이드가 반복되도록 showBanner=0으로 만듦
        if(showBanner === count-1){ 
            showBanner = 0;
            $(".banner").css("margin-left", 0);
        }
        showBanner++;
        moveSlide(); 

        console.log("오른쪽클릭");
    });

    $(".arrowLeft").on("click",function(){

        if(showBanner === 0){
            showBanner = count-1;
            $(".banner").css("margin-left", -(count-1)*liWidth);
        }
        showBanner--;
        moveSlide();
        console.log("왼쪽클릭");
    });

    $(".pager>span").on("click",function(){
        // $(this) = .pager>span
        // $(this).index() ==> .pager>span 중에 몇번째 span를 선택했는지 console창에 출력
        console.log($(this).index());

        showBanner = $(this).index();
        moveSlide();
    });

    timer = setInterval( ()=>{
        $(".arrowRight").trigger("click");
            console.log("setInteval");          
    }, 3000)

    //배너에 마우스를 올리면 배너가 멈춘다
    //배너에서 마우스가 벗어나면 자동슬라이드 실행
    $("#mainBanner").on({
        "mouseover":function(){
            clearInterval(timer)
        },
        "mouseout":function(){
            timer = setInterval(()=>{
                $(".arrowRight").trigger("click");
            }, 3000)
        }
    })
});