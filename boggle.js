// start to coding 00:14 sunday, 03/06/2018
"use strict"
class Boggle {
  constructor() {
    this.containerWords = []
  }

  shake(numBoard) {
    var mainBoard = []
    for(let i = 0; i < numBoard; i++) {
      var subBoard = []
      for (let j = 0; j < numBoard; j++) {
        subBoard.push(this.wordsRandom())
      }
      mainBoard.push(subBoard)
    }
    return mainBoard
  }

  wordsRandom() {
    //Math.floor(Math.random() * ((y-x)+1) + x); x:start, y: end
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var idxRandom = Math.floor(Math.random() * ((25-0) + 1) + 0)
    var strWords = ''
    strWords += alphabet[idxRandom]
    return strWords
  }

  wordChecker() {

  }

  checkDiagonal() {
    var resultArr = []
    var strWord = ''
    var counter = 0
    var correct = ['ADD', 'MOVE', 'DEA', 'ANT', 'SET', 'UDIN', 'NIAT', 'ADEM', 'AUNT']
    // var board = this.shake(4)
    var board = this.testCaseCheck()
    for (let i = 0; i < board.length - 1; i++) {
      // debugger
      for (let j = 0; j < board[i].length - 1; j++) {
        // debugger
        if (board[i][j] !== undefined) {
          strWord += board[i][j]
          resultArr.push(strWord)
          if (board[i][j+1] !== undefined) {
            strWord += board[i][j+1]
            resultArr.push(strWord)
            // debugger
            if (board[i+1][j+1] !== undefined) {
              strWord += board[i+1][j+1]
              resultArr.push(strWord)
              if (board[i+1][j+1] !== undefined) {
                strWord += board[i+1][j]
                resultArr.push(strWord)
                strWord = ''
              }
            }
          }
          if (board[i+1][j] !== undefined) {
            strWord += board[i][j] + board[i+1][j]
            resultArr.push(strWord)
            if(board[i+1][j+1] !== undefined) {
              strWord += board[i+1][j+1]
              resultArr.push(strWord)
              if(board[i][j+1] !== undefined) {
                strWord += board[i][j+1]
                resultArr.push(strWord)
                strWord = ''
              }
            }
          }
        }
      }
      // strWord = ''
    }
    // console.log(board)
    var correctArr = []
    for (let k = 0; k < resultArr.length; k++) {
      for (let l = 0 ; l < correct.length; l++) {
        if (resultArr[k] === correct[l]) {
          correctArr.push(resultArr[k])
          counter++
        }
      }
    }
    // return 'you find words: ' + correctArr + '   ||  total find: ' + counter
    return resultArr
  }

  checkVertical() {
    var board = this.testCaseCheck()
    var str = ''
    var containArr = []
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        str = ''
        var idx = i
        while(idx < board.length) {
          str += board[idx][j]
          idx++
        }
        containArr.push(str)
      }
    }
    return containArr
  }

  checkHorizontal() {
    var board = this.testCaseCheck()
    var str = ''
    var containArr = []
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        str = ''
        var idx = j
        while(idx < board.length) {
          str += board[i][idx]
          idx++
        }
        containArr.push(str)
      }
    }
    return containArr
  }

  testCaseCheck() {
    var arr = [
      ['A', 'D', 'E', 'M'],
      ['U', 'D', 'E', 'V'],
      ['N', 'I', 'N', 'N'],
      ['T', 'T', 'A', 'T']
    ]
    return arr
  }

}

var game = new Boggle()

// console.log(game.shake(4))
console.log(game.checkDiagonal())
console.log(game.checkVertical())
console.log(game.checkHorizontal())