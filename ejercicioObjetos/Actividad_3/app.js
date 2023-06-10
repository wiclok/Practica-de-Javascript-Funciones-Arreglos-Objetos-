// 3) Crea una función llamada "esMayorEdad" que reciba un objeto persona como parámetro y devuelva true si la persona es mayor de edad (edad mayor o igual a 18), y false en caso contrario.



const esMayorEdad = (persona) => {
    if (persona >= 18) {
        return true;
    }
    if (persona < 18) {
        return false;
    }
}

let persona1 = {
    nombre: "Brian",
    edad: 18,
    profesion: "estudiante"
}

let persona2 = {
    nombre: "Juan",
    edad: 12,
    profesion: "estudiante"
}

console.log(esMayorEdad(persona1.edad));
console.log(esMayorEdad(persona2.edad));