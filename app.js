let listaDeNumerosSorteados = []; 
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate:1.2}); //ADICONANDO RESPONSIVE VOICE COLOCNADO PARAMETROS PAR SER LIDO 
    
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);// cobrindo um intervalo menor para teste(entre 0 e 4
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;//verificação quantidad de elementos na lista
    if(listaDeNumerosSorteados.length == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { 
        return gerarNumeroAleatorio (); //verifica se o numeor ja foi escolhido
    } else { //se não esta na lista..
       listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
       return numeroEscolhido;
        


    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}








//sobre listas(Array) e acesso a elas.Sempre começa com indice zero na contagem de lista
//comando para retornar a quantidade de elementos em uma lista: nomelista.length

//criando uma lista de nuemros que ja foram sorteados e não podem ser sorteados novamente 

//Adicionando novos elementos

//Para adicionar um elemento ao final da array, você pode usar o método push.
//frutas.push("Morango");
//console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja", "Morango"]

//Para remover o último elemento, você pode usar o método pop.

//frutas.pop();
//console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja"]

//Criando uma array

//Você pode criar uma array em JavaScript declarando uma variável e atribuindo-lhe valores entre colchetes [].

//let frutas = ["Maçã", "Uva", "Laranja"];