function board(row,col){
    var arrMain=[];
    var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(var i = 0; i<row; i++){
        var arrRow = []
        arrMain.push(arrRow);
        for(var j = 0; j<col; j++){
            var randomIndex = Math.round(Math.random()*25)
            if(arrRow.length < col){
                arrRow.push(abjad[randomIndex])
            }
        }
    }
    return arrMain.join('\n')
}

console.log(board(4,4))