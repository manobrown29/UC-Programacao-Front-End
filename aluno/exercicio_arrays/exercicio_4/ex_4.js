function gerarTextoCompras(itens) {
    return itens.join(", ");
}

let compras = [
    "Arroz",
    "Feijão",
    "Leite",
    "Pão",
    "Café"
];

console.log(gerarTextoCompras(compras));