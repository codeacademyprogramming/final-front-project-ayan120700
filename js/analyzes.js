$(document).ready(function(){

        $('.circle').css('right','-400px')
        $('.circle').css('transition','2s')


    $('.burger-button').click(function(){
        if($('.burger-button>i').hasClass('fa-bars')){
        setTimeout(function(){
            $('.burger-menu').css('border-radius','0')
            $('.burger-menu').css('transition','1s')
        },0)
        $('.burger-menu').css('right','0px')
        $('.burger-menu').css('transition','1s')
        $('.fa-bars').addClass('fa-times fa')
        $('.fa-times').removeClass('fa-bars fas')
        //changed colors
        $('.burger-button').css('background-color','white')
        $('.fa-times').css('color','#159ee3')
        $('.call').css('color','white')
        $('#call-number').css('color','white')
        $('.fa-phone-volume').css('color','white')
    }else{
        setTimeout(function(){
            $('.burger-menu').css('border-radius','100%')
            $('.burger-menu').css('transition','1s')
        },0)
        $('.burger-menu').css('right','-650px')
        $('.burger-menu').css('transition','1s')
        $('.fa-times').addClass('fa-bars fas')
        $('.fa-bars').removeClass('fa-times fa')
        //changed colors
        $('.burger-button').css('background-color','#159ee3')
        $('.fa-bars').css('color','white')
        $('.call').css('color','#159ee3')
        $('#call-number').css('color','#159ee3')
        $('.fa-phone-volume').css('color','#159ee3')
    }
    })



    $('.chat-click').mouseenter(function(){
        $('.message').css('opacity','1')
        $('.message').css('bottom','130px')
        $('.message').css('transition','.5s')
        $('.whatsapp').css('opacity','1')
        $('.whatsapp').css('bottom','200px')
        $('.whatsapp').css('transition','.5s')
        $('.messenger').css('opacity','1')
        $('.messenger').css('bottom','270px')
        $('.messenger').css('transition','.5s')
    });
    $('.chat-click').mouseleave(function(){
        $('.connect').css('bottom','50px')
        $('.connect').css('transition','.5s')
        $('.connect').css('opacity','0')
    });
    $('.connect').mouseenter(function(){
        $('.message').css('opacity','1')
        $('.message').css('bottom','130px')
        $('.message').css('transition','.5s')
        $('.whatsapp').css('opacity','1')
        $('.whatsapp').css('bottom','200px')
        $('.whatsapp').css('transition','.5s')
        $('.messenger').css('opacity','1')
        $('.messenger').css('bottom','270px')
        $('.messenger').css('transition','.5s')
    });
    $('.connect').mouseleave(function(){
        $('.connect').css('bottom','50px')
        $('.connect').css('transition','.5s')
        $('.connect').css('opacity','0')
    });
    $('.payment').click(function(){
        window.location.href = "payment.html"
    })
})