
create(3,3);

var randomBombs = setmines(3,3,1);

function create(row, col){
    var minefield = document.createElement("table");
    
    for (let index = 0; index < row; index++) {
        var tr = document.createElement("tr");
        for (let index = 0; index < col; index++) {
            var td = document.createElement("td");
            td.className = "cell";
            tr.append(td);        
        }
        minefield.appendChild(tr);    
    }
    document.getElementById("minefield").innerHTML = minefield.outerHTML;
    fill();
    
}

function fill() {

    var cells = document.getElementsByClassName("cell");

// for (let index = 0; index < cells.length; index++) {
//     cells[0].innerHTML = "<button onclick='foo.call(this)'>:)</button>";
    
// }

for (var item of cells) {
    item.innerHTML = "<button onclick='foo.call(this)'>:)</button>";
}

}


document.getElementById("one").onclick = function() {
    this.innerHTML = "HELLO";
};

var foo = function()
{
    var col = this.parentElement.cellIndex;
    var row = this.parentElement.parentElement.rowIndex;

    this.parentElement.innerHTML = randomBombs[row][col];
};



var bar = function()
{
    var x = document.getElementById("rows").value;
    console.log(x);
    var y = document.getElementById("cols").value;
    console.log(y);
    create(x,y);
    fill();
    randomBombs = setmines(x,y,Math.floor(x*y/5));
};
















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