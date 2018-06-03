'use strict';

var input = process.argv;

/**
 * @class Boggle
 * class Boggle to create a board game with input length filled with randomized alphabetic character
 */

class Boggle {
    constructor(length, strInput){
        this.boggleLength = +length;
        this.boggle = [];
        this.word = strInput;
    }

    // method create a boggle board
    createBoggle() {
        for (let i = 0; i < this.boggleLength; i++) {
            let rowBoggle = [];

            for (let j = 0; j < this.boggleLength; j++) {
                rowBoggle.push(this.randomAlphabet());
            }

            this.boggle.push(rowBoggle);
        }

        this.printBoggle();
    }

    // method to print boggle board on command line
    printBoggle() {
        console.log('   --- Boggle Board Game ---\n');

        for (let i = 0; i < this.boggle.length; i++) {
            console.log('         '+this.boggle[i].join('  '));
        }
    }

    // method to create random alphabet
    randomAlphabet() {
        let alphabets = 'abcdefghijklmnopqrstuvwxyz';

        return alphabets.charAt(Math.floor(Math.random() * 26) + 0);
    }

    // method to solve boggle game
    solve() {
        for (let i = 0; i < this.boggle.length; i++) {
            for (let j = 0; j < this.boggle[i].length; j++) {
                if (this.boggle[i][j] === this.word[0]) {
                    let k = 0;
                    let row = i;
                    let col = j;
                    let adjacentStatus = true;
                    let strCollected = this.word[0];

                    while (adjacentStatus === true && k < this.word.length-1) {

                        let outputAdjacentArr = this.findAdjacent(row, col, this.word[k+1]);
                        adjacentStatus = outputAdjacentArr[2];
                        row = outputAdjacentArr[0];
                        col = outputAdjacentArr[1];
                        k += 1;

                        if (adjacentStatus === true) {
                            strCollected += this.boggle[row][col];
                            if (strCollected.length === this.word.length) {
                                console.log(strCollected);
                            }
                        }
                    }
                }
            }
        }

    }

    findAdjacent(row, col, restWord) {
        let output = [];

        if (row-1 > 0 && this.boggle[row-1][col] === restWord) {       // up
            // console.log(`${this.boggle[row-1][col]} return true`);
            output.push(row-1);
            output.push(col);
            output.push(true)
        }

        if (row+1 < this.boggle.length && this.boggle[row+1][col] === restWord) {       // down
            // console.log(`${this.boggle[row+1][col]} return true`);
            output.push(row+1);
            output.push(col);
            output.push(true)
        }

        if (col-1 > 0 && this.boggle[row][col-1] === restWord) {       // left
            // console.log(`${this.boggle[row][col-1]} return true`);
            output.push(row);
            output.push(col-1);
            output.push(true);
        }

        if (col+1 < this.boggle.length && this.boggle[row][col+1] === restWord) {       // right
            // console.log(`${this.boggle[row][col+1]} return true`);
            output.push(row);
            output.push(col+1);
            output.push(true);
        }

        if (row-1 > 0 && col-1 > 0 && this.boggle[row-1][col-1] === restWord) {       // diagonal up left
            // console.log(`${this.boggle[row-1][col-1]} return true`);
            output.push(row-1);
            output.push(col-1);
            output.push(true);
        }

        if (row-1 > 0 && col+1 < this.boggle.length && this.boggle[row-1][col+1] === restWord) {       // diagonal up right
            // console.log(`${this.boggle[row-1][col+1]} return true`);
            output.push(row-1);
            output.push(col+1);
            output.push(true);
        }

        if (row+1 < this.boggle.length && col-1 > 0 && this.boggle[row+1][col-1] === restWord) {       // diagonal bottom left
            // console.log(`${this.boggle[row+1][col-1]} return true`);
            output.push(row+1);
            output.push(col-1);
            output.push(true);
        }

        if (row+1 < this.boggle.length && col+1 < this.boggle.length && this.boggle[row+1][col+1] === restWord) {       // diagonal bottom right
            // console.log(`${this.boggle[row+1][col+1]} return true`);
            output.push(row+1);
            output.push(col+1);
            output.push(true);
        }

        output.push(0);
        output.push(0);
        output.push(false);

        return output;
    }
}

var game = new Boggle(input[2], input[3]);

game.createBoggle();

game.solve();
