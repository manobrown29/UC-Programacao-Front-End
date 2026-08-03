function maiorNumero(a, b, c) {
    let maior = a;

    if (b > maior) {
        maior = b;
    }

    if (c > maior) {
        maior = c;
    }

    console.log("O maior número é:", maior);
}

maiorNumero(15, 8, 20);