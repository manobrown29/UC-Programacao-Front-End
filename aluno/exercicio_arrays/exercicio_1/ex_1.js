let fila = ["João", "Maria", "josé"];
fila.push("neide");

console.log("Fila de atendimento:");
for (let i = 0; i < fila.length; i++) {
    console.log(fila[i]);
}

let atendido = fila.shift();

console.log("Pessoa atendida:", atendido);
console.log("== Fila após atendimento ==");
for (let i = 0; i < fila.length; i++) {
    console.log(fila[i]);
}