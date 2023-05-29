
// Ejercicios de Funciones

// 1) Escribe una función llamada "esMayorEdad" que reciba una edad como parámetro y devuelva true si la edad es mayor o igual a 18, y false en caso contrario.

// const esMayorEdad = (edad) => {
//     if (edad >= 18) {
//         return true;
//     }
//     if (edad < 18) {
//         return false;
//     }
// }

// let res1 = esMayorEdad(12);
// let res2 = esMayorEdad(18)

// document.write(res1 + "<br>");
// document.write(res2 + "<br>")




// 2) Crea una función llamada "calcularAreaRectangulo" que tome dos parámetros: base y altura. La función debe calcular y devolver el área del rectángulo utilizando la fórmula área = base *altura.


// const calcularAreaRectangulo = (base,altura) => {
//     let area = base*altura;
//     return area;
// }

// let res = calcularAreaRectangulo(5,2);

// document.write(res);





// 3) Implementa una función llamada "esPalindromo" que reciba una cadena como parámetro y devuelva true si la cadena es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), y false en caso contrario. Por ejemplo, para la cadena "radar" la función debería devolver true.


// const esPalindromo = (cadena) =>{
//     let array = cadena.split("");
//     let reverse = array.reverse();

//     return cadena == reverse.join("") ? "Si es" : "No es";
// }


// document.write(esPalindromo("radar"));




// 4) Crea una función llamada "generarNumeroAleatorio" que no tome parámetros y devuelva un número entero aleatorio entre 1 y 10.

// const generarNumeroAleatorio = (min,max) => {
//     return parseInt(Math.random() * (max - min)) + min + "<br>";
// }

// for (let i = 0; i < 100; i++) {
//     document.write(generarNumeroAleatorio(1,11))
// }





// Ejercicios de Arreglos


// 1) Crea una función llamada "obtenerSuma" que reciba un arreglo de números como parámetro y devuelva la suma de todos los elementos del arreglo.

// const obtenerSuma = (arreglo) =>{
//     let suma = 0;

//     for (let i = 0; i < arreglo.length; i++) {
//         suma += arreglo[i];
//     }

//     return suma;
// }

// let numeros = [1,2,3,4,5];
// document.write(obtenerSuma(numeros));





// 2) Implementa una función llamada "obtenerPares" que tome un arreglo de números como parámetro y devuelva un nuevo arreglo con solo los números pares del arreglo original.




// const obtenerPares = (Array) => {
//     const pares = [];

//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i] % 2 === 0) {
//             pares.push(Array[i]);
//         }
//     }
//     return pares;
// }


// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// document.write(obtenerPares(numeros));



// 3) Escribe una función llamada "obtenerPromedioPonderado" que reciba dos arreglos: uno con las notas de los estudiantes y otro con los pesos correspondientes. La función debe calcular y devolver el promedio ponderado de las notas.

function obtenerPromedioPonderado(notas, pesos) {
    if (notas.length !== pesos.length) {
        throw new Error("Los arreglos deben tener la misma longitud.");
    }

    let sumaNotasPesos = 0;
    let sumaPesos = 0;

    for (let i = 0; i < notas.length; i++) {
        sumaNotasPesos += notas[i] * pesos[i];
        sumaPesos += pesos[i];
    }
    let promedioPonderado = sumaNotasPesos / sumaPesos;

    return promedioPonderado.toFixed(2);
}

  // Ejemplo de uso:
let notas = [8, 7, 9];
let pesos = [0.3, 0.4, 0.3];
let promedio = obtenerPromedioPonderado(notas, pesos);
document.write("El promedio ponderado es: " + promedio);
