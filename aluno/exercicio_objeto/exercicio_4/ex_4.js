const produtos_vendas = {
    cafes: [
        {
            sku: 7654,
            marca: "Povo Brasileiro",
            preco: 24.00,
            categoria: "Mercearia"
        },
        {
            sku: 8765,
            marca: "Soberano - Gourmet",
            preco: 29.00,
            categoria: "Mercearia"
        },
        {
            sku: 3467,
            marca: "Dose Certa",
            preco: 27.00,
            categoria: "Mercearia"
        }
    ]
};

const produtos_estoque = {
    cafes: [
        {
            sku: 3467,
            peso: 500.00,
            unidade: "mg",
            estoque: 101
        },
        {
            sku: 7654,
            peso: 250.00,
            unidade: "mg",
            estoque: 182
        },
        {
            sku: 8765,
            peso: 250.00,
            unidade: "mg",
            estoque: 46
        }
    ]
};

function consolidarProdutos(vendas, estoque) {
    const produtos = [];

    for (const produtoVenda of vendas.cafes) {
        const produtoEstoque = estoque.cafes.find(
            produto => produto.sku === produtoVenda.sku
        );

        const produto = {
            sku: produtoVenda.sku,
            marca: produtoVenda.marca,
            preco: produtoVenda.preco,
            categoria: produtoVenda.categoria,
            peso: produtoEstoque.peso,
            unidade: produtoEstoque.unidade,
            estoque: produtoEstoque.estoque
        };

        produtos.push(produto);
    }

    return produtos;
}

const produtosConsolidados = consolidarProdutos(
    produtos_vendas,
    produtos_estoque
);

console.log(produtosConsolidados);