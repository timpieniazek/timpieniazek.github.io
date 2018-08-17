
setmines(5,5,5);

create2(3,3);

function create2(row, col){
    var minefield = "<table>";
    console.log(minefield);

    for (let index = 0; index < row; index++) {
        var tr = document.createElement("tr");
        for (let index = 0; index < col; index++) {
            var td = document.createElement("td");
            td.className = "test";
            tr.append(td);        
        }
        minefield += tr.outerHTML;   
    }
    // console.log(minefield += "</table>");
    // console.log(document.getElementById("minefield2"));
    document.getElementById("minefield2").innerHTML = minefield;
    fill2();
    
}
function fill2() {

    var cells = document.getElementsByClassName("test");

    for (let index = 0; index < cells.length; index++) {
    cells[0].innerHTML = "test";
}

}

function setmines(x, y, z) {
    var arr = shuffleArray(minearray((x*y-z), z));
    var minegrid = [];
    var count = 0;
    for (var i = 0; i < x; i++) {
        var row = [];
        for (var j = 0; j < y; j++) {
            row.push(arr[count++]);
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