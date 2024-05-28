import { PALAVRAS } from "./dados_descubra_palavras.js";
import { PALAVRAS_VALIDAS } from "./dados_script_descubra_palavra_tempo.js";

const numero_de_tentativas = 1;
const numero_de_letras = 5;
let linhaAtual = numero_de_tentativas;
let arrayPalavraUsuario = [];
let arrayIndicesPalavraUsuario = [];
let arrayDicas = [];
let quantDicas = 1;
let palavraGabarito = PALAVRAS_VALIDAS[Math.floor(Math.random() * PALAVRAS_VALIDAS.length)];
let arrayAcertosUsuario = [];
let quantMaxDicas = 5;
let intervalo;
let contarMelhorJogo=0;

console.log(palavraGabarito);


function inicializaJogo() {
    document.getElementById('tela-inicial').style.display = "flex";
    
    // Verifique se o item "melhor-jogo" existe no localStorage
    if (!localStorage.hasOwnProperty("melhor-jogo")) {
        localStorage.setItem("melhor-jogo", 0);
    }
    
    // Atualize o conteúdo do elemento com o valor de "melhor-jogo"
    document.getElementById('melhor-jogo').innerHTML = 'Melhor jogo até agora: ' + localStorage.getItem("melhor-jogo");
}


function inicializaArrayIndices() {
    arrayIndicesPalavraUsuario = [];
    arrayAcertosUsuario = [];
    for (let i = 0; i < numero_de_letras; i++) {
        arrayIndicesPalavraUsuario.push(i);
        arrayAcertosUsuario.push(0);
    }
}

function inicializaarrayIndicesPalavraUsuario() {
    arrayIndicesPalavraUsuario = [];
    for (let i = 0; i < numero_de_letras; i++) {
        arrayIndicesPalavraUsuario.push(i);
    }
}

export function criaAmbiente() {
    document.getElementById('tela-inicial').style.display = "none";
    inicializaArrayIndices();

    let board = document.getElementById("game-board");

    constroiBoardHTML(board);

    colocarLetras();
    contagemRegressiva();
}

function contagemRegressiva() {
    let contagem = document.getElementById("contagem-regressiva");
    let maxContagem = 29; // contagem em segundos
    contagem.innerHTML = (maxContagem+1)+'s';

    intervalo = setInterval(() => {
        contagem.innerHTML = maxContagem + 's';
        if (maxContagem <= 0) {
            clearInterval(intervalo); // Para a contagem regressiva quando atinge 0
            perdeuJogo(); // Chama a função quando a contagem chega a 0
        }
        maxContagem--;
    }, 1000);
}

function constroiBoardHTML(board){
    temaDica(board);
    for (let i = 0; i < numero_de_tentativas; i++) {
        let row = document.createElement("div");
        row.className = "letter-row";

        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div");
            box.className = "letter-box";
            row.appendChild(box);
        }

        board.appendChild(row);
    }
    console.log(arrayDicas);
}

function temaDica(board) {
    let tema = document.createElement("h2");
    tema.innerHTML = 'Tema: '+palavraGabarito.tema;

    let dica = document.createElement("h1");
    dica.innerHTML = palavraGabarito.dica;

    board.appendChild(tema);
    board.appendChild(dica);
}

function colocarLetras() {
    let quantLetraAdd = 2; //quantidade de dicas de 0 ao numero que está na variável
    for (let i = 0; i <= quantLetraAdd; i++) {
        darDica();
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function limpaAmbiente() {
    let board = document.getElementById("game-board");

    // Remove todas as divs filhas do elemento com id "game-board"
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
    for (const elem of document.getElementsByClassName("keyboard-button")) {
        elem.style.backgroundColor = "buttonface";
    }
    document.getElementById("del").style.backgroundColor = "rgb(219, 91, 91)";
    document.getElementById("enter").style.backgroundColor = "rgb(82, 177, 82)";
    linhaAtual = numero_de_tentativas;
    arrayPalavraUsuario = [];
    inicializaArrayIndices();
    palavraGabarito = PALAVRAS_VALIDAS[Math.floor(Math.random() * PALAVRAS_VALIDAS.length)];
    arrayAcertosUsuario = [];
    arrayDicas = [];
    quantDicas = 1;
}

function inserirLetraComum(teclaClicada) {
    if (arrayIndicesPalavraUsuario.length > 0) {
        let posicaoExcluir = 0;
        let posicaoLetra = arrayIndicesPalavraUsuario[posicaoExcluir];
        teclaClicada = teclaClicada.toLowerCase();
        inserirArrayPalavraUsuario(posicaoLetra, teclaClicada, posicaoExcluir);
        inserirLetraHtml(posicaoLetra, teclaClicada);
    }
}

function inserirLetraHtml(posicaoLinha, letra) {
    let row = document.getElementsByClassName("letter-row")[0];
    let box = row.children[posicaoLinha];
    box.textContent = letra;
    box.classList.add("filled-box");
    return box;
}

function inserirArrayPalavraUsuario(posicao, letra, indiceParaExcluir) {
    arrayPalavraUsuario[posicao] = letra;
    arrayIndicesPalavraUsuario.splice(indiceParaExcluir, 1);
}


document.addEventListener("keyup", (e) => {
    if (linhaAtual === 0) {
        return;
    }

    let teclaClicada = String(e.key);
    if (teclaClicada === "Backspace") {
        deletarLetra();
        return;
    }

    if (teclaClicada === "Enter") {
        checarPalavra();
        return;
    }

    let found = teclaClicada.match(/[a-z]/gi);
    if (!found || found.length > 1) {
        return;
    } else {
        inserirLetraComum(teclaClicada);
    }
});

document.getElementById("keyboard-cont").addEventListener("click", (e) => {
    const target = e.target;

    if (!target.classList.contains("keyboard-button")) {
        return;
    }
    let key = target.textContent;

    if (key === "Del") {
        key = "Backspace";
    }

    document.dispatchEvent(new KeyboardEvent("keyup", { key: key }));
});

function checarPalavra() {
    let linha = document.getElementsByClassName("letter-row")[numero_de_tentativas - linhaAtual];
    let palavraUsuario = "";
    let arrayPalavraGabarito = Array.from(palavraGabarito.nome);

    console.log('arrayPalavraUsuario: ' + arrayPalavraUsuario);

    palavraUsuario = juntaArrayPalavraUsuario(palavraUsuario);
    let palavraValida = validaPalavra(palavraUsuario);
    if (palavraValida) {
        pintaLetras(arrayPalavraGabarito, linha, palavraUsuario);
        resultadoPalavra(palavraUsuario);
    }
}

function juntaArrayPalavraUsuario(palavraUsuario) {
    for (const letra of arrayPalavraUsuario) {
        palavraUsuario += letra;
    }
    return palavraUsuario;
}

function validaPalavra(palavraUsuario) {
    if (palavraUsuario.length != 5) {
        document.getElementById("mensagemLetrasInsuficiente").style.display = "flex";
        setTimeout(() => {
            document.getElementById("mensagemLetrasInsuficiente").style.display = "none";
        }, 2000);

        return false;
    }

    if (!PALAVRAS.includes(palavraUsuario)) {
        document.getElementById("mensagemPalavrasValidas").style.display = "flex";
        setTimeout(() => {
            document.getElementById("mensagemPalavrasValidas").style.display = "none";
            arrayPalavraUsuario = [];
            inicializaarrayIndicesPalavraUsuario();
            let row = document.getElementsByClassName("letter-row")[0];
            row.innerHTML = '';
            for (let j = 0; j < 5; j++) {
                let box = document.createElement("div");
                box.className = "letter-box";
                row.appendChild(box);
            }
            if (arrayDicas.length > 0) {
                for (const dica of arrayDicas) {
                    inserirDicaPosicao(dica.valor, dica.chave);
                }
            }
        }, 2000);
        return false;
    }
    return true;
}

function pintaLetras(arrayPalavraGabarito, linha, palavraUsuario) {
    let arrayCores = ["pink", "pink", "pink", "pink", "pink"];
    arrayCores = pintaLetrasAmarelo(arrayCores, arrayPalavraGabarito);
    pintaLetrasVerde(arrayCores, arrayPalavraGabarito);
}

function pintaLetrasAmarelo(arrayCores, arrayPalavraGabarito) {
    let cont = 0;
    for (const letraGabarito of arrayPalavraGabarito) {
        for (const letraUsuario of arrayPalavraUsuario) {
            if (letraGabarito == letraUsuario) {
                arrayCores[cont] = "yellow";
            }
            cont++;
        }
        cont = 0;
    }
    return arrayCores;
}

function pintaLetrasVerde(arrayCores, arrayPalavraGabarito) {
    let cont = 0;
    for (const letra of arrayPalavraUsuario) {
        if (arrayPalavraGabarito[cont] == letra) {
            arrayCores[cont] = "rgb(85, 189, 85)";
            arrayAcertosUsuario[cont] = '#';
        }
        cont++;
    }
    return arrayCores;
}

function animarResultadoLetra(linha, palavraUsuario, arrayCores) {
    for (let i = 0; i < 5; i++) {
        let box = linha.children[i];
        let delay = 250 * i;
        setTimeout(() => {
            //flip box
            animateCSS(box, "flipInX");
            //shade box
            box.style.backgroundColor = arrayCores[i];
        }, delay);
    }
}

function resultadoPalavra(palavraUsuario) {
    if (palavraUsuario === palavraGabarito.nome) {
        campeao();
    } else {
        errouPalavra();
    }
}

function campeao() {
    document.getElementById("mensagemGanhou").style.display = "flex";
    linhaAtual = 0;
    clearInterval(intervalo);
    contarMelhorJogo++;
}

function errouPalavra() {
    deletarLetra();
}

function perdeuJogo() {
    document.getElementById("mensagemPerdeu").style.display = "flex";
    document.getElementById("palavraGabarito").innerHTML = palavraGabarito.nome;
    console.log('localStorage.getItem("melhor-jogo"): '+ localStorage.getItem("melhor-jogo") + ' / contarMelhorJogo: '+contarMelhorJogo);
    if(localStorage.getItem("melhor-jogo")<contarMelhorJogo){
        localStorage.setItem("melhor-jogo", contarMelhorJogo);
    }
    contarMelhorJogo=0;    
}

function jogarNovamente() {
    document.getElementById("mensagemGanhou").style.display = "none";
    document.getElementById("mensagemPerdeu").style.display = "none";
    
    limpaAmbiente();
    
    criaAmbiente();    
}

export function parar(){
    document.getElementById('mensagemPerdeu').style.display = "none";
    document.getElementById('mensagemGanhou').style.display = "none";
    document.getElementById('tela-inicial').style.display = "flex";
    
    console.log('localStorage.getItem("melhor-jogo"): '+ localStorage.getItem("melhor-jogo") + ' / contarMelhorJogo: '+contarMelhorJogo);
    if(localStorage.getItem("melhor-jogo")<contarMelhorJogo){
        localStorage.setItem("melhor-jogo", contarMelhorJogo);
    }
    document.getElementById("game-board").innerHTML='';
    document.getElementById('melhor-jogo').innerHTML = 'Melhor jogo até agora: ' + localStorage.getItem("melhor-jogo");
    limpaAmbiente();
    contarMelhorJogo=0;   
}

function abrirTutorial() {
    let mensagemTutorial = document.getElementById("tutorial");
    mensagemTutorial.style.display = "flex";
}

function sairTutorial(){
    document.getElementById("tutorial").style.display = 'none';
}

function darDica() {
    if (podeDarDica()) {
        const arrayIndices = [];
        carregaArrayIndicesDarDica(arrayIndices);
        
        const indiceAleatorio = getRandomIndex(arrayIndices.length);
        const indiceParaDica = arrayIndices[indiceAleatorio];
        
        const letra = obterLetraDica(indiceParaDica);
        
        console.log(`${letra} : ${indiceParaDica}`);
        
        inserirDicaPosicao(letra, indiceParaDica);
        setArrayDicas(indiceParaDica, letra);
        
        quantDicas++;
        console.log(quantDicas);
    }
}

function podeDarDica() {
    return quantDicas <= quantMaxDicas;
}

function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}

function obterLetraDica(indice) {
    const arrayPalavraGabarito = Array.from(palavraGabarito.nome);
    return arrayPalavraGabarito[indice];
}

function carregaArrayIndicesDarDica(arrayIndices) {
    let posicao = 0;
    for (const letra of arrayAcertosUsuario) {
        if (letra === 0) {
            arrayIndices.push(posicao);
        }
        posicao++;
    }
}

function inserirDicaPosicao(letra, indiceAleatorioArray) {
    let box = inserirLetraHtml(indiceAleatorioArray, letra);
    inserirArrayPalavraUsuario(indiceAleatorioArray, letra, arrayIndicesPalavraUsuario.indexOf(indiceAleatorioArray));
    box.style.backgroundColor = 'black';
    box.style.color = 'white';
    arrayAcertosUsuario[indiceAleatorioArray] = '#';
}

function setArrayDicas(posicao, letra) {
    arrayDicas.push({ 'chave': posicao, 'valor': letra });
    console.log(arrayDicas);
}

export function deletarLetra() {
    let board = document.getElementById("game-board");
    board.innerHTML='';
    constroiBoardHTML(board);
    inicializaArrayIndices();
    console.log(arrayDicas);
    adicionaDicas();
}

function adicionaDicas(){
    arrayDicas.forEach(element => {
        inserirDicaPosicao(element.valor, element.chave);
    });    
}

inicializaJogo()
window.criaAmbiente = criaAmbiente;
window.jogarNovamente = jogarNovamente;
window.abrirTutorial = abrirTutorial;
window.darDica = darDica;
window.deletarLetra = deletarLetra;
window.parar = parar;
window.sairTutorial = sairTutorial;