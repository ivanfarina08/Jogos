const dados = [
    {
        "id":1,
        "canva": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href="aa"></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">      <rect x="99" y="70" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">      <rect x="69" y="166" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">      <rect x="212" y="47" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">      <rect x="286" y="69" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">      <rect x="340" y="242" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">      <rect x="392" y="0" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">      <rect x="522" y="197" fill="#fff" opacity="0" width="50" height="50"></rect>    </a>'
    },
    {
        "id":2,
        "canva": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1"      onclick="erroClicado(1)" xlink:href="#">      <rect x="589" y="83" fill="#fff" opacity="0" width="50" height="90"></rect>    </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">      <rect x="520" y="222" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">      <rect x="408" y="311" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">      <rect x="157" y="149" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">      <rect x="388" y="83" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">      <rect x="85" y="233" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">      <rect x="0" y="0" fill="#fff" opacity="0" width="50" height="50"></rect>    </a>'
    },
    {
        "id":3,
        "canva": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">      <rect x="569" y="310" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a  id="erro2" onclick="erroClicado(2)" xlink:href="#">      <rect x="388" y="316" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro3" onclick="erroClicado(3)"  xlink:href="#">      <rect x="303" y="120" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro4" onclick="erroClicado(4)"  xlink:href="#">      <rect x="274" y="208" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro5" onclick="erroClicado(5)"  xlink:href="#">      <rect x="122" y="96" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro6" onclick="erroClicado(6)"  xlink:href="#">      <rect x="53" y="163" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro7" onclick="erroClicado(7)"  xlink:href="#">      <rect x="589" y="207" fill="#fff" opacity="0" width="50" height="50"></rect>    </a>'
    },
    {
        "id":4,
        "canva": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">      <rect x="254" y="105" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">      <rect x="589" y="218" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">      <rect x="491" y="128" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">      <rect x="573" y="0" fill="#fff" opacity="0" width="66" height="73"></rect>    </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">      <rect x="431" y="315" fill="#fff" opacity="0" width="70" height="50"></rect>    </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">      <rect x="129" y="299" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">      <rect x="464" y="189" fill="#fff" opacity="0" width="50" height="50"></rect>    </a>'
    },
    {
        "id":5,
        "canva": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">      <rect x="305" y="1" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">      <rect x="516" y="221" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">      <rect x="360" y="298" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">      <rect x="420" y="68" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">      <rect x="382" y="242" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">      <rect x="24" y="107" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">      <rect x="55" y="8" fill="#fff" opacity="0" width="50" height="50"></rect>    </a>'
    },
    {
        "id":6,
        "canva": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">      <rect x="555" y="252" fill="#fff" opacity="0" width="57" height="79"></rect>    </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">      <rect x="74" y="144" fill="#fff" opacity="0" width="50" height="100"></rect>    </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">      <rect x="0" y="145" fill="#fff" opacity="0" width="50" height="100"></rect>    </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">      <rect x="315" y="304" fill="#fff" opacity="0" width="63" height="50"></rect>    </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">      <rect x="367" y="104" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">      <rect x="150" y="188" fill="#fff" opacity="0" width="50" height="69"></rect>    </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">      <rect x="512" y="76" fill="#fff" opacity="0" width="50" height="50"></rect>    </a>'
    }
]

const quantErroMax = 7;
const quantImagensMax = 6;
let quantErro = 0;
let ordemImagens = [];

function inicializaJogo(){
    randomizaImagem();
    let caminhoImagemSemErro = "img/sete_erros/Imagem "+ordemImagens[0]+" - 1.png";
    let caminhoImagemComErro = "img/sete_erros/Imagem "+ordemImagens[0]+" - 2.png";
    let dadosImagem = obterDadosPorId(ordemImagens[0]);
    document.getElementById("caminhoImagemSemErro").src = caminhoImagemSemErro;
    document.getElementById("imagemComErro").innerHTML = dadosImagem.canva;
    document.getElementById("caminhoImagemComErro").setAttributeNS("http://www.w3.org/1999/xlink","href",caminhoImagemComErro);
}

inicializaJogo();

function obterDadosPorId(id) {
    // Procurar no array pelo objeto com o ID correspondente
    const dadosDoId = dados.find(item => item.id === id);

    // Verificar se o objeto foi encontrado
    if (dadosDoId) {
        return (dadosDoId);
    } else {
        console.log('Nenhum dado encontrado para o ID:', id);
    }
}

function randomizaImagem(){
    console.log("instancia ordem");
    for(let i = 0; i < quantImagensMax; i++){
        ordemImagens[i] = i + 1;
        console.log(ordemImagens[i]);
    }
    console.log("randomiza");
    for(let i = 0; i < quantImagensMax; i++){
        let numeroRandomico = getRandomInt(quantImagensMax);
        let getItemOrdemImagens = ordemImagens[numeroRandomico];
        ordemImagens[numeroRandomico] = ordemImagens[i];
        ordemImagens[i] = getItemOrdemImagens;
    }
    for(let i = 0; i < quantImagensMax; i++){
        console.log(ordemImagens[i]);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function erroClicado(erro) {
    destacaErro(erro);
    quantErro++;
    if(quantErro==quantErroMax){
        ganhou();
    }
}

function destacaErro(erro){
    // Seleciona o elemento SVG
    var svg = document.querySelector('svg');

    // Obtém o elemento de link correspondente ao erro clicado
    var link = document.getElementById('erro' + erro);

    // Obtém as coordenadas do retângulo do link clicado
    var rect = link.querySelector('rect');
    var x = parseFloat(rect.getAttribute('x'));
    var y = parseFloat(rect.getAttribute('y'));
    var width = parseFloat(rect.getAttribute('width'));
    var height = parseFloat(rect.getAttribute('height'));

    // Cria a forma correspondente ao erro clicado
    var forma = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    forma.setAttribute('x', x);
    forma.setAttribute('y', y);
    forma.setAttribute('width', width);
    forma.setAttribute('height', height);
    forma.setAttribute('fill', 'rgba(255, 0, 0, 0.5)'); // Cor de preenchimento da forma (exemplo: vermelho transparente)
    svg.appendChild(forma);
}

function ganhou(){
    alert("parabens!");
    location.reload();
}

