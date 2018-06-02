'use strict';

var input = process.argv;

/**
 * @class Boggle
 * class Boggle to create a board game with input length filled with randomized alphabetic character
 */

class Boggle {
    constructor(length){
        this.boggleLength = +length;
        this.boggle = [];
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

    }

}

var game = new Boggle(input[2]);

game.createBoggle();
