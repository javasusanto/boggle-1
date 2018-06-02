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

    return arrResult;

    function randomizer() {
      return alphabet.charAt(Math.trunc(Math.random() * alphabet.length));
    }
  }

}

var boggle1 = new BoggleBoard("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

console.log(boggle1.shake(5));
