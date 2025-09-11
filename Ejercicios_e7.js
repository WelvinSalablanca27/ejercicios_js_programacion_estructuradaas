// 1. Agregar al final
const agregarAlFinal = (arr, ...elementos) => [...arr, ...elementos];
const arreglo1 = [1, 2, 3];
console.log(agregarAlFinal(arreglo1, 4, 5)); // [1, 2, 3, 4, 5]


// 2. Agregar al inicio
const agregarAlInicio = (arr, ...elementos) => [...elementos, ...arr];
const arreglo2 = [3, 4, 5];
console.log(agregarAlInicio(arreglo2, 1, 2)); // [1, 2, 3, 4, 5]

// 3. Eliminar último elemento
const eliminarUltimo = arr => arr.pop();
const arreglo3 = [10, 20, 30];
console.log(eliminarUltimo(arreglo3)); // 30
console.log(arreglo3); // [10, 20]

// 4. Eliminar primer elemento
const eliminarPrimero = arr => arr.shift();
const arreglo4 = ['a', 'b', 'c'];
console.log(eliminarPrimero(arreglo4)); // 'a'
console.log(arreglo4); // ['b', 'c']

// 5. Obtener índice
const obtenerIndice = (arr, elemento, desde = 0) => arr.indexOf(elemento, desde);
const arreglo5 = ['x', 'y', 'z', 'x'];
console.log(obtenerIndice(arreglo5, 'x')); // 0
console.log(obtenerIndice(arreglo5, 'x', 1)); // 3

// 6. Contar elementos
const contarElementos = arr => arr.length;
const arreglo6 = [1, 2, 3, 4];
console.log(contarElementos(arreglo6)); // 4

// 7. Ordenar ascendente
const ordenarAscendente = arr => [...arr].sort((a, b) => a - b);
const arreglo7 = [9, 2, 5, 1];
console.log(ordenarAscendente(arreglo7)); // [1, 2, 5, 9]

// 8. Unir con separador
const unirConSeparador = (arr, separador) => arr.join(separador);
const arreglo8 = ['Hola', 'Mundo', 'JS'];
console.log(unirConSeparador(arreglo8, ' - ')); // "Hola - Mundo - JS"

// 9. Combinar arreglos o elementos
const combinarElementos = (...elementos) => [].concat(...elementos);
const arreglo9a = [1, 2];
const arreglo9b = [3, 4];
const elemento9 = 5;
console.log(combinarElementos(arreglo9a, arreglo9b, elemento9)); // [1, 2, 3, 4, 5]

// 10. forEach
const paraCadaElemento = (arr, callback) => arr.forEach(callback);
const arreglo10 = [10, 20, 30];
paraCadaElemento(arreglo10, el => console.log(el * 2)); // 20, 40, 60

// 11. map
const mapearElementos = (arr, callback) => arr.map(callback);
const arreglo11 = [1, 2, 3];
console.log(mapearElementos(arreglo11, el => el * el)); // [1, 4, 9]

// 12. filter
const filtrarElementos = (arr, callback) => arr.filter(callback);
const arreglo12 = [1, 2, 3, 4, 5];
console.log(filtrarElementos(arreglo12, el => el % 2 === 0)); // [2, 4]

// 13. reduce
const reducirArreglo = (arr, callback, valorInicial) =>
  valorInicial !== undefined
    ? arr.reduce(callback, valorInicial)
    : arr.reduce(callback);

const arreglo13 = [1, 2, 3, 4];
console.log(reducirArreglo(arreglo13, (acum, val) => acum + val)); // 10
console.log(reducirArreglo(arreglo13, (acum, val) => acum * val, 1)); // 24