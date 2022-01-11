$(document).ready(function(){

    setInterval(function(){

        $('#mainBanner ul').animate(
            {
            "marginLeft" : "-="+1200
            },
            400,
            function(){
                $("#mainBanner li").eq(0).appendTo("mainBanner ul");
                //첫번째 li를 막내자리로 옮겨라
                $("mainBanner ul").css("margin-left",0);

    
            }); // animate

    }, 3000); //3초마다 주기적으로 앞의 함수 실행



}); // ready
