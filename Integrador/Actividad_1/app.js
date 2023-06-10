// 1) Crear un programa que pida al usuario que ingrese un número y le devuelva un mensaje indicando si el número es positivo, negativo o si es 0.

const positivoNegativo = (num) => {
    if (num > 0) {
        return "El número es postivo";
    }
    if (num < 0) {
        return "El número es negativo";
    }
    if (num == 0) {
        return "El número es el cero";
    }
}

let numero = prompt("ingrese un número");

console.log(positivoNegativo(numero));
