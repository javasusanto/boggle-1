class BoogleBoard {
  constructor (num) {
    this.boogleArr = this.shake(num);
  }

  shake (num) { //Membuat boogle Arr dengan method shake
    var dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var boogleArr = [];

    var index = 0;
    var randomAlphabet = [];
    for (var i = 0; i < num*num; i++) {
      randomAlphabet.push(dictionary.charAt(Math.floor(Math.random() * dictionary.length)));
    }

    for (var i = 0; i < num; i++) {
      boogleArr.push([]);  
      for (var j = 0; j < num; j++) {
        boogleArr[i].push(randomAlphabet[index]);
        index++;
      }
    }
    return boogleArr;
  }

  kamus () { //memanggil kamus dari data.js
    var kamus = require('./data.js');
    return kamus;
  }


}

const lengthBoogle = process.argv [2];

var boogle = new BoogleBoard(lengthBoogle);
console.log(boogle)
console.log(boogle.kamus())