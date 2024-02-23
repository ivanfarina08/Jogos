import { dados } from "./dados_talentos.js";

let personagem;
let indicePersonagemAtual = 0;
let dica = 0;
let quantTalentos = 10;
let deposito = 0;
let tentativas = 0;
let ordem_dicas = [];
let ordem_personagens = [];
let verDica = 0;
const quantDicas = 5;
const maxTentativas = 3;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function iniciarJogo() {
    if (deposito > 0) {
        document.getElementById("tutorial").style.display = "none";
        ramdomizaDicas();
        atualizarQuantTalentosHTML();
        carregaPersonagem();
        dicaHTML();
        deposito = document.getElementById("valorDeposito").innerHTML;
    }
}

function ramdomizaDicas() {
    let indicesDicas = [];
    let posicaoAleatoria;

    for (let i = 0; i < quantDicas; i++) {
        indicesDicas[i] = i + 1;
    }

    for (let i = 0; i < quantDicas; i++) {
        posicaoAleatoria = getRandomInt(indicesDicas.length - 1);
        ordem_dicas[i] = indicesDicas[posicaoAleatoria];
        indicesDicas.splice(posicaoAleatoria, 1);
    }
}

function carregaPersonagem() {
    let quantPersonagens = dados.length;
    if (indicePersonagemAtual == quantPersonagens || indicePersonagemAtual == 0) {
        indicePersonagemAtual = 0;
        randomizaPersonagens(quantPersonagens);
    }
    personagem = carregaPersonagemAtual(ordem_personagens[indicePersonagemAtual]);
    console.log(personagem);
    indicePersonagemAtual++;
}

function randomizaPersonagens(quantPersonagens) {
    let indicesPersonagens = [];
    let posicaoAleatoria;

    for (let i = 0; i < quantPersonagens; i++) {
        indicesPersonagens[i] = i + 1;
    }

    for (let i = 0; i < quantPersonagens; i++) {
        posicaoAleatoria = getRandomInt(indicesPersonagens.length);
        console.log("posicaoAleatoria: " + posicaoAleatoria);
        ordem_personagens[i] = indicesPersonagens[posicaoAleatoria];
        indicesPersonagens.splice(posicaoAleatoria, 1);
    }
    console.log("ordem_personagens: " + ordem_personagens);
}

function verificaResposta() {
    let respostaUsuario = document.getElementById("resposta").value;
    tentativas++;
    if (respostaUsuario.toUpperCase() == personagem.personagem.toUpperCase()) {
        acertou();
    }
    else {
        errou();
    }
}

function acertou() {
    quantTalentos += parseInt(deposito) * 2;
    alert(quantTalentos);
    alert("Acertou");
    limpaTela();
}

function errou() {
    if (tentativas == maxTentativas) {
        quantTalentos -= parseInt(deposito);
        limpaTela();
    }
    alert("Numero de tentativas: " + tentativas);
}

function limpaTela() {
    document.getElementById("dica").innerHTML = "";
    document.getElementById("resposta").value = "";
    atualizarQuantTalentosHTML();
    document.getElementById("tutorial").style.display = "flex";
    dica = 0;
    tentativas = 0;
    verDica = 0;
    document.getElementById("bt_novaDica").disabled = false;
    document.getElementById("valorDeposito").innerHTML = 0;
    deposito = 0;
    if (quantTalentos <= 0) {
        document.getElementById("GameOver").style.display = "flex";
    }
}

function novaDica() {
    if (dica < 4) {
        dica++;
        verDica = dica;
        dicaHTML();

        if (dica > 1) {
            quantTalentos--;
            atualizarQuantTalentosHTML();
        }
    }
}

function dicaHTML() {
    switch (ordem_dicas[verDica]) {
        case 1:
            document.getElementById("dica").innerHTML = personagem.dica1;
            console.log("dica1");
            break;
        case 2:
            document.getElementById("dica").innerHTML = personagem.dica2;
            console.log("dica2");
            break;
        case 3:
            document.getElementById("dica").innerHTML = personagem.dica3;
            console.log("dica3");
            break;
        case 4:
            document.getElementById("dica").innerHTML = personagem.dica4;
            console.log("dica4");
            break;
        case 5:
            document.getElementById("dica").innerHTML = personagem.dica5;
            console.log("dica5");
            break;

        default:
            console.log("não existem mais dicas");
            break;
    }
}

function atualizarQuantTalentosHTML() {
    document.getElementsByClassName("quantTalentos")[0].innerHTML = "Talentos: " + quantTalentos;
    document.getElementsByClassName("quantTalentos")[1].innerHTML = "Talentos: " + quantTalentos;
}


function carregaPersonagemAtual(id) {
    const dadosDoId = dados.find(item => item.id === id);
    if (dadosDoId) {
        return (dadosDoId);
    } else {
        console.log('Nenhum dado encontrado para o ID:', id);
    }
}


function reiniciarJogo() {
    quantTalentos = 10;
    document.getElementById("GameOver").style.display = "none";
    limpaTela();
}

function bt_dicaAnterior() {
    if (verDica <= dica && verDica >= 1) {
        verDica--;
        dicaHTML();
    }
}

function bt_dicaProxima() {
    if (verDica < dica) {
        verDica++;
        dicaHTML();
    }
}

function aumentarDeposito() {
    if (deposito < quantTalentos) {
        deposito++;
        document.getElementById("valorDeposito").innerHTML = deposito;
    }
}

function diminuirDeposito() {
    if (deposito > 0) {
        deposito--;
        document.getElementById("valorDeposito").innerHTML = deposito;
    }
}

window.aumentarDeposito = aumentarDeposito;
window.diminuirDeposito = diminuirDeposito;
window.iniciarJogo = iniciarJogo;
window.novaDica = novaDica;
window.bt_dicaAnterior = bt_dicaAnterior;
window.bt_dicaProxima = bt_dicaProxima;
window.verificaResposta = verificaResposta;
window.reiniciarJogo = reiniciarJogo;