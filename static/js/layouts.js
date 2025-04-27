$(document).ready(function ()  {
    $(".sitemap").hide();
    $(".sitemap_btn").click(function () {
        if($('.sitemap').css('display')=='none') {
            $('.sitemap').slideDown('swing');
        } else {
            $('.sitemap').fadeOut(300);
        }
    });
});

/* $(document).ready(function ()  {
    $(".sitemap_depth_2_m").hide();
    $(".sitemap_menu_wrap_m > li").click(function () {
        $('.sitemap_depth_2_m').stop().slideUp();
        $(this).find('.sitemap_depth_2_m').stop().slideToggle('swing');
    });
}); */

$(document).ready(function () {
    $(".btn_play").click(function(){
        $(".btn_pause").show();
        $(".btn_play").hide();
    });
    $(".btn_pause").click(function(){
        $(".btn_play").show();
        $(".btn_pause").hide();
    });
});


/* $(document).ready(function () {
    $(".sitemap_depth_2_m").hide();
    $(".sitemap_menu_wrap_m > li").click(function () {
        $('.sitemap_depth_2_m').stop().slideUp();
        
        // 다른 버튼의 배경 초기화
        $('.sitemap_btn_more').css('background', 'url(../images/sitemap_btn_more_view.png) center center / cover no-repeat');

        // 클릭된 li의 ul을 토글
        $(this).find('.sitemap_depth_2_m').stop().slideToggle('swing', () => {
            // 토글 후 ul이 보이는 상태인지 확인
            if ($(this).find('.sitemap_depth_2_m').is(':visible')) {
                // 배경 변경
                $(this).find('.sitemap_btn_more').css('background', 'url(../images/sitemap_btn_no_view.png) center center / cover no-repeat'); // 원하는 색상으로 변경
            } else {
                // 숨겨졌다면 배경 초기화
                $(this).find('.sitemap_btn_more').css('background', 'url(../images/sitemap_btn_more_view.png) center center / cover no-repeat');
            }
        });
    });
}); */
$(document).ready(function () {
    $(".sitemap_depth_2_m").hide();
    $(".sitemap_menu_wrap_m > li").click(function () {
        // 다른 버튼의 배경 초기화 및 모든 메뉴 닫기
        $('.sitemap_depth_2_m').stop().slideUp();
        $('.sitemap_btn_more').css('background', 'url(./images/sitemap_btn_more_view.png) center center / cover no-repeat');

        // 클릭된 li의 ul
        const $depthMenu = $(this).find('.sitemap_depth_2_m');
        const $button = $(this).find('.sitemap_btn_more');

        // 현재 상태에 따라 버튼 배경 변경
        if ($depthMenu.is(':hidden')) {
            $button.css('background', 'url(./images/sitemap_btn_no_view.png) center center / cover no-repeat');
        } else {
            $button.css('background', 'url(./images/sitemap_btn_more_view.png) center center / cover no-repeat');
        }

        // 메뉴 토글
        $depthMenu.stop().slideToggle('swing');
    });
});








document.addEventListener('DOMContentLoaded', () => {
    const linkMenu = document.querySelector('.link_menu');
    const blind = document.querySelector('.blind');
    const gnbSubWraps = document.querySelectorAll('.gnb_sub_wrap');
    const gnbItems = document.querySelectorAll('.gnb > li:not(.link_menu)');
    const nav = document.querySelector('nav');

    let navHovered = false;

    // hover 상태에 따라 .gnb_sub_wrap과 .blind의 visibility 및 height 조정
    const toggleMenu = (state) => {
        gnbSubWraps.forEach(subWrap => {
            subWrap.style.height = state ? '384px' : '0';
            subWrap.style.visibility = state ? 'visible' : 'hidden';
        });
        blind.style.height = state ? '384px' : '0';
        blind.style.visibility = state ? 'visible' : 'hidden';
    };

    // .gnb > li:not(.link_menu)에 hover 시
    gnbItems.forEach(item => {
        item.addEventListener('mouseenter', () => toggleMenu(true));
        item.addEventListener('mouseleave', () => !linkMenu.matches(':hover') && toggleMenu(false));
    });

    // nav hover 시
    nav.addEventListener('mouseenter', () => {
        navHovered = true;
        toggleMenu(true);
    });
    nav.addEventListener('mouseleave', () => {
        navHovered = false;
        if (!linkMenu.matches(':hover')) toggleMenu(false);
    });

    // link_menu hover 시
    linkMenu.addEventListener('mouseenter', () => toggleMenu(false));
    linkMenu.addEventListener('mouseleave', () => {
        if (!navHovered) toggleMenu(false);
    });
});



//footer

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".footer_menu li");

    function updateFooterMenu() {
        items.forEach((item, index) => {
            if (index < items.length - 1) { // 마지막 요소는 비교할 필요 없음
                const nextItem = items[index + 1];

                // 줄바꿈이 발생하면 `hide-after` 클래스를 추가
                if (item.offsetTop !== nextItem.offsetTop) {
                    item.classList.add("hide-after");
                } else {
                    item.classList.remove("hide-after");
                }
            }
        });
    }

    // 초기 실행
    updateFooterMenu();

    // 창 크기 변경 시 다시 검사
    window.addEventListener("resize", updateFooterMenu);
});
