const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
let circleTurn = false;

cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true })
});

function handleClick(e){
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  swapTurns();
  swapBoard();
  // Check for win
  // Check for draw
};

function placeMark(cell, currentClass){
  cell.classList.add(currentClass);
};

function swapTurns(){
  circleTurn = !circleTurn;
};

function swapBoard(){
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  board.classList = '';
  board.classList = `board ${currentClass}`;  
}