//STEP ONE:
//Store the gameboard in an array inside of a Gameboard object.
//try and make the game functional without html and css

//STEP TWO:
//Players are going to be stored in objects as well

function makeBoard(){
  const board_div = document.getElementById('game-grid');
  for(let i = 0; i < 3; i++){
    let row = document.createElement('div');
    for(let i = s0; i < 3; i++){
      let cell = doucment.createElement('div');
      row.appendChild(cell);
    }
  };
};

let makeBoard = (function(){
  //code here:
})();

const Gameboard = (function() {
  const boardArr = [
  ' ', ' ', ' ',
  ' ', ' ', ' ',
  ' ', ' ', ' ',
  ];
  return {
    showArray: (() => {
      boardArr.forEach((spot) => {
        if(spot = ' '){
          spot = 'It works!';
        };
        console.log(spot);
      });
    })
  };
})();

Gameboard.showArray();