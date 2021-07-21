(function() {
    

    // 서브메뉴
    navInit();
    function navInit() {
        $('.gnb .depth1>li').on('click', function(e) {
            $(this).toggleClass('open').find('.depth2').stop().slideToggle(300)
            .parent().siblings().removeClass('open').find('.depth2').slideUp(300);
        });
    }

    // 메뉴 열기/닫기
    $('#header .btn_open').on('click', function(e) {
        e.preventDefault();
        $('#header .gnb_wrap').addClass('open');
        $('body').addClass('hidden');
        $('#header .btn_close').stop().delay(100).fadeIn();

        $('#header .btn_close').on('click', function(e) {
            e.preventDefault();
            $('#header .gnb_wrap').removeClass('open');
            $('body').removeClass('hidden');
            $(this).stop().fadeOut(0);
            $('.gnb .depth1>li').removeClass('open').find('.depth2').slideUp();
        });
    });

    // 메인 슬라이더
    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        autoplay: {
            delay: 4000,
          },
    });

    // 공지사항 슬라이더
    var noticeSlider = new Swiper('.notice_slider', {
        loop: true,
        direction: 'vertical',

        autoplay: {
            delay: 2000,
          },
    });

    // 추천 메뉴 슬라이더
    var recommendSlider = new Swiper('.recommend_slider', {
        slidesPerView: 2,

        scrollbar: {
            el: '.swiper-scrollbar',
          },
    });

    // 브랜드 공차 슬라이더
    var brandSlider = new Swiper('.brand_slider', {
        spaceBetween: 25,
        slidesPerView: 'auto',

        scrollbar: {
            el: '.swiper-scrollbar',
          },
    });

    // quick 버튼
    var btnQuick = $('.quick_top');
    var sc = 0;

    $(window).scroll(function() {
        sc = $(this).scrollTop();

        if(sc >= 200) {
            btnQuick.fadeIn();
        } else {
            btnQuick.fadeOut();
        }
    }).trigger('scroll');

    $('.quick_top .btn_top').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0});
    });


    // 서브페이지 lnb

    if($('.lnb_wrap').length>0) {
        $('.btn_lnb').on('click', function() {
            $(this).toggleClass('on');
            $('.lnb_wrap .lnb').stop().slideToggle(300);
        });
    }

    // 브랜드 공차 슬라이더
    var deliciousSlider = new Swiper('.delicious_slider', {
        slidesPerView: 1,

        scrollbar: {
            el: '.swiper-scrollbar',
          },
    });

    // 회원가입 약관동의 체크박스
    $('.all_agree_tit .agree_all').on('click', function() {
        if($('.all_agree_tit .agree_all').is(':checked')) {
            $('.agree_tit_wrap .agree_check').prop('checked', true);
        } else {
            $('.agree_tit_wrap .agree_check').prop('checked', false);
        }
    });

    // 스토어 버튼
    $('.store_search_wrap .btn_open').on('click', function() {
        $(this).toggleClass('on');
        $('.store_search_wrap .input_wrap').stop().slideToggle();
        $('.btn_option_wrap .list_option').stop().slideUp();
    });

    // 스토어 옵션 버튼
    $('.btn_option_wrap .btn_option').on('click', function() {
        $('.btn_option_wrap .list_option').stop().slideToggle();
    });
})();