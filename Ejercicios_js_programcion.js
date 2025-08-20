// 1. Declara una variable nombre y asignale tu nombre. Muestra su valor en consola.

let nombre = 'Welvin stiven Salablanca Molina';
console.log (nombre);

// 2. Declara dos variable edad y ciudad. Muestra su valor en consola.

let edad = 30;
let ciudad = "Juigalpa";
console.long('Edad: ${edad}, Ciudad: ${ciudad}');


// 3. Declara una constante PI con valor 3.1416 y muestralas juntas en un solo console.long

const PI = 3.1416;
console.log("Valor de PI: " * PI);

// 4. Declara tres Varaible con valores numerico y calcula su promedio

let a = 50;
let b = 70;
let c = 90;
let promedio = (a + b + c) / 3;
console.log(promedio);

// 5. Declara una variable esMayorDeEdad con un valor y muestrala.

let esMayorDeEdad = true;
console.log("¿Es mayor de edad? " + esMayorDeEdad);

//6. Declara dos números y muestra su suma.
let n1 = 15;
let n2 = 25;
console.log(suma);

// 7. Declara dos números y muestra su resta, multiplicaciones y divisíon.

let num1 = 100;
let num2 = 20;

let resta = num1 - num2;
let multiplicaciones = num1 * num2;
let division = num1 / num2;

console.log('Resta ${resta}, Multiplicaciones: ${multiplicaciones}, Division: ${division}');

// 8. Declara dos números y muestra el resultado de elevar el primero al segundo.

let base = 5;
let exponente = 3;

let resultado = Math.pow(base, exponente); // o base ** exponente
console.log(`${base} elevado a ${exponente} = ${resultado}`);

// 9.Declara una variable precio y otra descuento (en %) y calcula el precio final.

let precio = 100.0;
let descuento = 15.0; // en %

let precioFinal = precio - (precio * descuento / 100);
console.log(`El precio final es: ${precioFinal}`);

//10.Usando un for, muestra en consola los números del 1 al 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//11.Usando un for, muestra en consola la tabla de multiplicar del 5.

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

//12.Usando un while, muestra en consola los números pares del 2 al 20.

let i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

//13.Crea una función saludar que reciba un nombre y muestre un saludo.
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

saludar("Welvin");


//14.Crea una función sumar que reciba dos números y retorne su suma.
function sumar(a, b) {
    return a + b;
}

let resultados = sumar(5, 3);
console.log(`La suma es: ${resultado}`);


 // 15.crea una función flecha mayorDeDos que reciba dos números y reto true si esPar, flase si no lo es.

 function esPar(numero){
     return numero % 2 === 0;
    }

    console.log(esPar(11));
    
//16.Crea una función areaRectangulo que reciba base y altura y retorne su área.

  function areaRectangulo(base, altura) {
    return base * altura;
}

let area = areaRectangulo(5, 3);
console.log(`El área es: ${area}`);

//17. Crea una función flecha multiplicar que reciba dos números y retorne su producto.

const multiplicar = (a, b) => a * b;

console.log(multiplicar(5, 3)); 

//18. Crea una función flecha convertirCelsiusAFahrenheit que reciba grados Celsius y retorne su equivalente en Fahrenheit.

const convertirCelsiusAFahrenheit = (celsius) => (celsius * 9/5) + 32;

console.log(convertirCelsiusAFahrenheit(25)); 


 // 19. crea una función flecha mayorDeDos que reciba dos números y retorne el  mayor.

 let mayorDeDos = (num1, num2) => {
    return num1 > num2 ? num1: num2;
 }

 console.log(mayorDeDos(10, 20));


 //20. Crea una función flecha calcularIVA que reciba un precio y retorne el precio} más IVA (15%).

 const calcularIVA = (precio) => precio * 1.15;

 console.log(calcularIVA(100)); 

//21. Declara un arreglo con 5 nombres y recórrelo con un for mostrando cada nombre.

const nombres = ["Ana", "Luis", "Carlos", "María", "Pedro"];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//22. Declara un arreglo con 5 números y usa un for para mostrar solo los números mayores que 10.

const numeros = [5, 12, 8, 20, 3];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        console.log(numeros[i]);
    }
}


//23. Declara un arreglo con 5 palabras y usa un for para mostrar su longitud (.length).

const palabras = ["manzana", "sol", "computadora", "libro", "casa"];

for (let i = 0; i < palabras.length; i++) {
    console.log(`${palabras[i]} tiene ${palabras[i].length} letras`);
}

//24. Declara un objeto persona con propiedades nombre, edad y ciudad. Usa un for...in para mostrar cada clave y valor.

const persona = {
    nombre: "Welvin",
    edad: 30,
    ciudad: "Madrid"
};

for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}

//25 .Declara un arreglo de objetos con 3 productos (nombre y precio) y usa un for para mostrar solo los nombres de los productos.

const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Teléfono", precio: 800 },
    { nombre: "Tablet", precio: 500 }
];

for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre);
}


