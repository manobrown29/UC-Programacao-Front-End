const produto1 = {
    nome: "creme craker",
    preco: 8.50,
    categoria: "mercearia"
};

const produto2 = {
    nome: "gin",
    preco: 24.00,
    categoria: "Bebidas"
};

function produtoMaisCaro(produtoA, produtoB) {
    if (produtoA.preco > produtoB.preco) {
        console.log("Produto mais caro:");
        console.log("Nome:", produtoA.nome);
        console.log("Categoria:", produtoA.categoria);
        console.log("Preço: R$", produtoA.preco);
    } else if (produtoB.preco > produtoA.preco) {
        console.log("Produto mais caro:");
        console.log("Nome:", produtoB.nome);
        console.log("Categoria:", produtoB.categoria);
        console.log("Preço: R$", produtoB.preco);
    } else {
        console.log("Os dois produtos possuem o mesmo preço.");
    }
}

produtoMaisCaro(produto1, produto2);