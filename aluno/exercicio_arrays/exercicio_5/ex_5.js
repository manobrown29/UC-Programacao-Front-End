let lista = ["arroz", "farinha", "feijão", "batata"];

function gerarTextoCompras(itens){
    return itens.join(", "); 
}

const resultado = gerarTextoCompras(lista);
console.log(resultado); 