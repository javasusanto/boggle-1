class BoggleBoard {
  constructor(dictionary) {
    //this.data = data;
    this.board = [];
    this.dictionary = dictionary;
    this.counter = 0;
  }

  solve() {
    let board = this.board;
    // let board = [['D', 'G', 'H', 'I'],
    //              ['K', 'L', 'P', 'S'],
    //              ['Y', 'E', 'U', 'T'],
    //              ['E', 'O', 'R', 'N']];
    let dict = this.dictionary;
    // let dict = ["APPLE", "SIT", "TRIP", "TURN", "SUPER"];
    // console.log('var board from solve()', board)
    let result = [];
    let isFound = false;
    let index = 0;
    //console.log(this.checkWord(board))
    while (index < dict.length - 1) {
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (dict[index][0].indexOf(board[i][j]) !== -1 && 
              this.checkWord(board, dict, j, i)) {
            result.push(dict[index]);
            isFound = true;
            this.counter++;
            break;
          }
        }
        if (isFound) break;
      }
      index++;
    }

    return result
  }

  generateBoard() {
    let generateBoard = this.shake(4);
    this.board = generateBoard;
    return this.board
  }

  shake(num) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let board = [];

    for (let i = 0; i < num; i++) {
      let row = [];
      for (let j = 0; j < num; j++) {
        let randomChar = Math.floor(Math.random() * alphabet.length);
        row.push(alphabet[randomChar]);
      }
      board.push(row);
    }
    return board;
  }

  checkWord(board, dict, row, col) { 
    // up, down, right, left, diagonal(rightup, leftup. rightdown, leftdown)
    let copyBoard = board.slice();
    // console.log('copyBoard from checkWord():', copyBoard)
    let isFound = false;
    let counter = 1;
    let marked = '*';
    copyBoard[row][col] = marked;

    while (!isFound) {
      //right
      if (copyBoard[row][col+1] && copyBoard[row][col+1] === dict[counter]) {
        col = col + 1;
        copyBoard[row][col] = marked;
      }
      //left
      else if (copyBoard[row][col-1] && copyBoard[row][col-1] === dict[counter]) {
        col = col - 1;
        copyBoard[row][col] = marked;
      }
      //up
      else if (copyBoard[row-1] && copyBoard[row-1][col] === dict[counter]) {
        row = row - 1;
        copyBoard[row][col] = marked;
      }
      //down
      else if (copyBoard[row+1] && copyBoard[row+1][col] === dict[counter]) {
        row = row + 1;
        copyBoard[row][col] = marked;
      }
      //diagonal rightup
      else if (copyBoard[row-1] && copyBoard[row-1][col+1] === dict[counter]) {
        row = row - 1;
        col = col + 1;
        copyBoard[row][col] = marked;
      }
      //diagonal leftup
      else if (copyBoard[row-1] && copyBoard[posX-1][col-1] === dict[counter]) {
        row = row - 1;
        col = col - 1;
        copyBoard[row][col] = marked;
      }
      //diagonal rightdown
      else if (copyBoard[row+1] && copyBoard[row+1][col+1] === dict[counter]) {
        row = row + 1;
        col = col + 1;
        copyBoard[row][col] = marked;
      }
      //diagonal leftdown
      else if (copyBoard[row+1] && copyBoard[row+1][col-1] === dict[counter]) {
        row = row + 1;
        col = col - 1;
        copyBoard[row][col] = marked;
      }
      else {
        return false;
      }

      if (counter === dict.length - 1) {
        isFound = true
      }
      counter++
    }
    return isFound;
  }
}

let data = require('./data.js');
// console.log(data)
let game = new BoggleBoard(data);
let boggle = game.solve();

if (boggle.length !== 0) {
  console.log(game.counter + ' words found:');
  for (let i = 0; i < boggle.length; i++) {
    console.log(boggle[i]);
  }
} else {
  console.log('No words found');
}