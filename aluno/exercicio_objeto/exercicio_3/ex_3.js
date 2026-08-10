const carro = {
    nome: "Civic",
    cor: "Preto",
    modelo: "Sedan",
    opcionais: {
        arCondicionado: true,
        direcaoEletrica: true,
        multimidia: false
    }
};

function exibirDetalhes(carro) {
    console.log("Nome:", carro.nome);
    console.log("Cor:", carro.cor);
    console.log("Modelo:", carro.modelo);

    console.log("Opcionais:");
    console.log("Ar condicionado:", carro.opcionais.arCondicionado);
    console.log("Direção elétrica:", carro.opcionais.direcaoEletrica);
    console.log("Multimídia:", carro.opcionais.multimidia);
}

function alterarOpcional(carro, nomeOpcional, valor) {
    carro.opcionais[nomeOpcional] = valor;
}

exibirDetalhes(carro);

alterarOpcional(carro, "multimidia", true);

console.log("Depois da alteração:");
exibirDetalhes(carro);