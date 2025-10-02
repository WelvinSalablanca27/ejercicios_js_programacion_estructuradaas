const mascotas = [
    { nombre: "Luna", edad: 3, tipo: "Perro", peso: 10.5 },
    { nombre: "Max", edad: 5, tipo: "Gato", peso: 4.2 },
    { nombre: "Coco", edad: 1, tipo: "Conejo", peso: 2.3 },
    { nombre: "Rocky", edad: 7, tipo: "Perro", peso: 15.8 },
    { nombre: "Milo", edad: 2, tipo: "Gato", peso: 3.9 },
    { nombre: "Bella", edad: 4, tipo: "Perro", peso: 8.7 },
    { nombre: "Toby", edad: 6, tipo: "Conejo", peso: 2.8 },
    { nombre: "Simba", edad: 3, tipo: "Gato", peso: 5.1 },
    { nombre: "Nala", edad: 2, tipo: "Perro", peso: 12.4 },
    { nombre: "Oreo", edad: 5, tipo: "Gato", peso: 4.8 },
    { nombre: "Daisy", edad: 1, tipo: "Conejo", peso: 1.9 },
    { nombre: "Zeus", edad: 8, tipo: "Perro", peso: 20.1 },
    { nombre: "Mimi", edad: 4, tipo: "Gato", peso: 4.5 },
    { nombre: "Bunny", edad: 3, tipo: "Conejo", peso: 2.5 },
    { nombre: "Thor", edad: 6, tipo: "Perro", peso: 18.3 }
];

// 1. Ordenar las mascotas por edad ascendente
const ordenEdadAsc = [...mascotas].sort((a, b) => a.edad - b.edad);
console.log("Por edad ascendente:", ordenEdadAsc);

// 2. Ordenar las mascotas por nombre de forma alfabética
const ordenNombre = [...mascotas].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Por nombre (A-Z):", ordenNombre);

// 3. Ordenar las mascotas por peso de forma descendente
const ordenPesoDesc = [...mascotas].sort((a, b) => b.peso - a.peso);
console.log("Por peso descendente:", ordenPesoDesc);

// 4. Ordenar las mascotas por tipo alfabéticamente y, si tienen el mismo tipo, por edad ascendente
const ordenTipoEdad = [...mascotas].sort((a, b) => {
    if (a.tipo === b.tipo) {
        return a.edad - b.edad;
       }
    return a.tipo.localeCompare(b.tipo);
});
console.log("Por tipo y edad:", ordenTipoEdad);

// 5. Invertir el orden del arreglo de mascotas
const invertido = [...mascotas].reverse();
console.log("Arreglo invertido:", invertido);

// 6. Crear un nuevo arreglo con los nombres de las mascotas en mayúsculas
const nombresMayus = mascotas.map(m => m.nombre.toUpperCase());
console.log("Nombres en mayúsculas:", nombresMayus);

// 7. Calcular el peso total de todas las mascotas
const pesoTotal = mascotas.reduce((total, m) => total + m.peso, 0);
console.log("Peso total:", pesoTotal);
