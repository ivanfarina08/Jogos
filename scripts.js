var imagem_virada = [false, false, false, false, false, false, false, false, false, false, false, false];
var imagem_src = [];
var array_indices = [];
var cartas_viradas_indice = [];
var cartas_viradas_id = [];
var quant_viradas = 0;
var quant_pares = 0;
const quant_pares_jogo = 6;
const quantidade_cartas = 12;

randomiza_cartas();

function randomiza_cartas() {
    imagem_src = [false, false, false, false, false, false, false, false, false, false, false, false,];
    array_indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let cont = 0;
    while (array_indices.length>0) {
        cont++;
        let quant_indices = array_indices.length - 1;
        let valor_aleatorio = getRandomInt(quant_indices); //Gera um index aleatorio
        
        if(cont>6) cont=cont-6;
        imagem_src[array_indices[valor_aleatorio]] = cont;
        
        array_indices.splice(valor_aleatorio, 1);
        
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function vira_carta(value) {
    var elemento = document.getElementById("img" + value);

    cartas_viradas_id[quant_viradas] = value;
    console.log(cartas_viradas_id);
    cartas_viradas_indice[quant_viradas] = verifica_dispositivo(value);
    console.log(cartas_viradas_indice);

    troca_imagem(value, elemento);

    quant_viradas++;

    if (quant_viradas == 2) {
        if(cartas_viradas_id[0]!=cartas_viradas_id[1]){
            if (verifica_par()) {
                par_perfeito(elemento);
            }
            else {
                par_errado(elemento);
            }
        }
        else{
            cartas_viradas_id=[];
            cartas_viradas_indice=[];
            quant_viradas=0;
        }        
    }
}

function verifica_dispositivo(value) {
    let dispositivo = value - quantidade_cartas;
    if (dispositivo >= 0) {
        let celular = dispositivo;
        
        return celular;
    }
    let computador = value;
    return computador;
}

function troca_imagem(value, elemento) {
    console.log(imagem_virada[cartas_viradas_indice[quant_viradas]]);
    if (imagem_virada[cartas_viradas_indice[quant_viradas]]) {
        elemento.src = "img/virada.png";
        imagem_virada[cartas_viradas_indice[quant_viradas]] = false;
    }
    else {
        
        elemento.src = "img/" + imagem_src[cartas_viradas_indice[quant_viradas]] + ".jpg";
        imagem_virada[cartas_viradas_indice[quant_viradas]] = true;
    }
    console.log(imagem_virada[cartas_viradas_indice[quant_viradas]]);
}

function verifica_par() {
    if (imagem_src[cartas_viradas_indice[0]] == imagem_src[cartas_viradas_indice[1]]) {
        return true;
    }
    else {
        return false;
    }
}

function par_perfeito(elemento) {
    let elemento2 = document.getElementById("img" + cartas_viradas_id[0]);
    elemento.onclick = null;
    elemento2.onclick = null;
    quant_viradas = 0;
    cartas_viradas_indice = [];
    quant_pares++;
    fim_jogo();
}

function par_errado(elemento) {
    setTimeout(function () {
        let elemento2 = document.getElementById("img" + cartas_viradas_id[0]);
        elemento.src = "img/virada.png";
        elemento2.src = "img/virada.png";
        quant_viradas = 0;
        imagem_virada[cartas_viradas_indice[0]] = false;
        imagem_virada[cartas_viradas_indice[1]] = false;
        cartas_viradas = [];

    }, 500); //delay is in milliseconds
}

function fim_jogo() {
    if (quant_pares == quant_pares_jogo) {
        setTimeout(function () {
            document.getElementById("fim_jogo").style.display = "flex";
        }, 1000);
    }
}

function reseta_jogo() {
    quant_viradas = 0;
    cartas_viradas_id = [];
    cartas_viradas_indice = [];
    for (let i = 0; i < 24; i++) {
        var elemento = document.getElementById("img" + i);
        elemento.src = "img/virada.png";
        elemento.onclick = function onclick(event) {
            vira_carta(i);
        };
        imagem_virada[i] = false;
    }
    quant_pares = 0;
    document.getElementById("fim_jogo").style.display = "none";
    randomiza_cartas();
}