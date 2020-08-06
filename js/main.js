$(document).ready(function () {

    /*variabel btns ambil element div berikut: .project-area .button-group button*/
    let $btns = $('.project-area .button-group button');

    /*ketika btns di klik beri parameter/penanda e*/ 
    $btns.click(function (e) {
        /*untuk mengarah ke button element dengan class active */
        $('.project-area .button-group button').removeClass('active');
        /** menampilkan semua item project */
        e.target.classList.add('active');

        /** variabel selector jalankan perintah dengan tujuan data-filter pada div element*/
        let selector = $(e.target).attr('data-filter');
        /**tampilkan element gird dengan animasi dari library isotope */
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    /** ini pemicu */
    $('.project-area .button-group #btn1').trigger('click');
    /** ini untuk memunculkan image popup*/
    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
            
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});