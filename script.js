


document.getElementById("botao-consulta").addEventListener('click', consultar);


function consultar() {
    let escolha = undefined;
    switch (document.getElementById("Produto").value.toUpperCase()) {
        case "MORANGO":
        case "01":
            escolha = "R$ 11,99"
            break;
        case "02":
        case "MAÇA":
            escolha = "R$5,89"
            break;
        case "BANANA":
        case "03":
            escolha = "R$3,74"
            break;
        case "MELANCIA":
        case "04":
            escolha = "R$20,51"
            break;
        case "05":
        case "ABACATE":
            escolha = "R$7,50"
            break;
        default:
            escolha = "Não há correspondência"
            break;
    }

    document.getElementById("valor-produto").innerHTML = escolha

}


