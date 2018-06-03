// var kamus = require('data.js')


// console.log(kamus);

function wordShake(num){
    var alphabet = 'ABCADCABAHORE'
    var childArr = []   //memcd buat array utama
    var mainArr = []    //mebuat cols dari array utama
    var kamusArr = ['ABAH','BH','BABA','ABA','BACA','DOR','CAR','CABE']
    var matchArr = []   // untuk menampilkan kata yg cock
    var count = 0 //menghitung jumlah kata yg match
    for(var i = 0; i < num; i++){
        for(var j = 0; j < num; j++){
            childArr.push(alphabet[Math.floor(Math.random()*alphabet.length)])
        }
        mainArr.push(childArr)
        childArr = []
    }
    console.log(mainArr);
    
    var hasilArr = []
    //memanggil fungsi def word in Block
    arr = defWordInCols(mainArr)
    hasilArr.push(arr)
    arr = defWordInBlock(mainArr)
    hasilArr.push(arr)
    arr = defWordInRows(mainArr)
    hasilArr.push(arr)
    //mencocokan kata
    console.log(hasilArr);
    
    for(var i = 0; i < hasilArr.length; i++){
        for(var j = 0; j < hasilArr[i].length; j++){
            for(var k = 0; k < kamusArr.length;k++){
                if(hasilArr[i][j] === kamusArr[k]){
                    matchArr.push(hasilArr[i][j])
                    count++
                }
            }
        }
    }
    console.log(matchArr);
    
    if(count === 0){
        return 'tidak ada kata ditemukan'
    }else{
        return count+' kata telah ditemukan, yaitu '+matchArr
    }
    // return hasilArr
}


function defWordInBlock(arr){
    var wordsInColls = []
    var words = ''
    for(var i = 0; i < arr.length-1; i++){
        for(var j = 0; j < arr[i].length-1; j++){


            //def 3 words
            if(arr[i][j+1] !== undefined){
                if(arr[i+1][j+1] !== undefined){
                    words += arr[i][j]
                    words += arr[i][j+1]
                    words += arr[i+1][j+1]
                    wordsInColls.push(words)
                    words = ''
                }
            }

            if(arr[i+1][j] !== undefined){
                if(arr[i+1][j+1] !== undefined){
                    words += arr[i][j]
                    words += arr[i+1][j]
                    words += arr[i+1][j+1]
                    wordsInColls.push(words)
                    words = ''
                }
            }

            if(arr[i+1][j+1] !== undefined){
                if(arr[i][j+1] !== undefined){
                    words += arr[i][j]
                    words += arr[i+1][j+1]
                    words += arr[i][j+1]
                    wordsInColls.push(words)
                    words = ''
                }

                if(arr[i+1][j] !== undefined){
                    words += arr[i][j]
                    words += arr[i+1][j+1]
                    words += arr[i+1][j]
                    wordsInColls.push(words)
                    words = ''
                }

                //def 4 words
                if(arr[i][j+1] !== undefined){
                    if(arr[i+1][j+1] !== undefined){
                        if(arr[i+1][j] !== undefined){
                            words += arr[i][j]
                            words += arr[i][j+1]
                            words += arr[i+1][j+1]
                            words += arr[i+1][j]
                            wordsInColls.push(words)
                            words = ''
                        }
                    }
                }

                if(arr[i+1][j] !== undefined){
                    if(arr[i+1][j+1] !== undefined){
                        if(arr[i][j+1] !== undefined){
                            words += arr[i][j]
                            words += arr[i+1][j]
                            words += arr[i+1][j+1]
                            words += arr[i][j+1]
                            wordsInColls.push(words)
                            words = ''
                        }
                    }
                }

            }


        }
        
        
    }
    return wordsInColls
    // return arr

}

function defWordInCols(arr){
    var wordsInCols = []
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j< arr[i].length; j++){
            var index = j
            var words = ''
            while(index < arr.length){
                words += arr[i][index]
                index++
            }
            wordsInCols.push(words)
        }
    }
    return wordsInCols
}

function defWordInRows(arr){
    var wordsInRows = []
    for(var i = 0; i < arr.length;i++){
        for(var j = 0; j < arr[i].length; j++){
            var index = i
            var hasil = ''
            while(index < arr.length){
                hasil += arr[index][j]
                index++
            }
            wordsInRows.push(hasil)
        }
    }
    return wordsInRows
}






console.log(wordShake(4));

