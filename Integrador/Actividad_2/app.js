// 2) Crear un programa que pida un numero al usuario y le devuelva un mensaje diciendo si el número es primo o no.

let numero = prompt("Ingrese un número:");


let esPrimo = true;

if (numero <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        esPrimo = false;
        break;
    }
    }
}

// Mostrar el resultado
if (esPrimo) {
    console.log("El número " + numero + " es primo.");
} else {
    console.log("El número " + numero + " no es primo.");
}
