


document.getElementById("botao-consulta").addEventListener('click', consultarApresentar);



function consultarApresentar() {

    escolha = consultar();

    if (typeof escolha === 'number') {
        document.getElementById("valor-produto").innerHTML = "RS " + escolha

    } else {
        document.getElementById("valor-produto").innerHTML = escolha
    }
}



function consultar() {

    let produtoDesejado = document.getElementById("Produto").value.toUpperCase();

    let escolha = undefined;
    switch (produtoDesejado) {
        case "MORANGO":
        case "01":
            escolha = 11.99
            break;
        case "02":
        case "MAÇA":
            escolha = 5.89
            break;
        case "BANANA":
        case "03":
            escolha = 3.74
            break;
        case "MELANCIA":
        case "04":
            escolha = 20.51
            break;
        case "05":
        case "ABACATE":
            escolha = 7.50
            break;
        default:
            escolha = "Não há correspondência"
            break;
    }

    return escolha;

}


