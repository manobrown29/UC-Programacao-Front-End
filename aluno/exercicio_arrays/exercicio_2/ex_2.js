function validarNumeros(array) {
    let numeros = [];

    for (let item of array) {
        if (typeof item === "number" && !isNaN(item)) {
            numeros.push(item);
        }
    }

    return numeros;
}

let dados = [10, "Olá", 25, true, 8.5, "50", null, 99];

console.log(validarNumeros(dados));