const aluno = {
    nome: "João Pedro",
    idade: 18,
    curso: "Desenvolvimento de Sistemas",
    notas: [8, 7.5, 9, 10]
};

function calcularMedia(aluno) {
    let soma = 0;

    for (let i = 0; i < aluno.notas.length; i++) {
        soma += aluno.notas[i];
    }

    const media = soma / aluno.notas.length;

    aluno.media = media;

    return media;
}

calcularMedia(aluno);

console.log(aluno);
console.log("Média:", aluno.media);