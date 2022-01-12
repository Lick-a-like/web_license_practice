// 유형 1
$(document).ready(function(){
    var objTop = $("#topBanner ul")

    setInterval(function(){
        objTop.animate({
            "marginTop" : "-="+350
        }, 400, function(){
                objTop.find('li').eq(0).appendTo(objTop);
                objTop.css({"marginTop" : 0});
            });
    }, 3000);
});

// 유형 2
$(document).ready(function(){
    var objLeft = $("#leftBanner ul")

    setInterval(function(){
        objLeft.animate({
            "marginLeft" : "-="+1200
        }, 400, function(){
                objLeft.find('li').eq(0).appendTo(objLeft);
                objLeft.css({"marginLeft" : 0});
            });
    }, 3000);
});

// 유형 3 ㅠㅠ
$(document).ready(function(){
    var objRight = $("#rightBanner ul")

    setInterval(function(){
        objRight.animate({
            "marginRight" : "+="-1200
        }, 400, function(){
                objRight.find('li').eq(-1).uppendTo(objRight);
                objRight.css({"marginLeft" : 0});
            });
    }, 3000);
});

// 유형 4
$(document).ready(function(){
    var objFade = $("#fadeBanner ul")
    var count = 0;
    
    setInterval(function(){
        count++;
        count = count % 3;
        objFade.find('li').eq(count).addClass('on').siblings().removeClass('on');
    }, 3000);
});