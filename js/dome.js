$(document).ready(function(){
    $(".nav_content").hover(
        function(){
            $(".nav_content ul").css({"display":"block"})
        },
        function(){
            $(".nav_content ul").css({"display":"none"})
        }
    );
    $(".video_li").hover(
        function(){
            $(this).css({"background":"white"});
            $(this).find('img').css({"-webkit-transform":"scale(1.01,1.01)","transform":"scale(1.01,1.01)"});
            $(this).find(".video_line").css({"color":"rgb(255,99,41)"});
            $(this).find(".circle").css({"background":"url(imgs/orange.png) no-repeat"});
        },
        function(){
            $(this).css({"background":"rgb(244,244,244)"});
            $(this).find(".video_line").css({"color":"black"});
            $(this).find(".circle").css({"background":"url(imgs/grey.png) no-repeat"});
            $(this).find('img').css({"-webkit-transform":"scale(1,1)","transform":"scale(1,1)"});
        }

    )



})