

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
        console.log(minefield);     
    }
    document.getElementById("minefield").innerHTML = minefield.outerHTML;
    fill();
    
}

create(10, 10);
bar();
function fill() {

    var cells = document.getElementsByClassName("cell");

for (var item of cells) {
    item.innerHTML = "<button onclick='foo.call(this)'>:)</button>";
}

}


document.getElementById("one").onclick = function() {
    this.innerHTML = "HELLO";
};

var foo = function()
{
    this.parentElement.innerHTML = "Not a button";
};



function bar()
{
    var x = document.getElementById("rows").value;
    console.log(x);
    var y = document.getElementById("cols").value;
    console.log(y);
    create(x,y);
    fill();

};