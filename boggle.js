// start to coding 00:14 sunday, 03/06/2018
"use strict"
class Boggle {
  constructor() {

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
}

var game = new Boggle()

console.log(game.shake(4))
// console.log(game.wordsRandom())