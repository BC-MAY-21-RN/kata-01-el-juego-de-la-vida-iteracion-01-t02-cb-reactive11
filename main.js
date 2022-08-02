var grid = [,];

var row = prompt("Ingrese el numero filas");
var column = prompt("Ingrese el numero columnas");

var n = prompt("Ingrese el numero de celulas vivas");

for (var i = 0; i < column ; i++) {
    for (var i = 0; i < row ; i++) {
        grid[i, j] = '.';
    }
}

for (var i = 0; i < n ; i++) {
    console.log("Ingrese el vector de la celula" + n)

    const a = Math.floor(Math.random() * 1) 
    const b = Math.floor(Math.random() * 1) 
    grid[a, b] = '*'
    console.log("A>" + a, "B>" + b)
}

for (var i = 0; i < column ; i++) {
    for (var j = 0; j < row ; j++) {
        console.log(grid[i, j])
    }
    console.log("\n");
}