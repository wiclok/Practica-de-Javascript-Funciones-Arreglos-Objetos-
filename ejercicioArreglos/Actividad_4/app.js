// 4) Crea una función llamada "obtenerMaximo" que tome un arreglo de números como parámetro y devuelva el número máximo encontrado en el arreglo.

function obtenerMaximo(arr) {
    if (arr.length === 0) {
        throw new Error("El arreglo está vacío.");
    }

    let maximo = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximo) {
        maximo = arr[i];
        }
    }

    return maximo;
}

  // Ejemplo de uso:
let numeros = [5, 8, 3, 9, 2];
console.log("el número máximo es: " + obtenerMaximo(numeros));