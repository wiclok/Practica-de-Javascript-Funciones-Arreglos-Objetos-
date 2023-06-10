// 2) Implementa un objeto llamado "persona" con las propiedades "nombre", "edad" y "profesion".A continuación, escribe una función llamada "presentarPersona" que tome un objeto persona como parámetro y muestre en la consola una presentación de la persona.

let persona = {
    nombre: "Brian",
    edad: 18,
    profesion: "estudiante"
}


const presentarPersona = () => {
    return `Hola, soy ${persona.nombre} y tengo ${persona.edad} años, actualmete soy ${persona.profesion}`;
}


console.log(presentarPersona(persona));