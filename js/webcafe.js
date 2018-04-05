// let container = document.querySelector('.container');
// let grid = document.querySelector('.btn-grid');

// /* 그리드 참조하는 변수를 클릭하면 해당 이벤트를 선언해주세요. */
// grid.addEventListener('click', function(){
//   /* toggle mathod가 생겼다. class */
//   container.classList.toggle('is-act');
// });

// 팩토리함수, 선택, 세팅 다 됨
// . : 체이닝기법 다음과 연결
// ready() 메소드: 문서객체가 준비가되면, 
// 익명함수
// $(document).ready(function(){
//   var video = $('.news-video');

// !!!!!!!!!!!!!실행안됨
//   // on이라는 이벤트 메소드 연결(bind보다 최신)
//   // on, bind는 멀티 이벤트가 가능하다.
//   video.on('mouseover focusin', function(){
//     // setAttribute
//     $(this).attr('autoplay');
//   });
//   video.on('mouseout focusout', function(){
//     // setAttribute
//     $(this).removeAttr('autoplay');
//   });
// });

// !!!!!!!!!!!!!!!실행안됨
// var video = document.querySelector('.news-video');
// video.addEventListener('mouseenter focusin', function(){
//   this.setAttribute('autoplay', '');
// });
// video.addEventListener('mouseout focusout', function(){
//   this.removeAttribute('autoplay');
// });

// HTMLMediaElement에 따로 play(), pause() 메서드가 있으니 이걸 써야할 듯
// var video = document.querySelector('.news-video');
// video.addEventListener('mouseenter', function(){
//   // this.autoplay = true;
//   this.play();
// });
// video.addEventListener('mouseout', function(){
//   // this.autoplay = false;
//   // this.paused = true;
//   this.pause();
// });

$(document).ready(function(){
    (function(){
        var nav = $('.navigation');
        var btn_menubar = $('.btn-menubar');
        var span = $('.menubar');
        var menu  = $('.menu');
        var menuLists  = $('.menu-list');
        var menuItems  = $('.menu-item');
        var subMenus  = $('.sub-menu');
        var video = $('.news-video'); // 하나가 들어오더라도 배열 객체가 생성된다.
        /* 네비게이션 */
        /* 자바스크립트로 정적인 스타일을 제어하는 이런 방법은 별로 좋지 않음 */
        // btn_menubar.css('cursor', 'pointer');
        btn_menubar.on('click', function(){
            /* class라고 명시되어서 식별자가 필요없는 메서드 */
            nav.toggleClass('is-act');
            /* 텍스트 노드로 넣었다면 */
            // btn_menubar.text('메인메뉴닫기')
            if (nav.hasClass('is-act')) {
                btn_menubar.attr('aria-label', '메인메뉴닫기');
            } else {
                btn_menubar.attr('aria-label', '메인메뉴열기');
            }
            // menu.css('display', 'block');
        });
        /*
            keyup(누를때), keydown(누르고난 뒤), keypress(누르고 있을때)
        */
        var viewport = window.matchMedia('(max-width: 999px)');
        if (viewport.matches) {
            menuItems.addClass('icon-plus')
            .attr('role', 'button')
            .attr('aria-expanded', 'false')
            .attr('aria-haspopup', 'true')
            .attr('tabindex', 0);
            menuItems.on('click keydown', function(e){
                /* 클릭이거나, 키다운이면서 키코드가 13일때 */
                if(e.type === 'click' || (e.type === 'keydown' && e.keyCode === 13)) {
                    menuLists.removeClass('menu-act');
                    menuItems.removeClass('icon-minus')
                            .addClass('icon-plus')
                            .attr('aria-expanded', 'false')
                            .css('color', '#fff').siblings().hide();
                    $(this).parent().addClass('menu-act');
                    $(this).removeClass('icon-plus')
                            .addClass('icon-minus')
                            .attr('aria-expanded', 'true')
                            .css('color', '#ff0').siblings().show();
                }
            });
        }
    
        /* 비디오 */
        video.get(0).volume = 0.0;
        // 멀티이벤트 실행: .on(), .bind()
        video.on('mouseover focusin', function(){
            // $(this) // 모든 배열객체의 this
            // video[0].play();
            // this.play();
            this.volume = 1.0;
        });
        video.on('mouseout focusout', function(){
            // $(this) // 모든 배열객체의 this
            this.pause();
            this.volume = 0;
        });
    }());
});