class Boggle{
    constuctor(data_string){
      // this.data = shake_temp;
    }
    shake(num){
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var board = [];
      for (var i = 0; i < num; i++) {
        var small_board = [];
        for (var j = 0; j < num; j++) {
          small_board.push(alphabet[Math.floor(Math.random()*alphabet.length)]);
        }
        board.push(small_board);
      }
      return board;
    }
  
    solve(){
  
      var temp_big=[];
      var big_backtrack = [];
      var status = false;
      var coba = this.shake_txt();
      for (var i = 0; i < data_string.length; i++) {
        var backtrack = [];
        var temp = [];
        for (var j = 0; j < data_string[i].length; j++) {
          // console.log('masuk ');
          var break_status = false;
          for (var k = 0; k < coba.length; k++) {
            if (break_status) {
              k++;
              break;
            }
            for (var l = 0; l < coba[k].length; l++) {
            var small_bk = [];
  
              if(temp.length==0){
  
                if(data_string[i][j]===coba[k][l]){
                  temp.push(coba[k][l]);
                  small_bk.push(k);
                  small_bk.push(l);
                  backtrack.push(small_bk);
                  // console.log(backtrack);
                  // console.log(small_bk);
                  break_status = true;
                  break;
                }
              }
              else {
                for (var m = 0; m < 4; m++) {
                  var bt = backtrack[backtrack.length-1];
                  // console.log(coba[bt[0]-1][bt[1]-1]);
                  // console.log('nilai coba',[bt/
                  var status_bt=true;
                  if(bt[0]-1<0||bt[1]-1<0){
                    bt[0]=1;
                    bt[1]=1;
                    status_bt=false;
                  }
                  if (m == 0) {
  
                    if(coba[bt[0]-1][bt[1]-1]==data_string[i][j]&&status_bt==true){
                      // if (this.getIndexOf(backtrack,[[bt[0]-1][bt[1]-1]])) {
                      //
                      // }
                      // else {
                        var a = bt[0]-1;
                        var b = bt[1]-1;
                        status = true;
                        temp.push(coba[a][b]);
                        small_bk.push(a);
                        small_bk.push(b);
                        backtrack.push(small_bk);
                        break_status = true;
                        break;
                      // }
                    }
                    else if (coba[bt[0]-1][bt[1]]==data_string[i][j]&&status_bt==true) {
                      // if (this.getIndexOf(backtrack,[[bt[0]-1][bt[1]]])) {
                      //
                      // }
                      // else {
                        var a = bt[0]-1;
                        var b = bt[1];
                        status = true;
                        temp.push(coba[a][b]);
                        small_bk.push(a);
                        small_bk.push(b);
                        backtrack.push(small_bk);
                        break_status = true;
                        break;
                      // }
                    }
                    else if (coba[bt[0]][bt[1]-1]==data_string[i][j]&&status_bt==true) {
                      // if (this.getIndexOf(backtrack,[[bt[0]][bt[1]-1]])) {
                      //
                      // }
                      // else {
                        var a = bt[0];
                        var b = bt[1]-1;
                        status = true;
                        temp.push(coba[a][b]);
                        small_bk.push(a);
                        small_bk.push(b);
                        backtrack.push(small_bk);
                        break_status = true;
                        break;
                      // }
                    }
                  }
                  if (m == 1) {
                    if(coba[bt[0]-1][bt[1]]==data_string[i][j]&&status_bt==true){
                      // if (this.getIndexOf(backtrack,[[bt[0]-1][bt[1]]])) {
                      //
                      // }
                      // else {
                        var a = bt[0]-1;
                        var b = bt[1];
                        status = true;
                        temp.push(coba[a][b]);
                        small_bk.push(a);
                        small_bk.push(b);
                        backtrack.push(small_bk);
                        break_status = true;
                        break;
                      // }
                    }
                    else if (coba[bt[0]-1][bt[1]+1]==data_string[i][j]&&status_bt==true) {
                      // if (this.getIndexOf(backtrack,[[bt[0]-1][bt[1]+1]])) {
                      //
                      // }
                      // else {
                        var a = bt[0]-1;
                        var b = bt[1]+1;
                        status = true;
                        temp.push(coba[a][b]);
                        small_bk.push(a);
                        small_bk.push(b);
                        backtrack.push(small_bk);
                        break_status = true;
                        break;
                      // }
                    }
                    else if (coba[bt[0]][bt[1]+1]==data_string[i][j]&&status_bt==true) {
                      // if (this.getIndexOf(backtrack,[[bt[0]][bt[1]+1]])) {
                      //
                      // }
                      // else {
                        var a = bt[0];
                        var b = bt[1]+1;
                        status = true;
                        temp.push(coba[a][b]);
                        small_bk.push(a);
                        small_bk.push(b);
                        backtrack.push(small_bk);
                        break_status = true;
                        break;
                      // }
                    }
                  }
                  if (m == 2) {
                    if(coba[bt[0]][bt[1]-1]==data_string[i][j]&&status_bt==true){
                      // if (this.getIndexOf(backtrack,[[bt[0]][bt[1]-1]])) {
                      //
                      // }
                      // else {
                        var a = bt[0];
                        var b = bt[1]-1;
                        status = true;
                        temp.push(coba[a][b]);
                        small_bk.push(a);
                        small_bk.push(b);
                        backtrack.push(small_bk);
                        break_status = true;
                        break;
                      // }
                    }
                    else if (coba[bt[0]+1][bt[1]-1]==data_string[i][j]&&status_bt==true) {
                      // if (this.getIndexOf(backtrack,[[bt[0]+1][bt[1]-1]])) {
                      //
                      // }
                      // else {
                        var a = bt[0]+1;
                        var b = bt[1]-1;
                        status = true;
                        temp.push(coba[a][b]);
                        small_bk.push(a);
                        small_bk.push(b);
                        backtrack.push(small_bk);
                        break_status = true;
                        break;
                      // }
                    }
                    else if (coba[bt[0]+1][bt[1]]==data_string[i][j]&&status_bt==true) {
                      // if (this.getIndexOf(backtrack,[[bt[0]+1][bt[1]]])) {
                      //
                      // }
                      // else {
                        var a = bt[0]+1;
                        var b = bt[1];
                        status = true;
                        temp.push(coba[a][b]);
                        small_bk.push(a);
                        small_bk.push(b);
                        backtrack.push(small_bk);
                        break_status = true;
                        break;
                      // }
                    }
                  }
                  if (m == 3) {
                    if(coba[bt[0]][bt[1]+1]==data_string[i][j]&&status_bt==true){
                      // if (this.getIndexOf(backtrack,[[bt[0]][bt[1]+1]])) {
                      //
                      // }
                      // else {
                        var a = bt[0];
                        var b = bt[1]+1;
                        status = true;
                        temp.push(coba[a][b]);
                        small_bk.push(a);
                        small_bk.push(b);
                        backtrack.push(small_bk);
                        break_status = true;
                        break;
                      // }
                    }
                    else if (coba[bt[0]+1][bt[1]]==data_string[i][j]&&status_bt==true) {
                      // if (this.getIndexOf(backtrack,[[bt[0]+1][bt[1]]])) {
                      //
                      // }
                      // else {
                        var a = bt[0]+1;
                        var b = bt[1];
                        status = true;
                        temp.push(coba[a][b]);
                        small_bk.push(a);
                        small_bk.push(b);
                        backtrack.push(small_bk);
                        break_status = true;
                        break;
                      // }
                    }
                    else if (coba[bt[0]+1][bt[1]+1]==data_string[i][j]&&status_bt==true) {
                      // if (this.getIndexOf(backtrack,[[bt[0]+1][bt[1]+1]])) {
                      //
                      // }
                      // else {
                        var a = bt[0]+1;
                        var b = bt[1]+1;
                        status = true;
                        temp.push(coba[a][b]);
                        small_bk.push(a);
                        small_bk.push(b);
                        backtrack.push(small_bk);
                        break_status = true;
                        break;
                      // }
                    }
                  }
                }
              }
            }
          }
        }
        big_backtrack.push(backtrack);
        temp_big.push(temp.join(''));
      }
      var hasil = 0;
      var tampil_hasil = [];
      for (var z = 0; z < data_string.length; z++) {
        for (var x = 0; x < temp_big.length; x++) {
          if (data_string[z]===temp_big[x]) {
            hasil += 1;
            tampil_hasil.push(data_string[z]);
          }
        }
      }
      // console.log(hasil);
      // console.log(tampil_hasil);
      // console.log(temp_big);
      // console.log(big_backtrack);
      return tampil_hasil;
  
    }
  
    getIndexOf(backtrack,array){
      for (var i = 0; i < backtrack.length; i++) {
        for (var j = 0; j < backtrack.length; j++) {
          if(backtrack[i][j][0]==array[0]&&backtrack[i][j][1]==array[1]){
            return true;
          }
        }
      }
      return false;
    }
  
    shake_txt(){
      var board_shake = [];
      var a = 0;
      var board = [];
      var num = Math.sqrt(shake_temp.length);
      for (var i = 0; i < num; i++) {
        board = [];
        for (var j = 0; j < num; j++) {
          board.push(shake_temp[a]);
          a++;
          debugger;
        }
        board_shake.push(board);
      }
      // console.log(board_shake);
      return board_shake;
    }
  
  
  }
  
  
  const data_string = ['OKE','CAR','READ','NAME','MAKE','SEAT','DEAR'];
  // 'use strict'
  
  
  
  
  const fs = require('fs');
  // var a = ['A','B','D'];
  var shake_temp = fs.readFileSync('shake.txt','utf8').split(',')
  var boggle = new Boggle(shake_temp);
  // console.log(shake_temp);
  if (shake_temp=='') {
   var a = fs.appendFileSync('shake.txt', boggle.shake(5));
  }
  console.log(data_string);
  // console.log(shake_temp);
  console.log(boggle.shake_txt());
  console.log(`${boggle.solve().length} words found : \n ${boggle.solve()}`);
  