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

// jQuery
// autoplay 속성은 페이지 로딩 시점에서 자동 시작하기때문에
// video 관련 API를 이용하여 재생과 정지를 제어할 수 있음.
$(document).ready(function(){
  var container = $('.container');
  var grid = document.querySelector('.btn-grid');
  var video = $('.news-video');
  grid.on('click', function(){
      container.toggleClass('is-act');
  });
  video.on('mouseover focusin', function(){
      this.play();
  });
  video.on('mouseout focusout', function(){
      this.pause();
  });
});
// Javascript
// var video = document.querySelector('.news-video');
// var eventOn = ['mouseenter', 'focusin'];
// var eventOff = ['mouseleave', 'focusout'];
// for(event of eventOn){
//     video.addEventListener(event, function(){
//         video.play();
//     });
// }
// for(event of eventOff){
//     video.addEventListener(event, function(){
//         video.pause();
//     });
// }