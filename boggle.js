'use strict'

class BoggleBoard {
  constructor(dimension) {
    this.dimension = dimension || 4;
    this.board = [];
    this.dictionary = [];
    this.counter = 0;
  }
  generateBoard() {
    let arrCol = [];
    for (let i = 0; i < this.dimension; i++) {
      let arrRow = [];
      for (let j = 0; j < this.dimension; j++) {
        arrRow.push(' ');
      }
      arrCol.push(arrRow);
    }
    this.board = arrCol;
  }

  shake() {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let arrCol = [];
    for (let i = 0; i < this.board.length; i++) {
      let arrRow = [];
      for (let j = 0; j < this.board.length; j++) {
        let idx = Math.floor(Math.random() * alphabet.length);
        this.board[i][j] = alphabet[idx];
      }
    }
    return this.board;
  }

  // generate dictionary from file.
  generateDict() {
    //input from dictionary
    let fs = require('fs')
    let data = fs.readFileSync('data.js')
      .toString()
      .split("\n");
    let arrWords = data[0].split(' = ')[1];
    this.dictionary = JSON.parse(arrWords); //using json parse to change string to array
  }

  solveBoggle() {
    let idx = 0;
    let arrResult = [];
    let isChange = false;
    while (this.dictionary[idx]) {
      for (let i = 0; i < this.board.length; i++) {
        for (let j = 0; j < this.board.length; j++) {
          if (this.dictionary[idx][0].indexOf(this.board[i][j]) !== -1) {
            if (this.checkBoggle(this.dictionary[idx], i, j)) {
              arrResult.push(this.dictionary[idx]);
                this.counter++;
                isChange = true;
                break;
            }
          }
        }
        if (isChange){
          break;
        }
      }
      idx++
    }
  return arrResult;
  }

  //check horizontal, vertical, diagonal;
  checkBoggle(dict, posX, posY) {
    //clone array to prevent reference.
    let newBoard = this.arrayClone(this.board);
    let isFound = false;
    let i = 1;
    newBoard[posX][posY] = '!';
    while (!isFound) {

      //right
      if (newBoard[posX][posY + 1] === dict[i] && newBoard[posX][posY + 1]) {
        posY = posY + 1;
        newBoard[posX][posY] = '!';
      }

      //left
      else if (newBoard[posX][posY - 1] === dict[i] && newBoard[posX][posY - 1]) {
        posY = posY - 1;
        newBoard[posX][posY] = '!';
      }

      //up
      else if (newBoard[posX + 1] && newBoard[posX + 1][posY] === dict[i]) {
        posX = posX + 1;
        newBoard[posX][posY] = '!';
      }

      //down
      else if (newBoard[posX - 1] && newBoard[posX - 1][posY] === dict[i]) {
        posX = posX - 1;
        newBoard[posX][posY] = '!';
      }

      //upper left
      else if (newBoard[posX - 1] && newBoard[posX - 1][posY - 1] === dict[i]) {
        posX = posX - 1;
        posY = posY - 1;
        newBoard[posX][posY] = '!';
      }

      //upper right
      else if (newBoard[posX - 1] && newBoard[posX - 1][posY + 1] === dict[i]) {
        posX = posX - 1;
        posY = posY + 1;
        newBoard[posX][posY] = '!';
      }

      //lower left
      else if (newBoard[posX + 1] && newBoard[posX + 1][posY - 1] === dict[i]) {
        posX = posX + 1;
        posY = posY - 1;
        newBoard[posX][posY] = '!';
      }

      //lower right
      else if (newBoard[posX + 1] && newBoard[posX + 1][posY + 1] === dict[i]) {
        posX = posX + 1;
        posY = posY + 1;
        newBoard[posX][posY] = '!';
      }

      else {
        return false;
      }

      if (i === dict.length - 1) {
        isFound = true;
      }
      i++;
    }
    return isFound;
  }

  arrayClone(arr) {
    let i, copy;
    if (Array.isArray(arr)) {
      copy = arr.slice(0);
      for (i = 0; i < copy.length; i++) {
        copy[i] = this.arrayClone(copy[i]);
      }
      return copy;
    }
    else if (typeof arr === 'object') {
      throw 'Cannot clone array containing an object!';
    }
    else {
      return arr;
    }
  }

}

let boggle = new BoggleBoard(4);
boggle.generateBoard();
boggle.generateDict();
boggle.shake();

console.log(boggle.board);
let arrBoggle = boggle.solveBoggle();

if (arrBoggle.length !== 0) {
  console.log(`${boggle.counter} words found: `);
  for (let i in arrBoggle) {
    console.log(arrBoggle[i]);
  }
}
else {
  console.log('No words found!');
}
