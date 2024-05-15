const prompt = require('prompt-sync')();
console.log('Ingresa un usuario nuevo en cada iteracion, cuando quieras parar ingresa q')
let arrayNombres = []
let nombre
let longitud

do {
    nombre = prompt('Ingresa un nombre: ')
    if (nombre !='q'){
        arrayNombres.push(nombre)
    }  
} while (nombre != 'q');
let repetido = 0;
for (let i = 0; i < arrayNombres.length; i++) {
    for (let j = 0; j < arrayNombres.length; j++) {
        if (arrayNombres[i] == arrayNombres[j] && i != j) { //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
            repetido++;
         }
     }
 }
longitud = arrayNombres.sort( ( a,b ) => b.length - a.length )

console.log('Cantidad de nombres ingresados: ', arrayNombres.length)
console.log('Cantidad de nombres repetidos: ', repetido/2)
console.log('Nombre mas largo ', longitud[0])
console.log('Nombre mas corto: ', longitud[longitud.length-1])
//const name = prompt('Ingresa tu nombre: ')
//console.log('Hola', name);