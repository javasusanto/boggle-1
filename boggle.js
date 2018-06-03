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
    var counter = 0
    var correctArr = ['ADD', 'MOVE', 'EM', 'ANT', 'DEV', 'UDIN', 'NIAT', 'ADEM', 'AUNT']
    var containArr = [this.checkDiagonal(), this.checkVertical(), this.checkHorizontal()]
    var resultArr = []
    for (let i = 0; i < containArr.length; i++) {
      for (let j = 0; j < containArr[i].length; j++) {
        for (let k = 0; k < correctArr.length; k++) {
          if (containArr[i][j] === correctArr[k]) {
            counter++
            resultArr.push(containArr[i][j])
            var result = 'You find the words: ' + resultArr + ' | your score is: ' + counter
          }
        }
      }
    }
    return result
  }

  checkDiagonal() {
    var resultArr = []
    var strWord = ''
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
// console.log(game.checkDiagonal())
// console.log(game.checkVertical())
// console.log(game.checkHorizontal())
console.log(game.wordChecker())