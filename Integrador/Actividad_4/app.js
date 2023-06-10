// 4) Crear un programa para calcular el total de una compra. Para ello se tiene que pedir al usuario que ingrese el precio de cada producto y cuando se le pide que ingrese la palabra "total" devolverle el total de la compra.

let precios = [];
let total = 0;


while (true) {
    let precio = prompt("Ingrese el precio del producto (o escriba 'total' para obtener el total):");

    if (precio.toLowerCase() === 'total') {
        break;
    }

    precio = parseFloat(precio);


    if (!isNaN(precio) && precio >= 0) {
    precios.push(precio);
    total += precio;
    } else {
    console.log("Precio inválido. Intente nuevamente.");
    }
}


console.log("El total de la compra es: $" + total.toFixed(2));