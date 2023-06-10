// 2) Implementa una función llamada "obtenerPares" que tome un arreglo de números como parámetro y devuelva un nuevo arreglo con solo los números pares del arreglo original.

const obtenerPares = (Array) => {
    const pares = [];

    for (let i = 0; i < Array.length; i++) {
        if (Array[i] % 2 === 0) {
            pares.push(Array[i]);
        }
    }
    return pares;
}


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(obtenerPares(numeros));