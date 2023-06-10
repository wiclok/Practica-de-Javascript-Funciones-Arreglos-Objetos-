// 4) Crea una función llamada "generarNumeroAleatorio" que no tome parámetros y devuelva un número entero aleatorio entre 1 y 10.

const generarNumeroAleatorio = (min,max) => {
    return parseInt(Math.random() * (max - min)) + min;
}

for (let i = 0; i < 100; i++) {
    console.log(generarNumeroAleatorio(1,11));
}