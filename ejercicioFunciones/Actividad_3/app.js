// 3) Implementa una función llamada "esPalindromo" que reciba una cadena como parámetro y devuelva true si la cadena es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), y false en caso contrario. Por ejemplo, para la cadena "radar" la función debería devolver true.


const esPalindromo = (cadena) =>{
    let array = cadena.split("");
    let reverse = array.reverse();

    return cadena == reverse.join("") ? "Si es" : "No es";
}


console.log(esPalindromo("radar"));