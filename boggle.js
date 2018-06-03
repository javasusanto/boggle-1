class BoggleBoard {
  constructor(alphabet) {
    this.alphabet = alphabet;
  }

  shake(int) {
    var alphabet = this.alphabet;
    var arrResult = [];
    for (let i = 0; i < int; i++) {
      var tempoArr = []
      for (let j = 0; j < int; j++) {
        tempoArr.push(randomizer())
      }
      arrResult.push(tempoArr)
    }

    this.board = arrResult;
    return arrResult;

    function randomizer() {
      return alphabet.charAt(Math.trunc(Math.random() * alphabet.length));
    }

  }

  findWords(dictionary) {
    var board = this.board;
    console.log(dictionary);
    console.log(board);

    var currentLetterIndex = 0;

    while (currentLetterIndex !== dictionary.length) {

    }

    function linearSearch(target, values) {
      for (var q = 0; q < values.length; q++) {
        if (values[q] === target) {
          return q;
        }
      }
      return -1;
    }

    function getAdjacentArr(arrIndex, elementIndex, board) {
      var adjacentArr = [];

      for (let i = getLoopParameters(arrIndex, elementIndex, board)[2]; i < getLoopParameters(arrIndex, elementIndex, board)[0]; i++) {
        for (let j = getLoopParameters(arrIndex, elementIndex, board)[3]; j < getLoopParameters(arrIndex, elementIndex, board)[1]; j++) {
          var objAdjacentPosition = {}
          if (i === arrIndex && j === elementIndex) {
            j++;
          }
          var inspector = board[i][j];
          if (inspector !== undefined) {
            objAdjacentPosition.arrIndex = i;
            objAdjacentPosition.elementIndex = j;
            adjacentArr.push(objAdjacentPosition);
          }
        }
      }

      return adjacentArr;

      function getLoopParameters(arrIndex, elementIndex, board) {
        if ((arrIndex === 0 && elementIndex === 0)) {
          return [2, 2, 0, 0];
        } else if (arrIndex ===  0 && elementIndex === board.length - 1) {
          return [2, 2, 0, board.length - 2];
        } else if (arrIndex ===  board.length - 1 && elementIndex === 0) {
          return [2, 2, board.length - 2, 0];
        } else if (arrIndex ===  board.length - 1 && elementIndex === board.length - 1) {
          return [2, 2, board.length - 2, board.length - 2];
        } else if (elementIndex === 0){
          return [3, 2, elementIndex - 1, elementIndex + 1];
        } else if (elementIndex === board.length - 1) {
          return [3, 2, elementIndex - 1, elementIndex - 1];
        } else {
          return [board.length, board.length, elementIndex - 1, elementIndex - 1];
        }
      }
    }


  }

}

let importedDictionary = require('./data.js');

var boggle1 = new BoggleBoard("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

boggle1.shake(3);

console.log(boggle1.findWords("ADA"));
