$(document).ready(function() {

$('.home-pic').css('width','65%')
$('.home-pic').css('transition','1s')
$('.blue').css('width','70%')
$('.blue').css('transition','1s')
$('.blue-2').css('width','75%')
$('.blue-2').css('transition','1s')

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
    //color
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
    //color
    // $('.burger-button').css('background-color','#159ee3')
    //     $('.fa-bars').css('color','white')
    //     $('.call').css('color','#159ee3')
    //     $('#call-number').css('color','#159ee3')
    //     $('.fa-phone-volume').css('color','#159ee3')
}
})
setTimeout(function(){
    $('.windows>div:nth-child(1)').css('opacity','1')
    $('.windows>div:nth-child(1)').css('transition','1s')
    $('.windows>div:nth-child(1)').css('margin-top','0')
},500)
setTimeout(function(){
    $('.windows>div:nth-child(2)').css('opacity','1')
    $('.windows>div:nth-child(2)').css('transition','1s')
    $('.windows>div:nth-child(2)').css('margin-top','0')
},700)
setTimeout(function(){
    $('.windows>div:nth-child(3)').css('opacity','1')
    $('.windows>div:nth-child(3)').css('transition','1s')
    $('.windows>div:nth-child(3)').css('margin-top','0')
},900)
setTimeout(function(){
    $('.windows>div:nth-child(4)').css('opacity','1')
    $('.windows>div:nth-child(4)').css('transition','1s')
    $('.windows>div:nth-child(4)').css('margin-top','0')
},1100)
    let k = 1
setInterval(function(){
for (let a = 0; a < $('.pic').length; a++) {
    $('.pic').eq(a).removeClass('pic-active')
    $('.circles>div').eq(a).removeClass('circle-active')
}
$('.pic').eq(k).addClass('pic-active')
$('.circles>div').eq(k).addClass('circle-active')
k++;
if(k == $('.pic').length){
    k = 0
}
},6000)

for (let i = 0; i < $('.circles>div').length; i++) {
    $('.circles>div').eq(i).click(function(){
        for (let k = 0; k < $('.circles>div').length; k++) {
            $('.circles>div').eq(k).removeClass('circle-active')
            $('.pic').eq(k).removeClass('pic-active')
        }
        $('.circles>div').eq(i).addClass('circle-active');
        $('.pic').eq(i).addClass('pic-active');
    })
}
setTimeout(function(){
    $('.pic-text').text('EVİNİZDƏ MÜAYİNƏ XİDMƏTİ')
    $('.pic-text').css('margin-top','270px')
    $('.pic-text').css('opacity','1')
    $('.pic-text').css('transition','2s')
    $('.more').css('margin-top','50px')
    $('.more').css('opacity','1')
    $('.pic-name').html(' <h4 class="line"></h4> LABARATOR XİDMƏTLƏR')
    $('.pic-name').css('right','250px')
    $('.pic-name').css('opacity','1')
    $('.pic-name').css('transition','1s')
    setTimeout(function(){
        $('.more').css('margin-top','0')
        $('.more').css('opacity','0')
        $('.pic-text').css('margin-top','200px')
        $('.pic-text').css('opacity','0')
        $('.pic-text').css('transition','1s')
        $('.pic-name').css('right','280px')
        $('.pic-name').css('opacity','0')
        $('.pic-name').css('transition','1s')
    },5000)
    },0)
    setTimeout(function(){
    $('.pic-text').text('LABARATOR XİDMƏTLƏR')
    $('.pic-text').css('margin-top','270px')
    $('.pic-text').css('opacity','1')
    $('.pic-text').css('transition','2s')
    $('.more').css('margin-top','50px')
    $('.more').css('opacity','1')
    $('.pic-name').html(' <h4 class="line"></h4> POLIKLINIK XİDMƏTLƏR')
    $('.pic-name').css('right','250px')
    $('.pic-name').css('opacity','1')
    $('.pic-name').css('transition','1s')
    setTimeout(function(){
        $('.more').css('margin-top','0')
        $('.more').css('opacity','0')
        $('.pic-text').css('margin-top','200px')
        $('.pic-text').css('opacity','0')
        $('.pic-text').css('transition','1s')
        $('.pic-name').css('right','280px')
        $('.pic-name').css('opacity','0')
        $('.pic-name').css('transition','1s')
    },5000)
    },6000)
    
    setTimeout(function(){
    $('.pic-text').text('POLIKLINIK XİDMƏTLƏR')
    $('.pic-text').css('margin-top','270px')
    $('.pic-text').css('opacity','1')
    $('.pic-text').css('transition','1s')
    $('.more').css('margin-top','50px')
    $('.more').css('opacity','1')
    $('.pic-name').html(' <h4 class="line"></h4> AİLƏNİZİN CHECK-UP MÜAYİNƏSİ')
    $('.pic-name').css('right','250px')
    $('.pic-name').css('opacity','1')
    $('.pic-name').css('transition','1s')
    setTimeout(function(){
        $('.more').css('margin-top','0')
        $('.more').css('opacity','0')
        $('.pic-text').css('margin-top','200px')
        $('.pic-text').css('opacity','0')
        $('.pic-text').css('transition','1s')
        $('.pic-name').css('right','280px')
        $('.pic-name').css('opacity','0')
        $('.pic-name').css('transition','1s')
    },5000)
    },12000)
    
    setTimeout(function(){
    $('.pic-text').text('AİLƏNİZİN CHECK-UP MÜAYİNƏSİ')
    $('.pic-text').css('margin-top','270px')
    $('.pic-text').css('opacity','1')
    $('.pic-text').css('transition','1s')
    $('.more').css('margin-top','50px')
    $('.more').css('opacity','1')
    $('.pic-name').html(' <h4 class="line"></h4> NİKAH ÖNCƏSİ MÜAYİNƏLƏR')
    $('.pic-name').css('right','250px')
    $('.pic-name').css('opacity','1')
    $('.pic-name').css('transition','1s')
    setTimeout(function(){
        $('.more').css('margin-top','0')
        $('.more').css('opacity','0')
        $('.pic-text').css('margin-top','200px')
        $('.pic-text').css('opacity','0')
        $('.pic-text').css('transition','1s')
        $('.pic-name').css('right','280px')
        $('.pic-name').css('opacity','0')
        $('.pic-name').css('transition','1s')
    },5000)
    },18000)
    
    setTimeout(function(){
    $('.pic-text').text('NİKAH ÖNCƏSİ MÜAYİNƏLƏR')
    $('.pic-text').css('margin-top','270px')
    $('.pic-text').css('opacity','1')
    $('.pic-text').css('transition','1s')
    $('.more').css('margin-top','50px')
    $('.more').css('opacity','1')
    $('.pic-name').html(' <h4 class="line"></h4> EVİNİZDƏ MÜAYİNƏ XİDMƏTİ')
    $('.pic-name').css('right','250px')
    $('.pic-name').css('opacity','1')
    $('.pic-name').css('transition','1s')
    setTimeout(function(){
        $('.more').css('margin-top','0')
        $('.more').css('opacity','0')
        $('.pic-text').css('margin-top','200px')
        $('.pic-text').css('opacity','0')
        $('.pic-text').css('transition','1s')
        $('.pic-name').css('right','280px')
        $('.pic-name').css('opacity','0')
        $('.pic-name').css('transition','1s')
    },5000);
    },24000);
setInterval(function(){
    setTimeout(function(){
        $('.pic-text').text('EVİNİZDƏ MÜAYİNƏ XİDMƏTİ')
        $('.pic-text').css('margin-top','270px')
        $('.pic-text').css('opacity','1')
        $('.pic-text').css('transition','2s')
        $('.more').css('margin-top','50px')
        $('.more').css('opacity','1')
        $('.pic-name').html(' <h4 class="line"></h4> LABARATOR XİDMƏTLƏR')
        $('.pic-name').css('right','250px')
        $('.pic-name').css('opacity','1')
        $('.pic-name').css('transition','1s')
        setTimeout(function(){
            $('.more').css('margin-top','0')
            $('.more').css('opacity','0')
            $('.pic-text').css('margin-top','200px')
            $('.pic-text').css('opacity','0')
            $('.pic-text').css('transition','1s')
            $('.pic-name').css('right','280px')
            $('.pic-name').css('opacity','0')
            $('.pic-name').css('transition','1s')
        },5000)
        },0)
        setTimeout(function(){
        $('.pic-text').text('LABARATOR XİDMƏTLƏR')
        $('.pic-text').css('margin-top','270px')
        $('.pic-text').css('opacity','1')
        $('.pic-text').css('transition','2s')
        $('.more').css('margin-top','50px')
        $('.more').css('opacity','1')
        $('.pic-name').html(' <h4 class="line"></h4> POLIKLINIK XİDMƏTLƏR')
        $('.pic-name').css('right','250px')
        $('.pic-name').css('opacity','1')
        $('.pic-name').css('transition','1s')
        setTimeout(function(){
            $('.more').css('margin-top','0')
            $('.more').css('opacity','0')
            $('.pic-text').css('margin-top','200px')
            $('.pic-text').css('opacity','0')
            $('.pic-text').css('transition','1s')
            $('.pic-name').css('right','280px')
            $('.pic-name').css('opacity','0')
            $('.pic-name').css('transition','1s')
        },5000)
        },6000)
        
        setTimeout(function(){
        $('.pic-text').text('POLIKLINIK XİDMƏTLƏR')
        $('.pic-text').css('margin-top','270px')
        $('.pic-text').css('opacity','1')
        $('.pic-text').css('transition','1s')
        $('.more').css('margin-top','50px')
        $('.more').css('opacity','1')
        $('.pic-name').html(' <h4 class="line"></h4> AİLƏNİZİN CHECK-UP MÜAYİNƏSİ')
        $('.pic-name').css('right','250px')
        $('.pic-name').css('opacity','1')
        $('.pic-name').css('transition','1s')
        setTimeout(function(){
            $('.more').css('margin-top','0')
            $('.more').css('opacity','0')
            $('.pic-text').css('margin-top','200px')
            $('.pic-text').css('opacity','0')
            $('.pic-text').css('transition','1s')
            $('.pic-name').css('right','280px')
            $('.pic-name').css('opacity','0')
            $('.pic-name').css('transition','1s')
        },5000)
        },12000)
        
        setTimeout(function(){
        $('.pic-text').text('AİLƏNİZİN CHECK-UP MÜAYİNƏSİ')
        $('.pic-text').css('margin-top','270px')
        $('.pic-text').css('opacity','1')
        $('.pic-text').css('transition','1s')
        $('.more').css('margin-top','50px')
        $('.more').css('opacity','1')
        $('.pic-name').html(' <h4 class="line"></h4> NİKAH ÖNCƏSİ MÜAYİNƏLƏR')
        $('.pic-name').css('right','250px')
        $('.pic-name').css('opacity','1')
        $('.pic-name').css('transition','1s')
        setTimeout(function(){
            $('.more').css('margin-top','0')
            $('.more').css('opacity','0')
            $('.pic-text').css('margin-top','200px')
            $('.pic-text').css('opacity','0')
            $('.pic-text').css('transition','1s')
            $('.pic-name').css('right','280px')
            $('.pic-name').css('opacity','0')
            $('.pic-name').css('transition','1s')
        },5000)
        },18000)
        
        setTimeout(function(){
        $('.pic-text').text('NİKAH ÖNCƏSİ MÜAYİNƏLƏR')
        $('.pic-text').css('margin-top','270px')
        $('.pic-text').css('opacity','1')
        $('.pic-text').css('transition','1s')
        $('.more').css('margin-top','50px')
        $('.more').css('opacity','1')
        $('.pic-name').html(' <h4 class="line"></h4> EVİNİZDƏ MÜAYİNƏ XİDMƏTİ')
        $('.pic-name').css('right','250px')
        $('.pic-name').css('opacity','1')
        $('.pic-name').css('transition','1s')
        setTimeout(function(){
            $('.more').css('margin-top','0')
            $('.more').css('opacity','0')
            $('.pic-text').css('margin-top','200px')
            $('.pic-text').css('opacity','0')
            $('.pic-text').css('transition','1s')
            $('.pic-name').css('right','280px')
            $('.pic-name').css('opacity','0')
            $('.pic-name').css('transition','1s')
        },5000);
        },24000);
},30000);

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
$('.windows>div').mouseenter(function(){
    $(this).css('margin-top','-10px')
    $(this).css('transition','.5s')
})
$('.windows>div').mouseleave(function(){
    $(this).css('margin-top','0px')
    $(this).css('transition','.5s')
})

$('.windows>div:nth-child(1),.b-menu-text:nth-child(1)').click(function(){
    window.location.href = 'analyzes.html'
})
$('.windows>div:nth-child(3),.b-menu-text:nth-child(3)').click(function(){
    window.location.href = 'branches.html'
})


});