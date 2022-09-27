const startGame = document.querySelector('#start-game');

startGame.addEventListener('click', () => {

    function playerCreator(player){ 
      let playerValue = player + 1;

      const cssChanges = (() => {
        function placeMark(cell, currentClass){
          cell.classList.add(currentClass);
        };

        function boardClasses(){
          if(board.classList == 'board x'){
            board.classList.replace('x', 'circle');
          } else{
            board.classList.replace('circle', 'x');
          };
        };
        return {placeMark, boardClasses};
      })();

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
      };

      function checkForWin(){
        (gameboard[0] == playerValue && gameboard[1] == playerValue && gameboard[2] == playerValue) ? console.log('top row')
        :(gameboard[0] == playerValue && gameboard[3] == playerValue && gameboard[6] == playerValue) ? console.log('left column')
        :(gameboard[0] == playerValue && gameboard[4] == playerValue && gameboard[8] == playerValue) ? console.log('left to right')
        :(gameboard[1] == playerValue && gameboard[4] == playerValue && gameboard[7] == playerValue) ? console.log('middle column')
        :(gameboard[2] == playerValue && gameboard[5] == playerValue && gameboard[8] == playerValue) ? console.log('right column')
        :(gameboard[2] == playerValue && gameboard[4] == playerValue && gameboard[6] == playerValue) ? console.log('right to left')
        :(gameboard[3] == playerValue && gameboard[4] == playerValue && gameboard[5] == playerValue) ? console.log('middle row')
        :(gameboard[6] == playerValue && gameboard[7] == playerValue && gameboard[8] == playerValue) ? console.log('bottom row')
        : null;
      };

      return {makeMove, changeDisplay, checkForWin};
    };

    const gameFunctions = (() => {

      function win(){

      };

      function getCurrentPlayer(){
        return (n % 2 == 0 ? playerOne : playerTwo);
      };

      function resetGame(){
        console.log('reset game');
      };

      return {getCurrentPlayer, resetGame, win};
    })();


    const cellElements = document.querySelectorAll(".cell");
    const playerOne = playerCreator(0);
    const playerTwo = playerCreator(1);
    let n = 0;
    let gameboard = [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0,
    ];

    cellElements.forEach((cell) => {
      cell.addEventListener('click', (e) => {
        let currentPlayer = gameFunctions.getCurrentPlayer();
        currentPlayer.makeMove(e);
        currentPlayer.changeDisplay(e);
        currentPlayer.checkForWin(); // checks array to see if any victory conditions have been met.
        n++;
      }, {once: true});
    });
});