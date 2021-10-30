$(document).ready(function(){
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 200){
            $(".back-top").fadeIn()
        }
        else{
            $(".back-top").fadeOut() 
        }
    });
    $(".back-top").on("click",function(){
        $("html,body").animate({
            scrollTop:"0px",
        },1000);
    })
});