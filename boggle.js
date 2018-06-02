//RELEASE 0 : CREATE METHOD SHAKE WITH INPUT SIZE OF BOARD AND RETURN ARRAY SIZE*SIZE WITH SUFFLED CHARACTER A-Z

class Boggle {
  constructor () {
    // this.boardArr = this.createEmptyBoard();
    this.wordsArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    this.boardSize = 0;
    this.boardArr = [];
  }

  createEmptyBoard(size) {
    let board = [];
    for (let i = 0; i < size; i++) {
      if (board[i] === undefined) {
        board.push([]);
      }
      for (let j = 0 ; j < size ; j++) {
        board[i].push(" ");
      }
      
    }
    return board;
  }

  shake (size) {
    this.boardSize = size;
    this.boardArr = this.createEmptyBoard(size);
    for (let i = 0; i < size; i++) {
      for (let j = 0 ; j < size ; j++) {
        this.boardArr[i][j] = this.wordsArr[Math.floor(Math.random()*26)]
      }
    }
    return this.boardArr;
  }

}

var game = new Boggle();
console.log(game.shake(4));