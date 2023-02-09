ScrollReveal().reveal('.title', { delay: 300 });
ScrollReveal().reveal('.image-title', { delay: 350 });
ScrollReveal().reveal('.qs-show', { interval: 200 });
ScrollReveal().reveal('.ns-section', { delay: 100, interval: 5 })

var menuOpen = false
var menuMode = 'hor'

function onMobile () {
    
    var w = window.innerWidth;

    //title
    if (w < 665) {
        $('.image-title').css('width', '20rem')
        $('.title-bg span').css('font-size', '2.5rem')
        $('.title-bg span').css('transform', 'translateY(0rem)')
        $('.image-title').css('transform', 'translateY(1.7rem)')
        $('.title-bg').css('height', '25rem')

        menuMode = 'ver'
        menuOpen = false
        $('#navbar-horizontal').addClass('d-none');
        $('#navbar-vertical').removeClass('d-none');

        closeMenu()
        
    } else {        
        $('.image-title').css('width', '31rem')
        $('.title-bg span').css('font-size', '4.5rem')
        $('.title-bg span').css('transform', 'translateY(3rem)')
        $('.image-title').css('transform', 'translateY(5.7rem)')
        $('.title-bg').css('height', '38rem')

        menuMode = 'hor'
        menuOpen = false
        $('#navbar-horizontal').removeClass('d-none');
        $('#navbar-vertical').addClass('d-none');

        closeMenu()
    }

    //navbar
    if (w < 818) {
        
        if (menuMode == 'ver') {
            $('nav a').css('font-size', '1.3rem')
            $('.menu-ham').css({height: 30, width: 30}).removeClass('mt-3 ms-3').addClass('mt-3 ms-3')
            $('.menu-cross').css({height: 60, width: 60, top: '5rem'})
        } else {
            $('nav a').css('font-size', '1.1rem')
            $('.menu-ham').css({height: 30, width: 30}).removeClass('mt-3 ms-3').addClass('mt-3 ms-3')
    
            $('.menu-cross').css({height: 30, width: 30, top: '6rem'})
            $('.nav-link').removeClass('px-5').addClass('px-3')
    
        }

    } else {
        
        if (menuMode == 'ver') {
            $('nav a').css('font-size', '1.2rem')
            $('.menu-ham').css({height: 50, width: 50}).removeClass('mt-3 ms-3').addClass('mt-3 ms-3')
            $('.menu-cross').css({height: 60, width: 60, top: '5rem'})
        } else {
            $('nav a').css('font-size', '1rem')
            $('.menu-ham').css({height: 50, width: 50}).removeClass('mt-3 ms-3').addClass('mt-3 ms-3')
    
            $('.menu-cross').css({height: 45, width: 45, top: '6rem'})
            $('.nav-link').removeClass('px-2').addClass('px-5')
    
            $('#navbar-horizontal div').addClass('py-1')
        }

    }

    if (w < 1400) {
        $('.c-section-l').css('width', '20rem');
    } else {
        $('.c-section-l').css('width', '34rem');
    }

    if (menuMode == 'hor') {
        if (w < 1085) {
            $('nav a').css('font-size', '0.8rem')
        } else {
            $('nav a').css('font-size', '1.3rem')
        }
    }

}

window.onresize = onMobile

function menuAction () {
    console.log(menuOpen)
    if (!menuOpen) {
        if (menuMode == 'hor') {
            $('#navbar-horizontal').css('animation', 'navbar-hor-show 0.2s ease-in-out').css('top', '0px')
        } else {
            $('#navbar-vertical').css('animation', 'navbar-ver-show 0.2s ease-in-out').css('left', '0px')
        }
        $('.menu-ham').addClass('d-none')
        $('.menu-cross').removeClass('d-none')
        menuOpen = true
    } else {
        closeMenu()
    }
}

function closeMenu() {
    if (!menuOpen) return
    if (menuMode == 'hor') {
        $('#navbar-horizontal').css('animation', 'navbar-hor-hide 0.2s ease-in-out').css('top', '-100px')
    } else {
        $('#navbar-vertical').css('animation', 'navbar-ver-hide 0.2s ease-in-out').css('left', '-20rem')
    }

    $('.menu-ham').removeClass('d-none')
    $('.menu-cross').addClass('d-none')
    
    menuOpen = false
}

window.onscroll = closeMenu

$('.menu-ico').on('click',function () {
    menuAction()
    }
);

onMobile()