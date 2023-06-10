// 1) Crea un objeto llamado "producto" con las propiedades "nombre", "precio" y "cantidad". Luego, escribe una función llamada "calcularTotal" que tome un objeto producto como parámetro y devuelva el total a pagar (precio * cantidad).


let producto = {
    nombre: "cargador para celular",
    precio: 1500,
    cantidad: 5
}


const calcularTotal = () => {
    return producto.precio*producto.cantidad;
}

console.log(calcularTotal(producto));