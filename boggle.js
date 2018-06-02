class Boggle {
    constructor () {
        this.board = [];
        this.letters = ['A','B','C','D','E','F','G','H','I','J',
                      'K','L','M','N','O','P','Q','R','S','T',
                      'U','V','W','X','Y','Z'];
        this.boardGrid = 0;

    }

    generateBoard(num) {
        var mainBoard = [];
        for (let i = 0; i < num; i++) {
            var innerBoard = [];
            mainBoard.push(innerBoard);
            for (let j = 0; j < num; j++) {
                if (innerBoard[j] === undefined) {
                    innerBoard.push('');
                }
            }
        }
        // console.log(mainBoard);
        return mainBoard;
    }

    shake(num) {
        this.boardGrid = num;
        this.board = this.generateBoard(num);

        for (let i = 0; i < num; i++) {
            for (let j = 0; j < num; j++) {
                this.board[i][j] = this.letters[Math.floor(Math.random() * 26 + 0)];
            }
        }
        return this.board;
    }

}

const game = new Boggle();
console.log(game.shake(4));