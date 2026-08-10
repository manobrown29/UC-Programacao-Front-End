const carrinho = {
    cliente: "Alice",

    itens: [
        {
            nome: "Smartphone",
            preco: 2200,
            quantidade: 1
        }
    ],

    cupons: ["MENOS10", "PROMO10", "10PORCENTO"],

    adicionarProduto: function(nome, preco, quantidade) {
        const produtoExistente = this.itens.find(
            produto => produto.nome === nome
        );

        if (produtoExistente) {
            produtoExistente.quantidade += quantidade;
        } else {
            this.itens.push({
                nome: nome,
                preco: preco,
                quantidade: quantidade
            });
        }
    },

    calcularTotal: function() {
        let total = 0;

        for (const produto of this.itens) {
            total += produto.preco * produto.quantidade;
        }

        this.total = total;

        return this.total;
    },

    aplicarDesconto: function(cupom) {
        if (this.cupons.includes(cupom)) {
            this.cupomUtilizado = cupom;

            this.calcularTotal();

            this.total = this.total * 0.90;

            console.log("Cupom aplicado com sucesso!");
        } else {
            console.log("Cupom inválido!");
        }
    },

    exibirCupom: function() {
        console.log("===== CUPOM FISCAL =====");
        console.log("Cliente:", this.cliente);
        console.log("------------------------");

        console.log("Produtos:");

        for (const produto of this.itens) {
            console.log(
                `${produto.nome} | Quantidade: ${produto.quantidade} | Preço: R$ ${produto.preco.toFixed(2)}`
            );
        }

        console.log("------------------------");

        if (this.total === undefined) {
            this.calcularTotal();
        }

        console.log("Total: R$", this.total.toFixed(2));

        if (this.cupomUtilizado) {
            console.log("Cupom aplicado:", this.cupomUtilizado);
            console.log("Desconto: 10%");
        } else {
            console.log("Cupom aplicado: Não");
        }

        console.log("========================");
    }
};



carrinho.adicionarProduto("Notebook", 3500, 1);
carrinho.adicionarProduto("Smartphone", 2200, 2);
carrinho.calcularTotal();
carrinho.aplicarDesconto("MENOS10");
carrinho.exibirCupom();