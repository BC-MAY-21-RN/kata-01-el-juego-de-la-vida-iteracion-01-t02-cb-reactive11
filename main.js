var grid = [,];
var output= '';

// Ingreso de datos tabla
var row = prompt("Ingrese el numero filas");
var column = prompt("Ingrese el numero columnas");


// Bacterias vivas
var n = prompt("Ingrese el numero de celulas vivas");


// Crear tabla
for (var i = 0; i < column ; i++) {
    for (var j = 0; j < row ; j++) {
        grid[i,j]='.'
    }
}

for (var i = 0; i < n ; i++) {

    var a = Math.floor(Math.random() * column) 
    var b = Math.floor(Math.random() * row) 
    grid[a, b] = '*'
    console.log("A>" + a, "B>" + b)
}

for (var i = 0; i < column ; i++) {
    for (var j = 0; j < row ; j++) {
        output += (grid[i, j])
    }
    output += ("\n");
}
console.log(output)