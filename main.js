ScrollReveal().reveal('.title', { delay: 300 });
ScrollReveal().reveal('.image-title', { delay: 550 });
ScrollReveal().reveal('.quienes-somos', { delay: 300 });

function onMobile () {
    var w = window.innerWidth;
    
    if (w < 666) {
        console.log('mobile')
        $('nav a').css('font-size', '0.8rem')
        
        $('.image-title').css('width', '20rem')
        $('.title-bg span').css('font-size', '2.5rem')
        $('.title-bg span').css('transform', 'translateY(0rem)')
        $('.image-title').css('transform', 'translateY(2.7rem)')
        $('.title-bg').css('height', '25rem')
    } else {
        console.log('pc')
        $('nav a').css('font-size', '1.2rem')

        $('.image-title').css('width', '31rem')
        $('.title-bg span').css('font-size', '4.5rem')
        $('.title-bg span').css('transform', 'translateY(3rem)')
        $('.image-title').css('transform', 'translateY(5.7rem)')
        $('.title-bg').css('height', '35rem')

    }

}

window.onresize = onMobile
onMobile()