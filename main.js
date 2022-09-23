ScrollReveal().reveal('.title', { delay: 300 });
ScrollReveal().reveal('.image-title', { delay: 350 });
ScrollReveal().reveal('.qs-show', { interval: 200 });
ScrollReveal().reveal('.ns-section', { delay: 100, interval: 5 })

function onMobile () {
    
    var w = window.innerWidth;

    //navbar
    if (w < 818) {
        $('nav a').css('font-size', '0.9rem')
        $('.menu-ham').css({height: 30, width: 30}).removeClass('mt-3 ms-3').addClass('mt-3 ms-3')

        $('.menu-cross').css({height: 30, width: 30, top: '5rem'})
        $('.nav-link').removeClass('px-5').addClass('px-2')

        $('#navbar div').removeClass('py-3')

    } else {
        $('nav a').css('font-size', '1.2rem')
        $('.menu-ham').css({height: 50, width: 50}).removeClass('mt-3 ms-3').addClass('mt-3 ms-3')

        $('.menu-cross').css({height: 45, width: 45, top: '6rem'})
        $('.nav-link').removeClass('px-2').addClass('px-5')

        $('#navbar div').addClass('py-3')

    }
    
    //title
    if (w < 665) {
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
        $('#qs-title').addClass('pt-5');
    } else {
        $('.qs-image-container-hor').removeClass('d-none')
        $('.qs-image-container-ver').addClass('d-none')
        $('#qs-title').removeClass('pt-5');

    }

    if (w < 1400) {
        $('.c-section-l').css('width', '20rem');
    } else {
        $('.c-section-l').css('width', '34rem');
    }

}

window.onresize = onMobile

onMobile()

var menuOpen = false

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
    if (!menuOpen) return
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
