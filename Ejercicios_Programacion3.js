// Función anónima asignada a una variable
const sumar = function (a, b) {
    return a + b;
};

console.log(sumar(3, 4));

// Función con asignación de nombre
function sumar(a, b) {
    return a + b;
};

console.log(sumar(3, 4));

try {
    console.log("Intentando dividir...");
    let resultado = 10 / 0; // No error real, da Infinity
    console.log(resultado);
} catch (error) {
    console.log("Error atrapado:", error.message);
} finally {
    console.log("Fin del bloque");
}

function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("No se puede dividir entre 0");
        }
        return a / b;
    } catch (error) {
        return "Error: " + error.message;
    } finally {
        console.log("Fin del bloque");
    }
}
console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // Error: No se puede dividir entre 0



const colores = ["rojo", "verde", "azul"];
const nombre = ["Juan", "José", "Ana"];
console.log(colores[0]); // "rojo"
console.log(colores[2]); // "azul"
console.log(nombre[0]);


const persona = {
    nombre: "Ana",
    hobbies: ["leer", "pintar", "correr"]
};
console.log(persona.hobbies[1]); // "pintar"


const personas = [
    { nombre: "Luis", edad: 30 },
    { nombre: "Marta", edad: 25 }
];
console.log(personas[0].nombre); // "Luis"
console.log(personas[1].edad); // 25


const usuarios = { nombre: "Carlos", edad: 28 };
console.log(usuario.nombre); // "Carlos"
console.log(usuario.edad); // 28

const usuario = { nombre: "Ana", "correo ": "ana@mail.com" };
console.log(usuario["nombre"]); // "Ana"
console.log(usuario["correo-personal"]); // "ana@mail.com"


const empresa = {
    nombre: "TechCorp",
    empleados: [
        {
            nombre: "Ana",
            direccion: { ciudad: "Madrid", codigoPostal: 28001 }
        },
        {
            nombre: "Luis",
            direccion: { ciudad: "Barcelona", codigoPostal: 8001 }
        }
    ]
};

console.log(empresa.empleados[0].nombre)
console.log(empresa.empleados[0].nombre);// "Ana"
console.log(empresa.empleados[1].direccion.ciudad);// "Barcelona"
console.log(empresa.empleados[0]["direccion"]["codigoPostal"]);// 28001// El último también se puede escribir de esta forma:
console.log(empresa.empleados[0].direccion.codigoPostal);



const personaa = {
    nombre: "Carlos",
    edad: 28,
    direccion: {
        ciudad: "Madrid",
        codigoPostal: 28001
    },
    hobbies: ["leer", "correr", "pintar"]
};

const mostrarNombre = () => personaa.nombre;
const mostrarEdad = () => personaa.edad;
const mostrarCiudad = () => personaa.direccion.ciudad;
const mostrarCodigoPostal = () => {
    return personaa["direccion"]["codigoPostal"];
}

const mostrarHobbie = () => {
    return personaa.hobbies[1];
}

console.log(mostrarNombre());
console.log(mostrarEdad());
console.log(mostrarCiudad());
console.log(mostrarCodigoPostal());
console.log(mostrarHobbie());



const universidad = {
    nombre: "Universidad Central",
    ubicacion: {
        ciudad: "Sevilla",
        direccion: {
            calle: "Av. Principal",
            numero: 123
        }
    },
    facultades: [
        {
            nombre: "Ingeniería",
            carreras: [
                {
                    nombre: "Informática",
                    estudiantes: [
                        { nombre: "Laura", edad: 20, hobbies: ["programar", "ajedrez"] },
                        { nombre: "Javier", edad: 22, hobbies: ["fútbol", "cine"] }
                    ]
                },
                {
                    nombre: "Civil",
                    estudiantes: [
                        { nombre: "Sofía", edad: 21, hobbies: ["fotografía", "leer"] }
                    ]
                }
            ]
        },
        {
            nombre: "Derecho",
            carreras: [
                {
                    nombre: "Derecho Penal",
                    estudiantes: [
                        { nombre: "Andrés", edad: 23, hobbies: ["debate", "natación"] }
                    ]
                }
            ]
        }
    ]
};



const mostrarNombreUniversidad = () => universidad.nombre;
const mostrarCalle = () => universidad.ubicacion.direccion.calle;
const mostrarPrimeraFacultad = () => universidad.facultades[0].nombre;
const mostrarSegundaCarreraPrimeraFacultad = () => universidad.facultades[0].carreras[1].nombre;
const mostrarPrimerEstudianteInformatica = () => universidad.facultades[0].carreras[0].estudiantes[0].nombre;
const mostrarSegundoHobbyLaura = () => universidad.facultades[0].carreras[0].estudiantes[0].hobbies[1];
const mostrarEdadSofia = () => universidad.facultades[0].carreras[1].estudiantes[0].edad;
const mostrarPrimerHobbyDerechoPenal = () => universidad.facultades[1].carreras[0].estudiantes[0].hobbies[0];


console.log(mostrarNombreUniversidad());       
console.log(mostrarCalle());                    
console.log(mostrarPrimeraFacultad());         
console.log(mostrarSegundaCarreraPrimeraFacultad()); 
console.log(mostrarPrimerEstudianteInformatica());   
console.log(mostrarSegundoHobbyLaura());        
console.log(mostrarEdadSofia());                
console.log(mostrarPrimerHobbyDerechoPenal())

