const dados = [
    {
        "id":1,
        "descricao":"Arca de Noé",
        "html": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href="aa"></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">      <rect x="99" y="70" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">      <rect x="69" y="166" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">      <rect x="212" y="47" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">      <rect x="286" y="69" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">      <rect x="340" y="242" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">      <rect x="392" y="0" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">      <rect x="522" y="197" fill="#fff" opacity="0" width="50" height="50"></rect>    </a>'
    },
    {
        "id":2,
        "descricao":"Palácio do Faraó",
        "html": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1"      onclick="erroClicado(1)" xlink:href="#">      <rect x="589" y="83" fill="#fff" opacity="0" width="50" height="90"></rect>    </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">      <rect x="520" y="222" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">      <rect x="408" y="311" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">      <rect x="157" y="149" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">      <rect x="388" y="83" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">      <rect x="85" y="233" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">      <rect x="0" y="0" fill="#fff" opacity="0" width="50" height="50"></rect>    </a>'
    },
    {
        "id":3,
        "descricao":"Josué nas muralhas",
        "html": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">      <rect x="569" y="310" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a  id="erro2" onclick="erroClicado(2)" xlink:href="#">      <rect x="388" y="316" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro3" onclick="erroClicado(3)"  xlink:href="#">      <rect x="303" y="120" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro4" onclick="erroClicado(4)"  xlink:href="#">      <rect x="274" y="208" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro5" onclick="erroClicado(5)"  xlink:href="#">      <rect x="122" y="96" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro6" onclick="erroClicado(6)"  xlink:href="#">      <rect x="53" y="163" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro7" onclick="erroClicado(7)"  xlink:href="#">      <rect x="589" y="207" fill="#fff" opacity="0" width="50" height="50"></rect>    </a>'
    },
    {
        "id":4,
        "descricao":"Jonas dentro da baleia",
        "html": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">      <rect x="254" y="105" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">      <rect x="589" y="218" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">      <rect x="491" y="128" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">      <rect x="573" y="0" fill="#fff" opacity="0" width="66" height="73"></rect>    </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">      <rect x="431" y="315" fill="#fff" opacity="0" width="70" height="50"></rect>    </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">      <rect x="129" y="299" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">      <rect x="464" y="189" fill="#fff" opacity="0" width="50" height="50"></rect>    </a>'
    },
    {
        "id":5,
        "descricao":"Daniel na cova dos leões",
        "html": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">      <rect x="305" y="1" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">      <rect x="516" y="221" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">      <rect x="360" y="298" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">      <rect x="420" y="68" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">      <rect x="382" y="242" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">      <rect x="24" y="107" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">      <rect x="55" y="8" fill="#fff" opacity="0" width="50" height="50"></rect>    </a>'
    },
    {
        "id":6,
        "descricao":"Nascimento de Jesus",
        "html": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">      <rect x="555" y="252" fill="#fff" opacity="0" width="57" height="79"></rect>    </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">      <rect x="74" y="144" fill="#fff" opacity="0" width="50" height="100"></rect>    </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">      <rect x="0" y="145" fill="#fff" opacity="0" width="50" height="100"></rect>    </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">      <rect x="315" y="304" fill="#fff" opacity="0" width="63" height="50"></rect>    </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">      <rect x="367" y="104" fill="#fff" opacity="0" width="50" height="50"></rect>    </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">      <rect x="150" y="188" fill="#fff" opacity="0" width="50" height="69"></rect>    </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">      <rect x="512" y="76" fill="#fff" opacity="0" width="50" height="50"></rect>    </a>'
    },
    {
        "id":7,
        "descricao":"Jesus e João Batista",
        "html": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">    <rect x="589" y="130" fill="#fff" opacity="0" width="50" height="56"></rect>  </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">    <rect x="424" y="237" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">    <rect x="462" y="176" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">    <rect x="306" y="25" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">    <rect x="28" y="125" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">    <rect x="42" y="257" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">    <rect x="155" y="102" fill="#fff" opacity="0" width="50" height="50"></rect>  </a>'
    },
    {
        "id":8,
        "descricao":"Jesus no templo",
        "html": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">    <rect x="446" y="21" fill="#fff" opacity="0" width="122" height="50"></rect>  </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">    <rect x="589" y="102" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">    <rect x="421" y="296" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">    <rect x="348" y="156" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">    <rect x="69" y="160" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">    <rect x="19" y="168" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">    <rect x="0" y="12" fill="#fff" opacity="0" width="50" height="50"></rect>  </a>'
    },
    {
        "id":9,
        "descricao":"Jesus acalma as águas",
        "html": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">    <rect x="521" y="12" fill="#fff" opacity="0" width="99" height="54"></rect>  </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">    <rect x="580" y="206" fill="#fff" opacity="0" width="55" height="100"></rect>  </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">    <rect x="265" y="82" fill="#fff" opacity="0" width="50" height="58"></rect>  </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">    <rect x="210" y="154" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">    <rect x="417" y="89" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">    <rect x="61" y="46" fill="#fff" opacity="0" width="50" height="54"></rect>  </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">    <rect x="0" y="30" fill="#fff" opacity="0" width="50" height="89"></rect>  </a>'
    },
    {
        "id":10,
        "descricao":"Sermão do monte",
        "html": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">    <rect x="186" y="0" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">    <rect x="575" y="88" fill="#fff" opacity="0" width="64" height="65"></rect>  </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">    <rect x="359" y="316" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">    <rect x="78" y="200" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">    <rect x="58" y="250" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">    <rect x="208" y="269" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">    <rect x="0" y="60" fill="#fff" opacity="0" width="57" height="117"></rect>  </a>'
    },
    {
        "id":11,
        "descricao":"Última Ceia",
        "html": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">    <rect x="376" y="39" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">    <rect x="540" y="56" fill="#fff" opacity="0" width="99" height="50"></rect>  </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">    <rect x="318" y="266" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">    <rect x="208" y="271" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">    <rect x="62" y="125" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">    <rect x="193" y="72" fill="#fff" opacity="0" width="100" height="50"></rect>  </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">    <rect x="457" y="185" fill="#fff" opacity="0" width="50" height="74"></rect>  </a>'
    },
    {
        "id":12,
        "descricao":"Torre de Babel",
        "html": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">    <rect x="385" y="44" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">    <rect x="267" y="123" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">    <rect x="442" y="160" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">    <rect x="589" y="254" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">    <rect x="218" y="219" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">    <rect x="21" y="255" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">    <rect x="354" y="281" fill="#fff" opacity="0" width="50" height="50"></rect>  </a>'
    },
    {
        "id":13,
        "descricao":"Moisés e o povo no deserto",
        "html": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a id="erro1" onclick="erroClicado(1)" xlink:href="#">    <rect x="278" y="0" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">    <rect x="460" y="29" fill="#fff" opacity="0" width="50" height="69"></rect>  </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">    <rect x="574" y="118" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">    <rect x="280" y="314" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">    <rect x="49" y="103" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">    <rect x="162" y="219" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">    <rect x="9" y="17" fill="#fff" opacity="0" width="50" height="50"></rect>  </a>'
    },
    {
        "id":14,
        "descricao":"Davi x Golias",
        "html": '<image id="caminhoImagemComErro" width="639" height="366" xlink:href=""></image> <a  id="erro1" onclick="erroClicado(1)" xlink:href="#">    <rect x="479" y="54" fill="#fff" opacity="0" width="50" height="100"></rect>  </a><a id="erro2" onclick="erroClicado(2)" xlink:href="#">    <rect x="547" y="112" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro3" onclick="erroClicado(3)" xlink:href="#">    <rect x="229" y="240" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro4" onclick="erroClicado(4)" xlink:href="#">    <rect x="137" y="169" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro5" onclick="erroClicado(5)" xlink:href="#">    <rect x="16" y="33" fill="#fff" opacity="0" width="50" height="100"></rect>  </a><a id="erro6" onclick="erroClicado(6)" xlink:href="#">    <rect x="220" y="110" fill="#fff" opacity="0" width="50" height="50"></rect>  </a><a id="erro7" onclick="erroClicado(7)" xlink:href="#">    <rect x="357" y="62" fill="#fff" opacity="0" width="50" height="50"></rect>  </a>'
    },
]

const quantErroMax = 7;
const quantImagensMax = 14;
let quantErro = 0;
let ordemImagens = [];
let jogoAtual = 0;

function inicializaJogo(){
    getImagem();
    let caminhoImagemSemErro = "img/sete_erros/Imagem "+ordemImagens[jogoAtual]+" - 1.png";
    let caminhoImagemComErro = "img/sete_erros/Imagem "+ordemImagens[jogoAtual]+" - 2.png";
    let dadosImagem = obterDadosPorId(ordemImagens[jogoAtual]);
    document.getElementById("caminhoImagemSemErro").src = caminhoImagemSemErro;
    document.getElementById("imagemComErro").innerHTML = dadosImagem.html;
    document.getElementById("caminhoImagemComErro").setAttributeNS("http://www.w3.org/1999/xlink","href",caminhoImagemComErro);
    document.getElementById("introducao").style.display="none";
    document.getElementById("descricao_imagem").innerText= "("+dadosImagem.descricao+")";
    quantErro=0;
}

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

function getImagem(){
    if(jogoAtual==0){
        randomizaImagem();
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
    document.getElementById("ganhou").style.display = "flex";
    setTimeout(function () {
        atualizaJogoAtual();
        document.getElementById("ganhou").style.display = "none";
        document.getElementById("introducao").style.display = "flex";
    }, 2000);    
}

function desistir(){
    atualizaJogoAtual();
    document.getElementById("introducao").style.display="flex";
}

function atualizaJogoAtual(){
    //jogoAtual
    let maxJogos = quantImagensMax-1; //O jogo atual começa em 0
    
    if(jogoAtual==maxJogos){
        jogoAtual=0;
    }
    else{
        jogoAtual++;
    }
}

function abrirTutorial(){
    document.getElementById("tutorial").style.display="flex";
}

function fecharTutorial(){
    document.getElementById("tutorial").style.display="none";
}