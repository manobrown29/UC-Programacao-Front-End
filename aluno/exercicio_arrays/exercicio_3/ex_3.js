function adicionarPedido(pedidos, codigo) {
    if (pedidos.length < 10) {
        pedidos.push(codigo);
    } else {
        pedidos.shift();
        pedidos.push(codigo);
    }

    return pedidos;
}

let pedidos = [
    "0001",
    "0002",
    "0003",
    "0004",
    "0005",
    "0006",
    "0007",
    "0008",
    "0009",
    "0010"
];

console.log("Antes:", pedidos);

adicionarPedido(pedidos, "0011");

console.log("Depois:", pedidos);