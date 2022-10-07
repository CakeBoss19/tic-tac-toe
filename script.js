const Gameboard = {
  gameboard: [0,0,0,0,0,0,0,0,0],
  reset: () => {
    Gameboard.gameboard = [0,0,0,0,0,0,0,0,0];
  },
};

function PlayerCreator(player){
let playerValue = player + 1;
const gameboard = Gameboard.gameboard;

function getPlayerName(){
  const playerOne = document.getElementById('first-player');
  const playerTwo = document.getElementById('second-player');
  let playerName;
  (player == 0) ? playerName = playerOne.value : playerName = playerTwo.value;
  return playerName;
};

return {
  getPlayerName,
  alterGameBoard: (target) => {
    const cellValue = target.dataset.cell;
    gameboard.splice(cellValue, 1, playerValue);
  },
  playerValue,
};
};

const displayController = (() => {

function emptyCells(){
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.classList = 'cell';
  })
};

function placeMark(cell, currentClass){
  cell.classList.add(currentClass);
};

function boardClasses(currentClass){
  const board = document.getElementById('board');
  board.classList = (currentClass == 'x') ? 'board circle' : 'board x';
};

function toggleWinner(){
  const winner = document.getElementById('winning-screen');
  winner.classList.toggle('invisible');
};

function gameOverScreen(playerObj){
  const gameOverScreen = document.querySelector('.congratulations');
  if(playerObj == 'draw'){
    gameOverScreen.textContent = 'It\'s a draw!';
  } else {
  const playerName = playerObj.getPlayerName();
  gameOverScreen.textContent = `${playerName}, You Won!`;
  };
};

return {
  changeDisplay: (target, playerValue) => {
    const currentClass = (playerValue == 1) ? 'x' : 'circle';
    placeMark(target, currentClass);
    boardClasses(currentClass);
  },
  win: (playerObj) => {
    toggleWinner();
    gameOverScreen(playerObj);
  },
  reset: () => {
    emptyCells();
    boardClasses('circle');
    toggleWinner();
  }, 
};
})();

const gameFlow = (() => {

function checkForWin(player){
  const playerValue = player.playerValue
  let gameboard = Gameboard.gameboard;
  if(gameboard[0] == playerValue && gameboard[1] == playerValue && gameboard[2] == playerValue){
    displayController.win(player);
  } else if (gameboard[0] == playerValue && gameboard[3] == playerValue && gameboard[6] == playerValue){
    displayController.win(player);
  } else if (gameboard[0] == playerValue && gameboard[4] == playerValue && gameboard[8] == playerValue){
    displayController.win(player);
  } else if (gameboard[1] == playerValue && gameboard[4] == playerValue && gameboard[7] == playerValue){
    displayController.win(player);
  } else if (gameboard[2] == playerValue && gameboard[5] == playerValue && gameboard[8] == playerValue){
    displayController.win(player);
  } else if (gameboard[2] == playerValue && gameboard[4] == playerValue && gameboard[6] == playerValue){
    displayController.win(player);
  } else if (gameboard[3] == playerValue && gameboard[4] == playerValue && gameboard[5] == playerValue){
    displayController.win(player);
  } else if (gameboard[6] == playerValue && gameboard[7] == playerValue && gameboard[8] == playerValue){
    displayController.win(player);
  } else if (!gameboard.includes(0)){
    displayController.win('draw');
  } else {
    null;
  };
};

return {
  checkForWin,
  makeMove: (target, value, player) => {
    player.alterGameBoard(target);
    displayController.changeDisplay(target, value);
  },
  gameReset: () => {
    Gameboard.reset();
    displayController.reset();
    playGame();
  }
};
})();

const playGame = (() => {
const cells = document.querySelectorAll('.cell');
const player0 = PlayerCreator(0);
const player1 = PlayerCreator(1);
let playerTurn;
cells.forEach((cell) => {
  cell.addEventListener('click', (e) => {
    let currentPlayer = (!playerTurn) ? player0 : player1;
    let value = currentPlayer.playerValue;
    gameFlow.makeMove(e.target, value, currentPlayer);
    gameFlow.checkForWin(currentPlayer);
    playerTurn = !playerTurn;
  }, {once: true});
});          
});

playGame();