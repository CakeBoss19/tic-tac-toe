// const X_CLASS = 'x';
// const CIRCLE_CLASS = 'circle';
// const cellElements = document.querySelectorAll('[data-cell]');
// let circleTurn;


// cellElements.forEach(cell => {
//   cell.addEventListener('click', handleClick, { once: true })
// });
// function handleClick(e){
//   const cell = e.target;
//   const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
//   placeMark(cell, currentClass);
//   swapTurns();
// };

// function placeMark(cell, currentClass){
//   cell.classList.add(currentClass)
// };

// function swapTurns(currentClass){
//   circleTurn = !circleTurn;
//   board.classList.add(currentClass);
// };


let playerCreator = ((index) => {

  //if player1 is currently player,
  //I'm going to want to change zero of the selected spot to a 1;
  function makeMove(cell){
    let playerSelection = cell.dataset.cell;
    gameboard.splice(playerSelection, 1, index);
    console.log(gameboard);
  };
  return {makeMove};
});


const cells = document.querySelectorAll(".cell");
const playerOne = playerCreator(1);
const playerTwo = playerCreator(2);

let gameboard = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0,
];

let n = 0;

cells.forEach((cell) => {
  
  cell.addEventListener('click', (e) => {
    let currentPlayer = getCurrentPlayer();
    currentPlayer.makeMove(e.target);

    // examineBoard(); // checks array to see if any victory conditions have been met.
    n++;
  });
});



function getCurrentPlayer(){
  return (n % 2 == 0 ? playerOne : playerTwo)
}