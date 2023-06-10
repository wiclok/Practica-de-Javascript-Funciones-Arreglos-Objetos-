// 3) Crear un programa que convierta la temperatura de grados Celsius a Faranheit y viceversa. El usuario debería ingresar la temperatura y a que unidad la quiere convertir.


let temperatura = prompt("Ingrese la temperatura:");
let unidad = prompt("Ingrese la unidad de temperatura ('C' para Celsius o 'F' para Fahrenheit):");

// Función para convertir de Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Función para convertir de Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Convertir la temperatura según la elección del usuario
let temperaturaConvertida;
let unidadConvertida;

if (unidad.toUpperCase() === 'C') {
    temperaturaConvertida = celsiusAFahrenheit(parseFloat(temperatura));
    unidadConvertida = 'Fahrenheit';
} else if (unidad.toUpperCase() === 'F') {
    temperaturaConvertida = fahrenheitACelsius(parseFloat(temperatura));
    unidadConvertida = 'Celsius';
}

// Mostrar el resultado
console.log(("La temperatura convertida es: " + temperaturaConvertida + " " + unidadConvertida));