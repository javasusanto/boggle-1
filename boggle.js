class Boggle{   
    constructor(scale, library){
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        this.scale = 8
        this.library = ["SUPER","TURN", "FOO", "PUT", "GONE",
                        "STOP", "MAGIC", "EYE", "FOX", "GEEK",
                        "LEE", "FES"] 
    }

    random(){
        var board = []
        for(let i=0; i<this.scale; i++){
            var smallBoard = []
            for(let j=0; j<this.scale; j++){
                var randomAlphabet = this.alphabet[Math.floor(Math.random() * this.alphabet.length)]
                smallBoard.push(randomAlphabet)
            }
            board.push(smallBoard)
        }
        return board
    }

    foundWord(randomBoard){
        var result = []
        for(let i=0; i<this.library.length; i++){
            for(let j=0; j<this.library[i].length; j++){
                for(let x=0; x<testBoard.length; x++){
                    for(let u=0; u<testBoard[x].length; u++){
                        if(testBoard[x][u] === this.library[i][j]){
                            // right check
                            var word = testBoard[x].slice(u,this.library[i].length+1).join("")
                            if(word === this.library[i]){
                                result.push(word)
                            }
                            // left check
                            if(word !== this.library[i]){
                                word = ""
                                let lastAlpha = this.library[i][this.library[i].length-1]
                                let start = testBoard[x].indexOf(lastAlpha)
                                word = testBoard[x].slice(start, u+1)
                                word = word.reverse().join("")
                                if(word === this.library[i]){
                                    result.push(word)
                                }
                            }
                            // up check
                            if(word !== this.library[i]){
                                word = ""
                                word = testBoard[x][u]
                                for(let z=x-1; z>=0; z--){
                                    word += testBoard[z][u]
                                        if(word === this.library[i]){
                                            result.push(word)
                                        }  
                                }
                            }
                            // down check
                            if(word !== this.library[i]){
                                word = ""
                                word = testBoard[x][u]
                                for(let z=x+1; z<testBoard.length; z++){
                                    word += testBoard[z][u]
                                        if(word === this.library[i]){
                                            result.push(word)
                                        }  
                                }
                            }

                            // right down diagonal check
                            if(word !== this.library[i]){
                                word = ""
                                word = testBoard[x][u]
                                for(let z=x+1; z<testBoard.length; z++){
                                    for(let y=z; y<=z; y++){
                                        word += testBoard[z][y]
                                        // console.log(z,y)
                                        if(word === this.library[i]){
                                            result.push(word)
                                        }  
                                    }   
                                }
                            }
                            // left down diagonal check
                            // if(word !== this.library[i]){
                            //     word = ""
                            //     word = testBoard[x][u]
                            //     for(let z=x+1; z<testBoard.length; z++){
                            //         for(let y=u-1; y>=z; y--){
                            //             word += testBoard[z][y]
                            //             console.log(z,y)
                            //             if(word === this.library[i]){
                            //                 result.push(word)
                            //             }  
                            //         }  
                            //     }
                            // }
                        }
                    }
                }
              
            }
        }
          
        console.log(randomBoard)
        console.log(`${result.length} found word!`)
        console.log(`${result}`)
    }
}

var boggle = new Boggle()
// boggle.foundWord(boggle.random())

var testBoard = [
    ['S', 'U', 'P', 'E', 'R'],
    ['A', 'F', 'O', 'X', 'E'],
    ['K', 'E', 'E', 'G', 'E'],
    ['R', 'P', 'O', 'S', 'L'],
]
boggle.foundWord(testBoard)
