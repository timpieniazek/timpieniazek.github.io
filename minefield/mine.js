

function create(row, col){
    var minefield = document.getElementById("MINEFIELD");
    for (let index = 0; index < row; index++) {
        var tr = document.createElement("tr");
        for (let index = 0; index < col; index++) {
            var td = document.createElement("td");
            td.className = "cell";
            tr.append(td);        
        }
        minefield.appendChild(tr);        
    }
}

create(5, 5);


var cells = document.getElementsByClassName("cell");

for (var item of cells) {
    item.innerHTML = "<button onclick='foo.call(this)'>:)</button>";
}

document.getElementById("one").onclick = function() {
    this.innerHTML = "HELLO";
};

var foo = function()
{
    this.parentElement.innerHTML = "Not a button";
};