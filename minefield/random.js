
var testrand = setmines(5,5,5);

create2(3,3);

function create2(row, col){
    var minefield = document.createElement("table");
    console.log(minefield);

    for (let index = 0; index < row; index++) {
        var tr = document.createElement("tr");
        for (let index = 0; index < col; index++) {
            var td = document.createElement("td");
            td.className = "test";
            td.innerHTML=testrand[i][j];
            tr.append(td);        
        }
        minefield.append(tr);   
    }
    // console.log(minefield += "</table>");
    // console.log(document.getElementById("minefield2"));
    document.getElementById("minefield2").innerHTML = minefield.outerHTML;
    fill2();
    
}
function fill2() {

    var cells = document.getElementsByClassName("test");

    for (var item of cells) {
    cells[0].innerHTML = "test";
}

}

function cooltest(x,y,z) {
    return (x*y)-z;
}



function setmines(x, y, z) {
    var arr = shuffleArray(minearray((x*y-z), z));
    var minegrid = [];
    for (var i = 0; i < x; i++) {
        var row = [];
        for (var j = 0; j < y; j++) {
            row.push(arr[i * x + j]);
        }
        minegrid.push(row);
    }
    
    return minegrid;

}

function minearray(safe, mine) {
    var arr = [];
    for (let index = 0; index < mine; index++) {
        arr.push(true);        
    }
    for (let index = 0; index < safe; index++) {
        arr.push(false);
    }
    return arr;
} 

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}