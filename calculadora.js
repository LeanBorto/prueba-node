let suma = require('./sumar');
let resta = require('./restar');
let multiplica = require('./multiplicacion');
let divide = require('./dividir');

let n1 = 10;
let n2 = 2;

console.log("Suma: " + suma ( n1 , n2 ));
console.log("Resta: "+ resta ( n1 , n2 ));

n1 = 15;
n2 = 5;
console.log("Multiplicacion: " + multiplica ( n1 , n2 ));

n1 = 100;
n2 = 0;

console.log("Multiplicacion: " + multiplica ( n1 , n2 ));

n1 = 100;
n2 = 20;

console.log("Division: " + divide ( n1 , n2));

n1 = 100;
n2 = 0;

console.log("Division: " + divide ( n1 , n2));

