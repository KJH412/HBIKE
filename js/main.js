window.onload=function(){
    /***** 햄버거 ******/

    //변수선언
    const nav = document.querySelector("nav");
    const ham = document.querySelector(".hamBtn>a");

    function toggleMenu(){
        //1.(조건)클래스가있는지 체크 후 클래스추가.
        if(ham.classList.contains("on")){
            ham.classList.remove("on");
            nav.classList.remove("activeNav");
        }else{
        //클래스 추가
        ham.classList.add("on");
        nav.classList.add("activeNav");
        }
    }
    ham.addEventListener("click",toggleMenu);   

    /* upBtn 작동안됨. */   
    let scrollTopBtn = document.querySelector('.upBtn');

    scrollTopBtn.addEventListener('click',function(e){
        e.preventDefault();
        window.scrollTo({top: 0, behavior:'smooth'});
    });   

   
}
