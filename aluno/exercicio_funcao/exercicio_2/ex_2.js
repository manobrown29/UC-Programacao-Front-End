function concatenar3(palavra1, palavra2, palavra3, separador = " | ") {
    return palavra1 + separador + palavra2 + separador + palavra3;
}

console.log(concatenar3("Maçã", "Banana", "Laranja"));
console.log(concatenar3("Maçã", "Banana", "Laranja", " - "));
