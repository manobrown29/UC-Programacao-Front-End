function retornarQuantidadeDeGasolina(kmDestino, consumoMedio) {
    const distanciaTotal = kmDestino * 2; // ida e volta
    return (distanciaTotal * consumoMedio) / 100;
}

console.log(retornarQuantidadeDeGasolina(150, 8));
