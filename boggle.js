class boggle{

	constructor() {

	}

	shake(boardLength){
		let board = []
		let dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

		for(let i = 0; i < boardLength; i++){
			board[i] = []
			for(let j = 0; j < boardLength; j++)
			board[i].push(dict.substr(Math.floor(Math.random()* dict.length), 1))

		}

		return board;
	}
}


let play = new boggle()
console.log(play.shake(5))