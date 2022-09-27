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
  let playerValue = player + 1;
  function makeMove(e){
    const cell = e.target;
    const cellIndex = cell.dataset.cell;
    gameboard.splice(cellIndex, 1, playerValue);
  };

  function changeDisplay(e){
    const cell = e.target;
    const xClass = 'x';
    const circleClass = 'circle';
    const currentClass = (!player) ? xClass : circleClass;

    cssChanges.placeMark(cell, currentClass);
    cssChanges.boardClasses();
  }

  function checkForWin(){
    if(gameboard[0] == playerValue && gameboard[1] == playerValue && gameboard[2] == playerValue){
      console.log('winner');
    } else if(gameboard[0] == playerValue && gameboard[3] == playerValue && gameboard[6] == playerValue){
      console.log('you did it!');
    } else if(gameboard[0] == playerValue && gameboard[4] == playerValue && gameboard[8] == playerValue){
      console.log('you did it!');
    } else if(gameboard[1] == playerValue && gameboard[4] == playerValue && gameboard[7] == playerValue){
      console.log('you did it!');
    } else if(gameboard[2] == playerValue && gameboard[5] == playerValue && gameboard[8] == playerValue){
      console.log('you did it!');
    } else if(gameboard[2] == playerValue && gameboard[4] == playerValue && gameboard[6] == playerValue){
      console.log('you did it!');
    } else if(gameboard[3] == playerValue && gameboard[4] == playerValue && gameboard[5] == playerValue){
      console.log('you did it!');
    } else if(gameboard[6] == playerValue && gameboard[7] == playerValue && gameboard[8] == playerValue){
      console.log('you did it!');
    } else{
      console.log('ohwell')
    }
  };

  return {makeMove, changeDisplay, checkForWin};
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
      currentPlayer.checkForWin(); // checks array to see if any victory conditions have been met.
      n++;
    }, {once: true});
  });

function getCurrentPlayer(){
  return (n % 2 == 0 ? playerOne : playerTwo);
}