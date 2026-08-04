const Banidos = ["WiseScorpion", "Plabbernom", "xxx33Fibberflop"];

function verificarBanido(lista, apelido) {
    return lista.includes(apelido);
}

if (verificarBanido(Banidos, "WiseScorpion")){
    console.log("Este usuario está banido!")
}else{
    console.log("Usuario liberado!")
}

