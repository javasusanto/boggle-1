const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const kamus = require('./data');

class BoggleBoard {
  constructor(){
    this.alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  shake(number){
    let mainBoard = [];
    for (let i = 0; i < number; i++){
      let row = [];
      for (let i = 0; i < number; i++){
        let randomIndex = Math.floor(Math.random() * alphabets.length);
        row.push(alphabets[randomIndex]);
      }
      mainBoard.push(row);
    }
    return mainBoard;
  }

  tes(){
    return this.alphabets.length   
  }

}


var testBoard = [
  ['Z', 'N', 'E', 'C'],
  ['R', 'C', 'G', 'B'],
  ['J', 'O', 'I', 'S'],
  ['L', 'Y', 'C', 'Y']]


var huruf = 'CIY';
var theCoordinates = {};

const isAllLetterFound = () => {
  let letterFound = 0;
  for (let i in huruf){
    var isLetterFound = false;
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (huruf[i] === testBoard[j][k]) {
          isLetterFound = true;
          if (theCoordinates[huruf[i]] === undefined){
            theCoordinates[huruf[i]] = [[j,k]]
          } else {
            theCoordinates[huruf[i]].push([j,k])
          }
        }
      }
    }
    if (isLetterFound){
      letterFound ++;
    }
  }
  if (letterFound === huruf.length){
    return true;
  } else {
    return false;
  }
}

const isCoordinateViable = (coordinate1, coordinate2, linedCoordinates) => {
  let row1 = coordinate1[0]
  let col1 = coordinate1[1]
  let row2 = coordinate2[0]
  let col2 = coordinate2[1]

  for (let i in linedCoordinates) {
    if (row2 === linedCoordinates[i][0] && col2 === linedCoordinates[i][1]){
      return false;
    }
  }

  for (let i = row1 - 1; i <= row1 + 1; i++){
    for (let j = col1 - 1; j <= col1 + 1; j++){
      if (row2 === i && col2 === j){
        return true;
      }
    }
  }
  return false;
}

const solve = () => {
  let firstCoordinate;
  let secondCoordinate;
  for (let i = 0; i < huruf.length - 1;){
    for (let j = 0; j < theCoordinates[huruf[i]].length; j++){
      let linedCoordinates = [];
      firstCoordinate = theCoordinates[huruf[i]][j]
      for (let k = 0; k < theCoordinates[huruf[i + 1]].length;){
        secondCoordinate = theCoordinates[huruf[i + 1]][k]
        isCoordinateViable(firstCoordinate, secondCoordinate, linedCoordinates)
        
        if (isCoordinateViable){
          linedCoordinates.push(firstCoordinate)
          firstCoordinate = secondCoordinate
          i++
        } else {
          k++
        }
      }
      linedCoordinates.push(secondCoordinate)
      if (linedCoordinates.length === huruf.length){
        return linedCoordinates
      }
    }
  }



  /* 
  koordinat x = 1 koordinat dr huruf pertama
  koordinat y = 1 koordinat dr huruf kedua
  masukin x dan y ke fungsi viable 
  kalo true :
   masukin y ke linedcoordinates
   x = koordinat dr huruf kedua
   y = huruf ketiga
  begitu seterusnya  
  */
}

isAllLetterFound();
console.log(theCoordinates)

/*
[i-1,j-1]
[i-1,j]
[i-1,j+1]
[i,j-1]
[i,j+1]
[i+1,j-1]
[i+1,j]
[i+1,j+1]

*/