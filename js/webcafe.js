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
    var container = $('.container');
    var grid = $('.btn-grid'); // 내부에서는 제이쿼리에 의해 객체가 생성
    var video = $('.news-video'); // 하나가 들어오더라도 배열 객체가 생성된다.
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
    grid.on('click', function(){
        $('.container').toggleClass('is-act');
    });
});

