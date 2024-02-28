import { dados } from "./dados_talentos.js";

const maxDicas = 5;
const maxTentativas = 3;
const inicioTalentos = 3;
const maxTalentos = 30;
let personagem;
let indicePersonagemAtual = 0;
let dica = 0;
let quantTalentos = inicioTalentos;
let deposito = 0;
let tentativas = 0;
let ordem_dicas = [];
let ordem_personagens = [];
let verDica = 0;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function iniciarJogo() {
    if (deposito > 0) {
        document.getElementById("introducaoJogo").style.display = "none";
        ramdomizaDicas();
        atualizarQuantTalentosHTML();
        carregaPersonagem();
        dicaHTML();
        document.getElementById("valorDeposito").innerHTML = "Deposito:" + deposito;
        document.getElementById("tema").innerHTML = "Tema do jogo: " + personagem.tema;
    }
}

function ramdomizaDicas() {
    let indicesDicas = [];
    let posicaoAleatoria;

    for (let i = 0; i < maxDicas; i++) {
        indicesDicas[i] = i + 1;
    }

    for (let i = 0; i < maxDicas; i++) {
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

    let personagemSemAcento = "";
    for (const element of personagem.nome) {
        personagemSemAcento += element.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    let respostaUsuarioSemAcento = "";
    for (const element of respostaUsuario) {
        respostaUsuarioSemAcento += element.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    if (respostaUsuarioSemAcento.toUpperCase().trim() == personagemSemAcento.toUpperCase().trim()) {
        acertou();
    }
    else {
        errou();
    }
}

function acertou() {
    quantTalentos += parseInt(deposito) * 2;
    if (quantTalentos>=maxTalentos){
        document.getElementById("Campeao").style.display = "flex";    
    }
    else{
        document.getElementById("Ganhou").style.display = "flex";
        respostaPersonagemHTML();
        setTimeout(function () {
            limpaTela();
        }, 3000);
    }    
}

function errou() {
    if (tentativas == maxTentativas) {
        quantTalentos -= parseInt(deposito)
        document.getElementById("Errou").style.display = "flex";
        respostaPersonagemHTML();
        setTimeout(function () {
            limpaTela();
        }, 3000);
    }
    else {
        document.getElementById("Tentativa").style.display = "flex";
        document.getElementById("numeroTentativas").innerHTML = "Você tem mais " + (maxTentativas - tentativas) + " tentativas";
        setTimeout(function () {
            document.getElementById("Tentativa").style.display = "none";
        }, 3000);
    }
}



function limpaTela() {
    document.getElementById("dica").innerHTML = "";
    document.getElementById("resposta").value = "";
    atualizarQuantTalentosHTML();
    document.getElementById("introducaoJogo").style.display = "flex";
    document.getElementById("Ganhou").style.display = "none";
    document.getElementById("Errou").style.display = "none";
    document.getElementById("Campeao").style.display = "none";
    dica = 0;
    tentativas = 0;
    verDica = 0;
    document.getElementById("bt_novaDica").disabled = false;
    document.getElementById("valorDeposito").innerHTML = 0;
    deposito = 0;
    if (quantTalentos <= 0) {
        document.getElementById("GameOver").style.display = "flex";
    }
    removeSelecaoDepositoHTML();
}

function novaDica() {
    let talentosAtuais = quantTalentos - deposito;
    if (dica < 4) {
        dica++;
        if (dica == 1) {
            darDica();
        }
        else {
            if (talentosAtuais > 0) {
                if (dica == 2) {
                    document.getElementById("DicaPerdeTalento").style.display = "flex";
                }

                if (dica > 2) {

                    quantTalentos--;
                    atualizarQuantTalentosHTML();
                }
                darDica()
            }
            else {
                dica--;
                document.getElementById("mensagem").style.display = 'block';
                setTimeout(function () {
                    document.getElementById("mensagem").style.display = 'none';
                }, 1000);
            }
        }
    }
}

function darDica() {
    verDica = dica;
    dicaHTML();
}

function pagarDica(valor) {
    let pagarPorDica = valor.innerText;
    if (pagarPorDica == "SIM") {
        quantTalentos--;
        atualizarQuantTalentosHTML();
        verDica = dica;
        dicaHTML();
    }
    else {
        dica--;
        verDica = dica;
        dicaHTML();
    }
    document.getElementById("DicaPerdeTalento").style.display = "none";
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
    document.getElementById("numeroDica").innerHTML = "Dica: " + (dica + 1) + "/" + maxDicas;
}

function atualizarQuantTalentosHTML() {
    document.getElementsByClassName("quantTalentos")[0].innerHTML = "Talentos: " + quantTalentos;
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
    quantTalentos = inicioTalentos;
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

function valorDeposito(valor) {
    if (quantTalentos >= valor.innerText) {
        deposito = valor.innerText;
        removeSelecaoDepositoHTML();
        valor.classList.add("depositoClicado");
    }
}

function removeSelecaoDepositoHTML() {
    document.getElementsByClassName("deposito")[0].classList.remove("depositoClicado");
    document.getElementsByClassName("deposito")[1].classList.remove("depositoClicado");
    document.getElementsByClassName("deposito")[2].classList.remove("depositoClicado");
    document.getElementsByClassName("deposito")[3].classList.remove("depositoClicado");
}

function respostaPersonagemHTML() {
    let count = document.getElementsByClassName("respostaPersonagem").length;
    for (let i = 0; i < count; i++) {
        document.getElementsByClassName("respostaPersonagem")[i].innerHTML = personagem.nome.toUpperCase();
    }
}

function abrirTutorial() {
    document.getElementById("tutorial").style.display = "flex";
}

function sairTutorial() {
    document.getElementById("tutorial").style.display = "none";
}



window.iniciarJogo = iniciarJogo;
window.novaDica = novaDica;
window.bt_dicaAnterior = bt_dicaAnterior;
window.bt_dicaProxima = bt_dicaProxima;
window.verificaResposta = verificaResposta;
window.reiniciarJogo = reiniciarJogo;
window.valorDeposito = valorDeposito;
window.pagarDica = pagarDica;
window.abrirTutorial = abrirTutorial;
window.sairTutorial = sairTutorial;