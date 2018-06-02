// ALGORITMA
// 1. Buat board Boggle
//    1.1 buat function board
//    1.2 masukan kamus abjad dengn isi abjad
//    1.3 masukan boxpenampung (boxArr)
//    1.4 buat perulangan i untuk membuathasil Array, di push ke box penampung
//    1.4 buat perulang j untuk memasukan hasil random dari kamus alpabet.
// 2. buat solve PROBLEM
//    2.1 buat function solveboggle


function board(angka) {
    let kamusAbjad = 'ABCDEFGHIJLMNOPQRESTUVWXYZ'
    let boxArr = []
    for (let i = 0; i < angka; i++) {
        boxArr.push([])
        for (let j = 0; j < angka; j++) {
            boxArr[i].push(kamusAbjad[Math.floor(Math.random()*26)])
        }
    }
    return boxArr
  }
  console.log(board(4))
