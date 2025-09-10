let agrearElementofinal = (arreglo, elementos) => {
    arreglo.push(elementos);
    return nuevArreglo;
}

let numeros2 = [1, 2, 3];
console.log(agrearElementofinal)((numeros, 0));


let agrearElementoInicio = (arreglo, elemento) => {
    arreglo.unshift(elemento);
    return arreglo;
}

let numeros = [1, 2, 3];
console.log(agrearElementoInicio)((numeros2, 0));

//ejercios3 
let eliminarElementoFinal =(arreglo) => {
let ultimo = arreglo.pop();
return ultimo;
}


let numeros3 = [24, 32, 89, 52];
console.log(eliminarElementoFinal(numeros3));


//ejercios4  
let eliminarneydevuelaElemento = (arreglo, elemento)=>{
    let primerElemento = arreglo.shift();
return primerElemento();

}
let numeros4= [24, 32, 89, 52];
console.log(eliminarElementoFinal(numeros4));
