/* -- 모바일메뉴버튼 ----------------------------------- */
$(function(){

    $("#open_btn").click(function(){

        $(".m_menu_wrap").animate({left:0},500);

    });

    $("#close_btn").click(function(){

        $(".m_menu_wrap").animate({left:-300},500);

    });
});


/* -- 팝업창 ----------------------------------- */
$(function(){

    $(".exit_btn").on("click", function(){

        $("#modal_box").fadeOut();

    });

});


/* -- 헤더 ----------------------------------- */
$(function(){


    // 요소 크기 구하기 p.227
    // .width() : width
    // .innerWidth() : width + padding
    // .outerWidth() : width + padding + border
    // .outerWidth(true) : width + padding + border + margin


    // 아래로 스크롤시 헤더 가려짐
    var lastScrollTop = 0;
    var delta = 150;  // 동작의 구현이 시작되는 위치
    var headerHeight = $("header").outerHeight();   // 영향을 받을 요소
    var didScroll;
    

    $(window).scroll(function(){
        didScroll = true;
    });
    // 스크롤 이벤트가 발생하면 didScroll변수에 true값을 저장한다.

    function hasScrolled() {

        var scrollTop = $(this).scrollTop();
        // 현재 스크롤의 위치를 저장

        if( Math.abs(lastScrollTop - scrollTop) <= delta )
        // 설정한 delta값보다 더 스크롤 되었는지 확인한다
        // Math.abs() : 값을 절댓값으로 반환함. 자바스크립트의 수학객체 p.95
        return;

        if( scrollTop > lastScrollTop && scrollTop > headerHeight ) {
            // 헤더의 높이보다 더 스크롤 되었는지 확인하고 스크롤의 방향이 위인지 아래인지 확인
            // && : and연산자. 피연산자 중 값이 하나라도 false가 존재하면 false. 둘다 true여야 true를 반환
            // 스크롤을 다운했을 때 실행

            $("header").removeClass("header-down").addClass("header-up");
            
            

        } 
        // else if () {

            
        // }
        
        else {
            // 스크롤을 올렸을 때 실행

            $("header").removeClass("header-up").addClass("header-down");

        }
        // console.log("scrollTop :" + scrollTop);
        // console.log("lastScrollTop :" + lastScrollTop);
        // console.log("headerHeight :" + headerHeight);


        

        lastScrollTop = scrollTop;
        // lastScrollTop에 현재 스크롤 위치를 지정한다.



    };


    // 300ms마다 스크롤 위치를 체크
    setInterval(function(){
        // 스크롤 이벤트가 발생하면 didScroll에 true가 저장되어 if문이 실행된다.
        // 스크롤 이벤트가 발생할 때마다 실행

        if(didScroll) {
            hasScrolled();  // 스크롤을 아래로 내렸는지 위로 올렸는지 판단해서 실행해주는 이벤트
            didScroll = false;
        }

    }, 300);








    
});