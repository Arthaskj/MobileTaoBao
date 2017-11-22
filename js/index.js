$(function(){

    ulLength();                 //自动获取ul的长度
    function ulLength(){
        var num = $(".content1 > .chose > .choseBanner > ul>li").length;
        var longa = parseInt($(".content1 > .chose > .choseBanner > ul>li").css("width"))  ;
        $(".content1 > .chose > .choseBanner > ul").css("width",num*(longa+longa*0.08)+"px");
        // console.log($(".content1 > .chose > .choseBanner > ul").css("width"),longa);
    }





})