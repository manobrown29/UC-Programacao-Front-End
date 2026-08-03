function exibirProdutoComPreco(nomeProduto, preco) {
    console.log(`${nomeProduto} ........................ R$ ${preco.toFixed(2)}`);
}

exibirProdutoComPreco("Jaqueta Jeans", 220);

function precoDaParcela(valorTotal, quantidadeParcelas = 1) {
    if (quantidadeParcelas > 12) {
        return valorTotal;
    }

    return valorTotal / quantidadeParcelas;
}

console.log(precoDaParcela(1200));     
console.log(precoDaParcela(1200, 6));   
console.log(precoDaParcela(1200, 15));  

function aplicarDesconto(valorTotal, desconto) {
    if (desconto > valorTotal) {
        return 0;
    }

    return valorTotal - desconto;
}

console.log(aplicarDesconto(500, 50));  
console.log(aplicarDesconto(100, 150));  


function aplicarCupomDeDesconto(valorTotal, cupom) {
    if (cupom === "CUPOM50") {
        return aplicarDesconto(valorTotal, 50);
    } else if (cupom === "CUPOM100") {
        return aplicarDesconto(valorTotal, 100);
    } else if (cupom === "CUPOM200") {
        return aplicarDesconto(valorTotal, 200);
    } else {
        return valorTotal;
    }
}

console.log(aplicarCupomDeDesconto(500, "CUPOM50"));   
console.log(aplicarCupomDeDesconto(500, "CUPOM100")); 
console.log(aplicarCupomDeDesconto(500, "CUPOM200")); 
console.log(aplicarCupomDeDesconto(500, "OUTRO"));  