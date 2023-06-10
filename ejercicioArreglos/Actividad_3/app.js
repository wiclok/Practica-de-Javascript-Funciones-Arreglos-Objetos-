// 3) Escribe una función llamada "obtenerPromedioPonderado" que reciba dos arreglos: uno con las notas de los estudiantes y otro con los pesos correspondientes. La función debe calcular y devolver el promedio ponderado de las notas.

const obtenerPromedioPonderado = (notas, pesos) =>{
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

  //Ejemplo de uso:
let notas = [8, 7, 9];
let pesos = [0.3, 0.4, 0.3];
let promedio = obtenerPromedioPonderado(notas, pesos);
console.log("El promedio ponderado es: " + promedio);