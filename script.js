//Criação do estoque
const estoque = [
    { cod: "01", nome: "MORANGO", preco: 11.99 },
    { cod: "02", nome: "MAÇA", preco: 5.89 },
    { cod: "03", nome: "BANANA", preco: 3.74 },
    { cod: "04", nome: "MELANCIA", preco: 20.51 },
    { cod: "05", nome: "ABACATE", preco: 7.56 }
]

//função que passará pelo Estoque. Se for igual ao código ou nome do produto informado, retornará o preço.
function consultar() {
    let produtoDesejado = document.getElementById("Produto").value.toUpperCase(); // lê o input
    let escolha = "Não há correspondência";
    
    for (let i = 0; i < estoque.length; i++) {
        if (produtoDesejado == estoque[i].cod || produtoDesejado == estoque[i].nome) {
            escolha = estoque[i].preco
            produtoDesejado = estoque[i].nome
            break; 
        }
    }
    return { nome: produtoDesejado, preco: escolha }
}

//Criação de evento Consultar o preço e apresentá-lo
document.getElementById("botao-consulta").addEventListener('click', consultarApresentar);
//Função que apresenta o preço. Se não for encontrado um produto correspondente, a msg de erro aparecerá
function consultarApresentar() {

    escolha = consultar();

    if (typeof escolha.preco === 'number') {
        document.getElementById("valor-produto").innerHTML = "R$ " + escolha.preco

    } else {
        document.getElementById("valor-produto").innerHTML = escolha.preco
    }
}

//criação de evento e função para adicionar um produto válido ao carrinho
document.getElementById("botao-comprar").addEventListener('click', addCarrinho);
let carrinho=InicioApp() /////////////////////////////////////////////////////////
function addCarrinho() {

    escolha = consultar()

    if (typeof escolha.preco === 'number') {
        carrinho.push(escolha)

        //Atualizando o LocalStorage
        NoLocalStorage = JSON.parse(localStorage.getItem("carrinho")) //leitura do localStorage
        NoLocalStorage.push(escolha) //Adição da escolha
        localStorage.setItem("carrinho",JSON.stringify(NoLocalStorage))  //atualização do localStorage


    } else {
        alert("Necessário um item válido")
    }

}


//função que passa todo o array carrinho e calcula seu preço total
function FuncaoTotalCarrinho(carrinho) {
    let total = 0;
    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i].preco;
    }
    return total
}


//criação de evento e função que apresenta o valor total do carrinho em determinado local reservado para tal. Se o carrinho estiver vazio, essa msg aparecerá informando.
document.getElementById("botao-consulta-carrinho").addEventListener('click', function () { totalCarrinhoApresentar(carrinho,"valor-total") });
function totalCarrinhoApresentar(carrinho,local) {
    let TotalCarrinho = FuncaoTotalCarrinho(carrinho)

    if (TotalCarrinho != 0) {
        document.getElementById(local).innerHTML = "Total: R$ " + TotalCarrinho.toFixed(2)

    } else {
        document.getElementById(local).innerHTML = "Carrinho vazio"
    }
}


//Adiciona o total de forma dinâmica
document.getElementById("botao-comprar").addEventListener('click', function () { totalCarrinhoApresentar(carrinho,"valor-total-dinamico") });



//Adiciona item na lista de compras de forma dinâmica
document.getElementById("botao-comprar").addEventListener('click', function () {addItemLista(carrinho)});
function addItemLista(carrinho) {
    //A função só será executada se houver produto correspondente, se for retornado um preço válido
    if (typeof escolha.preco === 'number') {
        //define os itens e respectivos preços
        item = carrinho[carrinho.length - 1].nome;
        preco = carrinho[carrinho.length - 1].preco;
        ModificaHTML(item,preco)
        return
    }
}

function ModificaHTML(item,preco) {
    //cria um novo span
    let novoSpan = document.createElement("span");
    //cria novos paragrafos
    let pItem = document.createElement("p")
    let pPreco = document.createElement("p")
    //cria textos e adiciona nos novos paragrafos criados
    pItem.appendChild(document.createTextNode(item))
    pPreco.appendChild(document.createTextNode("R$ " + preco))
    //adiciona os paragrafos dentro do span
    novoSpan.appendChild(pItem);
    novoSpan.appendChild(pPreco);
    //mapeia o local que será colocado a lista e adiciona
    document.getElementById("conteudo-lista-compras").appendChild(novoSpan);
}


//Adiciona o número de itens de forma dinâmica
document.getElementById("botao-comprar").addEventListener('click',function() {n_itens(carrinho)})
function n_itens(carrinho) {
    let contagem=carrinho.length
    document.getElementById("numero-itens").innerHTML = contagem
}




//Função que inicializará local Storage, a criação da lista de compras se houver algo no LocalStorage e também o número de itens
function InicioApp() {

    if (localStorage.getItem("carrinho") == undefined) {
        let carrinhoStorage = localStorage.setItem("carrinho","[]")

        totalCarrinhoApresentar(carrinhoStorage, "valor-total-dinamico")

        
        
    } else {
        let carrinhoStorage = JSON.parse(localStorage.getItem("carrinho"))
         //Numero de itens
     n_itens(carrinhoStorage)

     //Lista de compras
     for (let index = 0; index < carrinhoStorage.length; index++) {
         item = carrinhoStorage[index].nome;
         preco = carrinhoStorage[index].preco;
         ModificaHTML(item,preco)
     }
 
     //total dinâmico
     totalCarrinhoApresentar(carrinhoStorage, "valor-total-dinamico")


     return carrinhoStorage
        
    }
    
}



