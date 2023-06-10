// 2) Crea una función llamada "calcularAreaRectangulo" que tome dos parámetros: base y altura. La función debe calcular y devolver el área del rectángulo utilizando la fórmula área = base *altura.


const calcularAreaRectangulo = (base,altura) => {
    let area = base*altura;
    return area;
}

let res = calcularAreaRectangulo(5,2);

console.log(res);