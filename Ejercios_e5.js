let arreglo = [1, 2, 3, "text",true];

const arreglo2 = [1, 2, 3, "text", true];

let arreglo3 = new Array [1, 2, 3];
 
let arreglo4 = [];

let arreglo5 = [{}, {}, {}];

let arreglo6 = [{"nombre" : "Welvin salablanca", "edad": 20}, {}, {}]

let arreglo7 = [[{}, {}],["A", 1, 2], [true, flase]]

let numeros = [1, 2, 3];
let longitud1 = numeros.push(4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(longitud1); // 5

let letras = ['b', 'c'];
let longitud2 = letras.unshift('a');
console.log(letras); // ['a', 'b', 'c']
console.log(longitud2); // 3

let frutas = ['manzana', 'banana', 'naranja'];
let ultima = frutas.pop();
console.log(frutas); // ['manzana', 'banana']
console.log(ultima); // 'naranja'

let colores = ['rojo', 'verde', 'azul'];
let primero = colores.shift();
console.log(colores); // ['verde', 'azul']
console.log(primero); // 'rojo'

let numeros1 = [10, 20, 30, 20, 40];
let indice = numeros1.indexOf(20); // 1
let indiceDesde2 = numeros1.indexOf(20, 2); // 3
console.log(indice); // 1
console.log(indiceDesde2); // 3

let nums = [1, 2, 3];
console.log(nums.length); // 3
nums.length = 1; // Trunca a [1]
nums.length = 5; // Extiende a [1, undefined, undefined,

let numeros3 = [3, 1, 4, 2];
numeros3.sort((a, b) => a - b); // Orden ascendente
console.log(numeros3); // [1, 2, 3, 4]

let carrecteres = ['z', 'a','x','m','j'];
carrecteres.sort();
console.log(carrecteres);

let cadena = ['z','2','a','10','x','5'];
cadena.sort();
console.log(cadena); //[10, 2, 5,'a','x','z']

let palabras = ['hola', 'mundo'];
let texto = palabras.join(' ');
console.log(texto) // 'hola mundo'

let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2, [27, 8, 5], 'Welvin');
arr1.push(arr2,[5, 6, 9], 'Welvin');
console.log(arr1);
console.log(combinado); // [1, 2, 3, 4, 5] |


let colores2 = ['rojo', 'verde', 'azul'];
colores.forEach(color => console.log(color));
// Imprime: rojo, verde, azul

for (let color of colores) {
    console.log(color);
}

for (let i = 0; i < colores.length; i++){
    console.long(colores[i]);
}

let numeros5 = [1, 2, 3];
let dobles = numeros5.map(x => x * 2); // la x es la referencia al arreglo o numero de cada arreglo 
console.log(dobles); // [2, 4, 6]

let datos = [53, 21, 22, 51, 37, 88, 1000, 4];
let pares = datos.filter(x => x % 2 === 0);
console.log(pares); // [2, 4]


let dato = [53, 21, 22, 51, 37, 88, 1000, 4];
let impares = dato.filter(x => x % 2 === 0);
console.log(impares); // [2, 4]

let precios = [40, 20, 30, 40];
let suma = numeros.reduce((acumulador, valoractual) => acumulador + valoractual, 0);
console.log(suma); // 130

