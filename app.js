
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


const calcularAreaRectangulo = (base,altura) => {
    let area = base*altura;
    return area;
}

let res = calcularAreaRectangulo(5,2);

document.write(res);