// Crear una cola
let cola = [];
// Agregar elementos (enqueue)

cola.push("Tarea 1"); // ["Tarea 1"]
cola.push("Tarea 2"); // ["Tarea 1", "Tarea 2"]
cola.push("Tarea 3"); // ["Tarea 1", "Tarea 2", "Tarea 3"]

console.log(cola);  // ["Tarea 1", "Tarea 2", "Tarea 3"]

// Eliminar elementos (dequeue)
console.log(cola.shift()); // "Tarea 1" (sale el primero)
console.log(cola); // ["Tarea 2", "Tarea 3"]
console.log(cola.shift()); // "Tarea 2"
console.log(cola); // ["Tarea 3"]

// Crear una pila
let pila = [];
// Agregar elementos (push)
pila.push("Plato 1"); // ["Plato 1"]
pila.push("Plato 2"); // ["Plato 1", "Plato 2"]
pila.push("Plato 3"); // ["Plato 1", "Plato 2", "Plato 3"]

// Eliminar elementos (pop)
console.log(pila.pop(), "No ha sido usado");// "Plato 3" (sale el último)
console.log(pila); // ["Plato 1", "Plato 2"]
console.log(pila.pop(), "No ha sido usado"); // "Plato 2"
console.log(pila); // ["Plato 1"]

// Arreglo para la cola
let colaTareas = [];

// Accion agregar al final
const agregarAlFinal = (tarea) => {
  colaTareas.push(tarea);
  console.log(`Tarea agregada: ${tarea}. Cola actual: ${colaTareas}`);
};
//accion para remover el inicio
const removerDelInicio = () => {
  if (colaTareas.length === 0) {
    console.log("Cola vacía.");
    return null;
  }

  const tareaProcesada = colaTareas.shift();
  console.log(`Tarea procesada: ${tareaProcesada}. Cola actual: ${colaTareas}`);
  return tareaProcesada;
};

// simulacion del proceso
agregarAlFinal("Tarea A"); // Cola: ["Tarea A"]
agregarAlFinal("Tarea B"); // Cola: ["Tarea A", "Tarea B"]
agregarAlFinal("Tarea C"); // Cola: ["Tarea A", "Tarea B", "Tarea C"]
removerDelInicio(); // Procesa "Tarea A", Cola: ["Tarea B", "Tarea C"]
removerDelInicio(); // Procesa "Tarea B", Cola: ["Tarea C"]
removerDelInicio(); // Procesa "Tarea C", Cola: []
removerDelInicio(); // Cola vacía

let colaMensajes = [];
const tamanoMaximo = 5;

const insertarAlFinal = (mensaje) => {
  colaMensajes.push(mensaje);

  if (colaMensajes.length > tamanoMaximo) {
    const mensajeEliminado = colaMensajes.shift();
    console.log(`Límite excedido. Eliminado: ${mensajeEliminado}. Cola actual: ${colaMensajes}`);
  } else {
    console.log(`Mensaje insertado: ${mensaje}. Cola actual: ${colaMensajes}`);
  }
};

const extraerDelInicio = () => {
  if (colaMensajes.length === 0) {
    console.log("Cola vacía.");
    return null;
  }

  const mensajeExtraido = colaMensajes.shift();
  console.log(`Mensaje extraído: ${mensajeExtraido}. Cola actual: ${colaMensajes}`);
  return mensajeExtraido;
};

insertarAlFinal("Mensaje 1"); // Cola: ["Mensaje 1"]
insertarAlFinal("Mensaje 2"); // Cola: ["Mensaje 1", "Mensaje 2"]
insertarAlFinal("Mensaje 3"); // Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3"]
insertarAlFinal("Mensaje 4"); // Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4"]
insertarAlFinal("Mensaje 5"); // Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4", "Mensaje 5"]

insertarAlFinal("Mensaje 6");
// Límite excedido → elimina "Mensaje 1"
// Cola: ["Mensaje 2", "Mensaje 3", "Mensaje 4", "Mensaje 5", "Mensaje 6"]

extraerDelInicio();
// Extrae "Mensaje 2"
// Cola: ["Mensaje 3", "Mensaje 4", "Mensaje 5", "Mensaje 6"


// Arreglo para la cola
let lineaEspera = [];

// Acción para unir al final (flecha)
const unirAlFinal = (persona) => {
  lineaEspera.push(persona);
  console.log('Persona unida: ${persona}. Linea actual: ${lineaEspera}');
}
// Acción para atender del inicio (flecha)
const atenderDelInicio = () => {
  if (lineaEspera.length === 0) {
    console.log("Línea vacía, nadie para atender. ");
    return null;
  }
  const personaAtendida = lineaEspera.shift();
  console.log('Persona atendida: ${personaAtendida}. Linea actual: ${lineaEspera}');
  return personaAtendida;
};

// Simulación del proceso
unirAlFinal("Persona X");// Linea: ["Persona X" ]
unirAlFinal("Persona Y");// Linea: ["Persona X", "Persona Y" ]
unirAlFinal("Persona Z");// Linea: ["Persona X", "Persona Y", "Persona Z" ]
atenderDelInicio();// Atiende "Persona X", Linea: ["Persona Y", "Persona Z"]
atenderDelInicio();// Atiende "Persona Y", Línea: ["Persona Z"]
atenderDelInicio();// Atiende "Persona Y", Línea: ["Persona Z"]
atenderDelInicio();// Linea vacia


// Arreglo para la pila
let historialPaginas = [];

// Acción para agregar pagina (flecha)
const agregarUltimaPagina = (url) => {
historialPaginas.push(url);
console. log('Pagina visitada: ${url}. Historial: ${historialPaginas}' );
};

// Acción para retroceder (flecha)
const retrocederPagina = ( ) => {
if (historialPaginas. length === 0) {
console. log("Historial vacío.");
return null;
}
const pagina = historialPaginas.pop( );
console. log('Retrocediendo a: ${pagina}. Historial: ${historialPaginas}');
return pagina;
};

// Simulación del proceso
agregarUltimaPagina("inicio.com");// Página visitada: inicio.com. Historial: [inicio.com]
agregarUltimaPagina("articulos.com"); // Página visitada: articulos.com. Historial: [inicio.com, articulos.com]
agregarUltimaPagina("detalles.com");// Pagina visitada: detalles.com. Historial: [inicio.com, articulos.com, detalles.com
retrocederPagina();// Retrocediendo a: detalles.com. Historial: [inicio.com, articulos.com]
retrocederPagina(); // Retrocediendo a: articulos.com. Historial: [iniciocom]

// Arreglo para la pila
let pilaNotificaciones = [];

// Acción para mostrar notificación (flecha)
const mostrarNotificacion = (mensaje) => {
pilaNotificaciones.push(mensaje);
console. log('Notificación: ${mensaje}. Pila: ${pilaNotificaciones}' );
};

// Acción para cerrar notificación (flecha)
const cerrarNotificacion = ( ) => {
if (pilaNotificaciones. length === 0) {
console. log("No hay notificaciones.");
return null;
}

const notificacion = pilaNotificaciones.pop( );
console. log('Cerrada: ${notificacion}. Pila: ${pilaNotificaciones}' );
return notificacion;
};

// Simulación del proceso
mostrarNotificacion("Mensaje nuevo");// Notificación: Mensaje nuevo. Pila: [Mensaje nuevo]
mostrarNotificacion("Batería baja");// Notificación: Batería baja. Pila: [Mensaje nuevo, Batería baja]
mostrarNotificacion("Actualización");// Notificación: Actualización. Pila: [Mensaje nuevo, Batería baja, Actualizacion]
cerrarNotificacion();// Cerrada: Actualización. Pila: [Mensaje nuevo, Batería baja]
cerrarNotificacion();// Cerrada: Batería baja. Pila: [Mensaje nuevo]

