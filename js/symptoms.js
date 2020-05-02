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

$('.office-img:nth-child(2)').click(function(){
    window.location.href = "n-branch.html"
})
$('.left-windows>div:nth-child(1)').click(function(){
    window.location.href = 'analyzes.html'
})
$('.left-windows>div:nth-child(3)').click(function(){
    window.location.href = 'branches.html'
})
$('.left-windows>div:nth-child(4)').click(function(){
    window.location.href = 'symptoms.html'
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
//symptoms
//Front
$('#head-area').hover(function(){
    $('.head').show();
},function(){
    $('.head').hide();
});

$('#chest-area').hover(function(){
    $('.chest').show();
},function(){
    $('.chest').hide()
});

$('#left-arm').hover(function(){
    $('.arms').show();
},function(){
    $('.arms').hide()
})
$('#right-arm').hover(function(){
    $('.arms').show();
},function(){
    $('.arms').hide()
})

$('#stomach-area').hover(function(){
    $('.stomach').show();
},function(){
    $('.stomach').hide()
})

$('#hip-area').hover(function(){
    $('.hip').show();
},function(){
    $('.hip').hide();
})

$('#left-leg').hover(function(){
    $('.legs').show();
},function(){
    $('.legs').hide();
})
$('#right-leg').hover(function(){
    $('.legs').show();
},function(){
    $('.legs').hide();
})

//back
$('#h-back').hover(function(){
    $('.head-back').show();
},function(){
    $('.head-back').hide();
})

$('#chest-back').hover(function(){
    $('.chest-back').show();
},function(){
    $('.chest-back').hide();
})

$('#left-a-back').hover(function(){
    $('.arms-back').show();
},function(){
    $('.arms-back').hide();
})

$('#right-a-back').hover(function(){
    $('.arms-back').show();
},function(){
    $('.arms-back').hide();
})

$('#hip-back').hover(function(){
    $('.hip-back').show();
},function(){
    $('.hip-back').hide();
})

$('#left-l-back').hover(function(){
    $('.legs-back').show();
},function(){
    $('.legs-back').hide();
})

$('#right-l-back').hover(function(){
    $('.legs-back').show();
},function(){
    $('.legs-back').hide();
})

$('.part,.ilness-button').click(function(){
    $('.symptoms-name>h5').css('display','none')
    $('.parts-of-body').css('display','none')
    $('.ilness').css('display','block')
    $('.ilness-button').css('display','none')
})
$('.button').click(function(){
    $('.symptoms-name>h5').css('display','block')
    $('.parts-of-body').css('display','block')
    $('.ilness').css('display','none')
    $('.ilness-button').css('display','block')
})
$('.kind-of-ilness>div>').click(function(){
    $('.ilness').css('display','none')
    $('.headache').css('display','block')
    $('.symptoms-name>h4').text('Məqalələr')
    $('.back').css('display','block')
})
$('.back').click(function(){
    $('.headache').css('display','none')
    $(this).css('display','none')
    $('.ilness').css('display','block')
    $('.symptoms-name>h4').text('Simptomlar')

})
for (let a = 0; a < $('u').length; a++) {
    
    $('u').eq(a).click(function(){
        $('.cancel').eq(a).removeClass('c-active')
        $('.cancel').eq(a).css('color','#159ee3')
        $('.cancel').eq(a).css('font-size','15px')
        $('.cancel').eq(a).css('margin-left','5px')
        $('u').eq(a).css('margin-right','0')
        $('u').eq(a).css('color','black')
    })
}
for (let b = 0; b < $('.cancel').length; b++) {
    $('.cancel').eq(b).click(function(){
        $('.cancel').eq(b).addClass('c-active')
        $('u').eq(b).css('margin-right','20px')
        $('u').eq(b).css('color','grey')
    })
}

})