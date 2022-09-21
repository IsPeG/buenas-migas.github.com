ScrollReveal().reveal('.title', { delay: 300 });
ScrollReveal().reveal('.image-title', { delay: 350 });
ScrollReveal().reveal('.quienes-somos', { delay: 400 });

function onMobile () {
    var w = window.innerWidth;

    //navbar
    if (w < 544) {
        $('nav a').css('font-size', '0.9rem')
        $('.menu-ham').css({height: 30, width: 30}).removeClass('mt-3 ms-3').addClass('mt-3 ms-3')
    } else {
        $('nav a').css('font-size', '1.2rem')
        $('.menu-ham').css({height: 50, width: 50}).removeClass('mt-3 ms-3').addClass('mt-3 ms-3')
    }
    
    //title
    if (w < 666) {
        $('.image-title').css('width', '20rem')
        $('.title-bg span').css('font-size', '2.5rem')
        $('.title-bg span').css('transform', 'translateY(0rem)')
        $('.image-title').css('transform', 'translateY(1.7rem)')
        $('.title-bg').css('height', '25rem')
    } else {        
        $('.image-title').css('width', '31rem')
        $('.title-bg span').css('font-size', '4.5rem')
        $('.title-bg span').css('transform', 'translateY(3rem)')
        $('.image-title').css('transform', 'translateY(5.7rem)')
        $('.title-bg').css('height', '38rem')

    }

    //quienes somos image 
    if (w < 900) {
        $('.qs-image-container-hor').addClass('d-none')
        $('.qs-image-container-ver').removeClass('d-none')
    } else {
        $('.qs-image-container-hor').removeClass('d-none')
        $('.qs-image-container-ver').addClass('d-none')
    }

}

window.onresize = onMobile

onMobile()

var menuOpen = true

function menuAction () {
    console.log(menuOpen)
    if (!menuOpen) {
        $('#navbar').css('animation', 'navbar-show 0.2s ease-in-out').css('top', '0px')
        $('.menu-ham').addClass('d-none')
        $('.menu-cross').removeClass('d-none')
        menuOpen = true
    } else {
        closeMenu()
    }
}

function closeMenu() {
    $('#navbar').css('animation', 'navbar-hide 0.2s ease-in-out').css('top', '-100px')
    $('.menu-ham').removeClass('d-none')
    $('.menu-cross').addClass('d-none')
    menuOpen = false
}

window.onscroll = closeMenu

$('.menu-ico').on('click',function () {
    menuAction()
    }
);
