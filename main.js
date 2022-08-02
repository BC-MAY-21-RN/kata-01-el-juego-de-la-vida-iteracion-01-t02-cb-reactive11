var grid = [,];
var output= '';

// Ingreso de datos tabla
var row = prompt("Ingrese el numero filas");
var column = prompt("Ingrese el numero columnas");

var gen = prompt("Ingrese el numero generaciones");


// Bacterias vivas
var n = prompt("Ingrese el numero de celulas vivas");

function rules(a, b) {
    var neighbour = 0;

    if (grid[a - 1, b] == '*')
        neighbour++;
    if (grid[a + 1, b] == '*')
        neighbour++;
    if (grid[a, b-1] == '*')
        neighbour++;
    if (grid[a, b+1] == '*')
        neighbour++;
    
    if (grid[a-1, b-1] == '*')
        neighbour++;
    if (grid[a-1, b+1] == '*')
        neighbour++;
    if (grid[a+1, b-1] == '*')
        neighbour++;
    if (grid[a+1, b+1] == '*')
        neighbour++;
    
    if (neighbour < 2 || neighbour > 3)
        grid[a, b] = '.'
    
    if (grid[a, b] == '.' && neighbour == 3)
        grid[a, b] = '*'
        
}

// Crear tabla
for (var i = 0; i < column ; i++) {
    for (var j = 0; j < row ; j++) {
        grid[i,j]='.'
    }
}

for (var i = 0; i < n ; i++) {

    var a = Math.floor(Math.random() * column) 
    var b = Math.floor(Math.random() * row) 
    grid[a,b] = '*'
    console.log("A>" + a, "B>" + b)
}

for (var i = 0; i < column ; i++) {
    for (var j = 0; j < row ; j++) {
        output += grid[i, j]
    }
    output += ("\n");
}
console.log(output)
output = ""

for (var k = 1; k < gen; k++){
    console.log(`Generacion No.${k}`)
    for (var i = 0; i < column ; i++) {
        for (var j = 0; j < row; j++) {
            rules(i, j)
            output += grid[i, j]
        }
        output += ("\n");
    }
    console.log(output)
    output = ""
}