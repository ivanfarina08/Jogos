const dados = [
    {
        "id": 1,
        "personagem": "Jesus",
        "dica1": "Nasceu em Belém",
        "dica2": "Tiago e João eram seus apóstolos",
        "dica3": "Transformou água em vinho",
        "dica4": "Curou cegos e leprosos",
        "dica5": "Deu exemplo de vida"
    },
    {
        "id": 2,
        "personagem": "Chico Xavier",
        "dica1": "Nasceu em Pedro Leopoldo (Minas Gerais)",
        "dica2": "Psicografou 450 livros",
        "dica3": "Foi considerado 'O maior brasileiro de todos os tempos'",
        "dica4": "Seu mentor espiritual era Emmanuel",
        "dica5": "Psicografou a série 'Nosso lar' pelo espírito André Luiz"
    }
]

let personagem;
let dica = 0;
let quantTalentos = 10;
let deposito = 0;
let tentativas = 0;
let ordem_dicas = [];
let verDica = 0;
const quantDicas = 5;
const maxTentativas = 3;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function habilitaBtJogar() {
    document.getElementById("bt_jogar").disabled = false;
}

function iniciarJogo() {
    if (deposito > 0) {
        ramdomizaDicas();
        document.getElementById("tutorial").style.display = "none";
        atualizarQuantTalentosHTML();
        let quantPersonagens = dados.length;
        let idPersonagemAleatorio = getRandomInt(quantPersonagens) + 1;
        personagem = carregaPersonagemAtual(idPersonagemAleatorio);
        console.log(personagem);
        dicaHTML();
        deposito = document.getElementById("deposito").value;
        console.log(deposito);
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
    console.log("ordem_dicas: " + ordem_dicas);
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
    document.getElementById("deposito").max = quantTalentos;
    if (quantTalentos <= 0) {
        document.getElementById("GameOver").style.display = "flex";
    }
}

function novaDica() {
    dica++;
    verDica = dica;
    dicaHTML();

    if (dica > 1) {
        quantTalentos--;
        atualizarQuantTalentosHTML();
        if (dica == 4) {
            document.getElementById("bt_novaDica").disabled = true;
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
            break;
    }
}

function atualizarQuantTalentosHTML() {
    document.getElementsByClassName("quantTalentos")[0].innerHTML = "Talentos: " + quantTalentos;
    document.getElementsByClassName("quantTalentos")[1].innerHTML = "Talentos: " + quantTalentos;
}


function carregaPersonagemAtual(id) {
    const dadosDoId = dados.find(item => item.id === id);

    // Verificar se o objeto foi encontrado
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
    document.getElementById("valorDeposito").innerHTML = 10;
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