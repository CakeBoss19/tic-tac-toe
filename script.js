const cssChanges = (() => {
  function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
  }

  function boardClasses(){
    if(board.classList == 'board x'){
      board.classList.replace('x', 'circle');
    } else{
      board.classList.replace('circle', 'x');
    };
  }
  return {placeMark, boardClasses};
})();

const playerCreator = ((player) => {

  function makeMove(e){
    const cell = e.target;
    const cellIndex = cell.dataset.cell;
    gameboard.splice(cellIndex, 1, (player + 1));
  };

  function changeDisplay(e){
    const cell = e.target;
    const xClass = 'x';
    const circleClass = 'circle';
    const currentClass = (!player) ? xClass : circleClass;

    cssChanges.placeMark(cell, currentClass);
    cssChanges.boardClasses();
  }
  return {makeMove, changeDisplay};
});

const cellElements = document.querySelectorAll(".cell");
const playerOne = playerCreator(0);
const playerTwo = playerCreator(1);

let gameboard = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0,
];

let n = 0;

cellElements.forEach((cell) => {
  
  cell.addEventListener('click', (e) => {
    let currentPlayer = getCurrentPlayer();
    currentPlayer.makeMove(e);
    currentPlayer.changeDisplay(e);
    // examineBoard(); // checks array to see if any victory conditions have been met.
    n++;
  }, {once: true});
});



function getCurrentPlayer(){
  return (n % 2 == 0 ? playerOne : playerTwo);
}

function examineBoard(){
  //use a switch statment to determine winning states,
  //if gameboard[0-2] =1 or 2, win, restart game
  //different statement for winning condistions. reorganize later
}