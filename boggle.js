class Game{
    constructor(size){
        this.huruf = 'abcdefghijklmnoprstuvwxyz'
        this.size = size
    }

    shake(){
        var boggle = []
        for (let i = 0; i < this.size; i++) {
            var arrIsi = []
            for (let j = 0; j < this.size; j++) {
                var random = Math.floor(Math.random() * 25)
                arrIsi.push(this.huruf[random])
            }
            boggle.push(arrIsi)
        }
        return boggle
    }

}

const boggle = new Game(5)

console.log(boggle.shake());
console.log(boggle);

