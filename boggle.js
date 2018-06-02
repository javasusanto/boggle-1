// let kamus = require('./data.js')
// console.log(kamus)
class Boggle {
  constructor() {
    // this.length = length | 4
    this.words = [];
    this.dictionary = ['MAKAN', 'STAR', 'HOT', 'FAX', 'COOL', 'PET', 'SEX', 'SUPER', 'LAW', 'TOS', 'TOY', 'HI', 'TURN', 'SAY', 'GOT', 'GIRL', 'GET', 'HELLO', 'PRICE', 'BRO', 'MEN', 'WHOA', 'SAY', 'BYE']
  }


  isiAcak() {
    let words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let random = Math.floor(Math.random() * words.length);
    return words[random];
  }



  shake(num) {
    let boardOutside = []
    for (let i = 0; i < num; i++) {
      let boardInside = []
      for (let j = 0; j < num; j++) {
        boardInside.push(this.isiAcak());
      }
      boardOutside.push(boardInside);
    }
    return boardOutside;
  }



  isWord(str) {
    if (this.dictionary.includes(str.toUpperCase())) {
      return true;
    } else {
      return false;
    }
  }


  cekKemungkinan(board, visited, i, j, str) {
    visited[i][j] = true;
    str = str + board[i][j];
    if (this.isWord(str)) {
      this.words.push(str);
    }

    for (let row = i - 1; row <= i + 1 && row <= board.length - 1; row++) {
      for (let col = j - 1; col <= j + 1 && col <= board.length - 1; col++) {
        if (str.length < 7 && row >= 0 && col >= 0 && !visited[row][col]) {
          this.cekKemungkinan(board, visited, row, col, str);
        }
      }
    }
    str = str.substring(0, str.length - 1);
    visited[i][j] = false;
  }




  getResult(words) {
    let ar = []
    for (let i = 0; i < words.length; i++) {
      if (ar.indexOf(words[i]) === -1) {
        ar.push(words[i])
      }
    }

    //  return ar
    console.log(ar.length + ' words found: ')
    for (let i = 0; i < ar.length; i++) {
      console.log(ar[i])
    }
  }



  findWords(board) {
    this.words = []
    console.log(board)
    let visited = []
    for (let i = 0; i < board.length; i++) {
      let inner = []
      for (let j = 0; j < board.length; j++) {
        inner.push(false)
      }
      visited.push(inner)
    }

    let str = '';
    for (let i = 0; i <= board.length - 1; i++) {
      for (let j = 0; j <= board.length - 1; j++) {
        this.cekKemungkinan(board, visited, i, j, str);
      }
    }
    let result = this.getResult(this.words)
  }
}


//release 0 -
let bogle = new Boggle()
let boardRandom = bogle.shake(6)


//   BOOGLE 2
bogle.findWords(boardRandom) // RUN RANDOM BOARDS
console.log('\n -----------  predefined board below : -----------------')

let boardCoba = [
  ['D', 'G', 'H', 'I'],
  ['K', 'L', 'P', 'S'],
  ['Y', 'E', 'U', 'T'],
  ['E', 'O', 'R', 'N']
]
console.log('\n')
bogle.findWords(boardCoba) // run predefined BOARDS
