let container = document.querySelector('.container');
let grid = document.querySelector('.btn-grid');

/* 그리드 참조하는 변수를 클릭하면 해당 이벤트를 선언해주세요. */
grid.addEventListener('click', function(){
  /* toggle mathod가 생겼다. class */
  container.classList.toggle('is-act');
});