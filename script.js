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


document.getElementById("botao-consulta").addEventListener('click', consultarApresentar);
function consultarApresentar() {

    escolha = consultar();

    if (typeof escolha === 'number') {
        document.getElementById("valor-produto").innerHTML = "R$ " + escolha

    } else {
        document.getElementById("valor-produto").innerHTML = escolha
    }
}


document.getElementById("botao-comprar").addEventListener('click', addCarrinho);
let carrinho=[];
function addCarrinho() {
    
    let produtoDesejado = document.getElementById("Produto").value.toUpperCase();
     escolha=consultar()


     if (typeof escolha === 'number') {
        carrinho.push({nome:produtoDesejado, preco:escolha})

        

    } else {
        alert("Necessário um item válido")
    }

    return console.log(carrinho)
}



function FuncaoTotalCarrinho() {
    let total=0;
    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i].preco;
    }
    return total
}


document.getElementById("botao-consulta-carrinho").addEventListener('click', function() { totalCarrinhoApresentar("valor-total")});
function totalCarrinhoApresentar(local) {
    let TotalCarrinho = FuncaoTotalCarrinho()

    if (TotalCarrinho!=0) {
        document.getElementById(local).innerHTML = "R$ " + TotalCarrinho.toFixed(2)

    } else {
        document.getElementById(local).innerHTML = "Carrinho vazio"
        
    }    
}

//Adiciona o tatol de forma dinâmica
document.getElementById("botao-comprar").addEventListener('click', function() {totalCarrinhoApresentar("valor-total-dinamico")});

