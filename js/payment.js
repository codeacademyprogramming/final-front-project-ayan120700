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


    //hover
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
    
    // Payment inputs
    $('input:nth-of-type(5)').mouseenter(function(){
        $(this).attr('value','+994')
    })
    $('input:nth-of-type(5)').mouseleave(function(){
        $(this).attr('value','')
    })

    $('.payment-button').click(function(){
        if($('input').val() == 0){
            $('input').css('border','1px solid red')
        }else{
        window.location.href = "payment.html"
        }
    })
    let max = 500
    $('input:nth-of-type(6)').keyup(function(e){
        if($('input:nth-of-type(6)').val() > max){
            $('input:nth-of-type(6)').val('500')
            $('.amount').addClass('amount-active')
        }
            $('.amount').addClass('amount-active')
            $('.amount').text($('input:nth-of-type(6)').val() + " " + "AZN")
    })
    
    //burger-menu
$('.windows>div:nth-child(1),.b-menu-text:nth-child(1)').click(function(){
    window.location.href = 'analyzes.html'
})
$('.windows>div:nth-child(3),.b-menu-text:nth-child(3)').click(function(){
    window.location.href = 'branches.html'
})
$('.windows>div:nth-child(4),.b-menu-text:nth-child(4)').click(function(){
    window.location.href = 'symptoms.html'
})

// Left-nav
$('.left-windows>div:nth-child(1)').click(function(){
    window.location.href = 'analyzes.html'
})
$('.left-windows>div:nth-child(3)').click(function(){
    window.location.href = 'branches.html'
})
$('.left-windows>div:nth-child(4)').click(function(){
    window.location.href = 'symptoms.html'
})
$('.b-menu-text:nth-child(5)').click(function(){
    window.location.href = 'about-us.html'
})
$('.b-menu-text:nth-child(7)').click(function(){
    window.location.href = 'about-us.html'

})
$('.b-menu-text:nth-child(8)').click(function(){
    window.location.href = 'about-us.html'
})
$('.b-menu-text:nth-child(9)').click(function(){
    window.location.href = 'loyality-cards.html'
})
$('.b-menu-text:nth-child(10)').click(function(){
    window.location.href = 'clinic.html'
})

$('.b-menu-text:nth-child(11)').click(function(){
    window.location.href = 'check-up.html'
})
$('.b-menu-text:nth-child(12)').click(function(){
    window.location.href = 'doctors.html'
})
})