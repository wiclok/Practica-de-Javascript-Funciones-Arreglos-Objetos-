// 1) Crea una función llamada "obtenerSuma" que reciba un arreglo de números como parámetro y devuelva la suma de todos los elementos del arreglo.

const obtenerSuma = (arreglo) =>{
    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    return suma;
}

let numeros = [1,2,3,4,5];
console.log(obtenerSuma(numeros));