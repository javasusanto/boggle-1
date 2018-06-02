class BoggleBoard {
  constructor(string_letters) {
    this.gameBoard = [];
    this.letters = string_letters;
  }

  buttonShake(ukuran) {
    for (let i = 0; i < ukuran; i++) {
      this.gameBoard.push([])
      for (let j = 0; j < ukuran; j++) {
        this.gameBoard[i].push(this.letters[Math.floor(Math.random() * this.letters.length)])
      }
    }
    return this.gameBoard
  }
}

const fs = require('fs')
let string_letters = fs.readFileSync('abjad.txt').toString()
let abjad = new BoggleBoard(string_letters)

console.log(abjad.buttonShake(5))