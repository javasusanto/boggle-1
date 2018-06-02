
// function board(angka) {
//     let kamusAbjad = 'ABCDEFGHIJLMNOPQRESTUVWXYZ'
//     let boxArr = []
//     for (let i = 0; i < angka; i++) {
//         boxArr.push([])
//         for (let j = 0; j < angka; j++) {
//             boxArr[i].push(kamusAbjad[Math.floor(Math.random()*26)])
//         }
//     }
//     return boxArr
//   }
//   console.log(board(4))

class boggle {

  constructor(abjadString) {
    this.abjad = abjadString
  }

  randomAbjad(){
    let abjad = this.abjad
    return abjad.charAt(Math.floor(Math.random() * abjad.length))
  }

  board(row,col) {
    let boxArr = [];

    for (let i = 0; i < col; i++) {
      boxArr.push([]);
      for (let j = 0; j < row; j++) {
        boxArr[i].push(this.randomAbjad());

      }
    }
    return boxArr
  }

}

let abjadString = 'ABCDEFGHAIJKLMNOPQRSTUVWXYZ'
let game = new boggle(abjadString)

console.log(game.board(4,5));
