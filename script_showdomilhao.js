//Perguntas
const dados = [
    {
        "id": 1,
        "pergunta": "Quem foi o codificador da doutrina espírita?",
        "opcao1": "Allan Kardec",
        "opcao2": "Leon Dennis",
        "opcao3": "Chico Xavier",
        "resposta": "Allan Kardec"
    },
    {
        "id": 2,
        "pergunta": "Qual o nome completo de Allan Kardec?",
        "opcao1": "Allan Kardec",
        "opcao2": "Hippolyte Léon Denizard Rivail",
        "opcao3": "Hippolyte Rivail",
        "resposta": "Hippolyte Léon Denizard Rivail"
    },
    {
        "id": 3,
        "pergunta": "Em que ano surgiu o espiritismo?",
        "opcao1": "2023",
        "opcao2": "1950",
        "opcao3": "1857",
        "resposta": "1857"
    },
    {
        "id": 4,
        "pergunta": "De acordo com os espíritos: Que é Deus?",
        "opcao1": "Deus é a inteligência suprema, causa primária de todas as coisas",
        "opcao2": "Ser que não liga para sua criação",
        "opcao3": "Deus não existe",
        "resposta": "Deus é a inteligência suprema, causa primária de todas as coisas"
    },
    {
        "id": 5,
        "pergunta": "O que é fé inabalável em todas as épocas da humanidade?",
        "opcao1": "que não destrói nem com o terremoto",
        "opcao2": "que não se perde com o tempo",
        "opcao3": "que pode encarar a razão face a face",
        "resposta": "que pode encarar a razão face a face"
    },
    {
        "id": 6,
        "pergunta": "Qual é o limite da felicidade?",
        "opcao1": "proporcional às coisas materiais que conseguir adquirir",
        "opcao2": "proporcional em relação ao que fazemos aos outros",
        "opcao3": "proporcional aos afetos que adquirir receber",
        "resposta": "proporcional em relação ao que fazemos aos outros"
    },
    {
        "id": 7,
        "pergunta": "Qual é a frase famosa de Allan Kardec sobre caridade?",
        "opcao1": "fora da caridade, não há perdão",
        "opcao2": "fora da caridade, não há salvação",
        "opcao3": "fora da caridade, não há emoção",
        "resposta": "fora da caridade, não há salvação"
    },
    {
        "id": 8,
        "pergunta": "Com quais pessoas os bons espíritos simpatizam?",
        "opcao1": "com as capazes de se melhorar",
        "opcao2": "com as melhores da escola",
        "opcao3": "com as muito inteligentes",
        "resposta": "com as capazes de se melhorar"
    },
    {
        "id": 8,
        "pergunta": "Como termina a frase de Jesus 'dê graça recebestes…'",
        "opcao1": "de graça deveis dar",
        "opcao2": "de volta deves doar",
        "opcao3": "de  novo deves pedir",
        "resposta": "de graça deveis dar"
    },
    {
        "id": 9,
        "pergunta": "O que acontece quando coloco o amor em minhas ações?",
        "opcao1": "os sentimentos e pensamentos são corretos",
        "opcao2": "os sentimentos e pensamentos são errados",
        "opcao3": "os sentimentos e pensamentos estão separados",
        "resposta": "os sentimentos e pensamentos são corretos"
    },
    {
        "id": 10,
        "pergunta": "Qual é a frase Allan Kardec sobre verdades e mentiras?",
        "opcao1": "é melhor rejeitar dez verdades do que aceitar uma mentira",
        "opcao2": "é melhor rejeitar dez mentiras do que aceitar uma verdade",
        "opcao3": "é melhor rejeitar dez verdades do que aceitar dez mentiras",
        "resposta": "é melhor rejeitar dez verdades do que aceitar uma mentira"
    },
    {
        "id": 11,
        "pergunta": "O que Allan Kardec falou sobre egoísmo e caridade?",
        "opcao1": "o egoísmo é a fonte dos tolos e a caridade das virtudes",
        "opcao2": "o egoísmo é a fonte das virtudes e a caridade dos vícios",
        "opcao3": "o egoísmo é a fonte dos vícios e a caridade das virtudes",
        "resposta": "o egoísmo é a fonte dos vícios e a caridade das virtudes"
    },
    {
        "id": 12,
        "pergunta": "O que Allan Kardec falava sobre a educação?",
        "opcao1": "chave do céu",
        "opcao2": "chave do progresso",
        "opcao3": "chave do conhecimento",
        "resposta": "chave do progresso"
    },
    {
        "id": 13,
        "pergunta": "Como podemos reconhecer o verdadeiro espírita?",
        "opcao1": "transformação de esforços para domar as inclinações",
        "opcao2": "transformação de inclinações para domar os esforços",
        "opcao3": "transformação moral e esforços para domar as más inclinações",
        "resposta": "transformação moral e esforços para domar as más inclinações"
    },
    {
        "id": 14,
        "pergunta": "O que a paciência  era considerada para Allan Kardec?",
        "opcao1": "caridade",
        "opcao2": "alegria",
        "opcao3": "calma",
        "resposta": "caridade"
    },
    {
        "id": 15,
        "pergunta": "Como posso saber se estou amando o meu inimigo?",
        "opcao1": "quando retribuir o bem pelo mal",
        "opcao2": "quando retribuir o mal pelo bem",
        "opcao3": "quando esquecer o que ele fez",
        "resposta": "quando retribuir o mal pelo bem"
    },
    {
        "id": 16,
        "pergunta": "Qual é a frase de Allan Kardec sobre compreender?",
        "opcao1": "não basta ver para crer é preciso compreender",
        "opcao2": "não basta compreender é preciso ver",
        "opcao3": "não basta ver para compreender é preciso crer",
        "resposta": "não basta ver para crer é preciso compreender"
    },
    {
        "id": 17,
        "pergunta": "Qual é a frase que está escrita no túmulo de Allan Kardec?",
        "opcao1": "nascer, crescer, morrer, renascer ainda e progredir sempre",
        "opcao2": "nascer, crescer e renascer essa é a lei",
        "opcao3": "nascer, crescer e morrer essa é a lei",
        "resposta": "nascer, crescer, morrer, renascer ainda e progredir sempre"
    },
    {
        "id": 18,
        "pergunta": "O que acontece se eu praticar o bem?",
        "opcao1": "recebo uma recompensa",
        "opcao2": "recebo de volta tudo o que der aos outros",
        "opcao3": "recebo os parabéns",
        "resposta": "recebo de volta tudo o que der aos outros"
    },
    {
        "id": 19,
        "pergunta": "Como os espíritos explicam sobre os laços de família?",
        "opcao1": "que não são os de sangue, e sim de simpatia e ideias similares",
        "opcao2": "que não são os de simpatia, mas sim os de sangue",
        "opcao3": "que não são os de ideias similares, e sim os de sangue",
        "resposta": "que não são os de sangue, e sim de simpatia e ideias similares"
    },
    {
        "id": 20,
        "pergunta": "O que os espíritos explicam sobre a lei moral de Destruição?",
        "opcao1": "é o meio de atingir a perfeição, porque tudo morre para renascer",
        "opcao2": "é o meio de não atingir a perfeição porque tudo morre",
        "opcao3": "é o meio de atingir a morte porque ninguém renasce",
        "resposta": "é o meio de atingir a perfeição, porque tudo morre para renascer"
    },
    {
        "id": 21,
        "pergunta": "Segundo Allan Kardec, com a humildade posso buscar qual atributo?",
        "opcao1": "alegria",
        "opcao2": "felicidade",
        "opcao3": "paz",
        "resposta": "felicidade"
    },
    {
        "id": 22,
        "pergunta": "Em que ano Chico Xavier desencarnou?",
        "opcao1": "1.999",
        "opcao2": "2.002",
        "opcao3": "2.001",
        "resposta": "2.002"
    },
    {
        "id": 22,
        "pergunta": "Em que ano Allan Kardec nasceu?",
        "opcao1": "1.804",
        "opcao2": "1.812",
        "opcao3": "1.806",
        "resposta": "1.804"
    },
    {
        "id": 22,
        "pergunta": "No livro Há 2000 anos como Emmanuel era chamado?",
        "opcao1": "Publius Lentulus",
        "opcao2": "Cornélio",
        "opcao3": "Julio Cesar",
        "resposta": "Publius Lentulus"
    },
    {
        "id": 23,
        "pergunta": "Em qual cidade nasceu Allan Kardec?",
        "opcao1": "Paris",
        "opcao2": "Galia",
        "opcao3": "Lyon",
        "resposta": "Lyon"
    },
    {
        "id": 24,
        "pergunta": "Em que mês e ano foi publicado o livro Evangelho Segundo o Espiritismo?",
        "opcao1": "março 1863",
        "opcao2": "abril 1864",
        "opcao3": "junho 1869",
        "resposta": "abril 1864"
    },
    {
        "id": 25,
        "pergunta": "Em que dia, mês e ano desencarnou Allan Kardec?",
        "opcao1": "31 março 1867",
        "opcao2": "29 abril 1868",
        "opcao3": "31 março 1869",
        "resposta": "31 março 1869"
    },
    {

        "id": 26,
        "pergunta": "Em que ano foi publicado o livro Há 2000 anos?",
        "opcao1": "1938",
        "opcao2": "1939",
        "opcao3": "1937",
        "resposta": "1939"
    },
    {
        "id": 27,
        "pergunta": "Como chama o espírito que ditou as obras chamada 'A vida no Mundo Espiritual'?",
        "opcao1": "Emmanuel",
        "opcao2": "André Luiz",
        "opcao3": "Irmão X",
        "resposta": "André Luiz"
    },
    {
        "id": 28,
        "pergunta": "Como chama o primeiro livro da obra chamada 'A vida no Mundo Espiritual'?",
        "opcao1": "Nosso Lar",
        "opcao2": "Libertação",
        "opcao3": "No Mundo Maior",
        "resposta": "Nosso Lar"
    },
    {
        "id": 29,
        "pergunta": "Como chamava a primeira mãe de Chico Xavier?",
        "opcao1": "Maria João de Deus",
        "opcao2": "Marta da Silva",
        "opcao3": "Neide Araújo",
        "resposta": "Maria João de Deus"
    },
    {
        "id": 30,
        "pergunta": "Em que ano nasceu Chico Xavier?",
        "opcao1": "1912",
        "opcao2": "1910",
        "opcao3": "1911",
        "resposta": "1912"
    },
]



//Habilita Botao Confirmar
// Obtém referências para os elementos do DOM
let radioButtons = document.querySelectorAll('input[type="radio"]');
let meuBotao = document.getElementById('meuBotao');

// Adiciona um ouvinte de eventos para cada botão de rádio
radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
        // Verifica se pelo menos um botão de rádio está selecionado
        let algumSelecionado = Array.from(radioButtons).some(function (radio) {
            return radio.checked;
        });

        // Habilita ou desabilita o botão com base na verificação
        meuBotao.disabled = !algumSelecionado;
    });
});


//Cria Variaveis
const quant_perguntas = 30;
const quant_campeao = 7;
const quant_pulos_possiveis = 3;
const valor_cada_questao = ['0', '100', '500', '1.000', '10.000', '50.000', '25.0000', '1.000.000'];
let array_ordem_perguntas = [];
let quantidade_respondidas = 0;
let quant_pulos = 0;
let resposta = '';


function inicializaJogo() {
    let array_indices = [];
    for (let i = 0; i < quant_perguntas; i++) {
        array_indices.push(i);
    }
    quantidade_respondidas = 0;
    for (let cont = 0; cont < quant_perguntas; cont++) {
        let valor_aleatorio = getRandomInt(array_indices.length - 1); //Gera um index aleatorio
        array_ordem_perguntas[cont] = array_indices[valor_aleatorio] + 1;
        array_indices.splice(valor_aleatorio, 1);
    }
}


//Função que gera numero aleatório
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


//Verifica valor selecionado
function mostrarSelecionado() {
    meuBotao.disabled = true;
    let respostaUsuario = PegaValor();
    resetaRadioButton();
    if (respostaUsuario !== resposta) {
        respostaErrada();
    }
    else {
        respostaCerta();
    }
}


//Verifica valor selecionado
function PegaValor() {
    let radioButtons = document.getElementsByName('options-outlined');
    for (const element of radioButtons) {
        if (element.checked) {
            let idRespostaUsuario = 'resposta' + element.id;
            let respostaUsuario = document.getElementById(idRespostaUsuario).innerHTML;
            return respostaUsuario;
        }
    }
}

function resetaRadioButton() {
    let radioButtons = document.getElementsByName('options-outlined');
    meuBotao.disabled = true;
    for (const element of radioButtons) {
        if (element.checked) {
            element.checked = false;
        }
    }
}


//Pular Pergunta
function pularPergunta() {
    quant_pulos++;
    if (quant_pulos <= quant_pulos_possiveis) {
        let nova_pergunta = quantidade_respondidas + quant_pulos;        
        resetaRadioButton();
        carregaPergunta(array_ordem_perguntas[nova_pergunta]);        
    }
    if (quant_pulos > quant_pulos_possiveis) {
        let btpular = document.getElementById('btPular');
        btpular.disabled = true;
    }
}



//Resposta Errada
function respostaErrada() {
    document.getElementById("respostaCerta").innerHTML = resposta;
    document.getElementById("mensagemErrou").style.display = "flex";
}



//Resposta Certa
function respostaCerta() {
    quantidade_respondidas++;
    if (quantidade_respondidas < 7) {
        document.getElementById("parabens_acertou").style.display = "flex";
        document.getElementById("valor_pergunta_atual_1").innerHTML = "Pontuação atual: " + valor_cada_questao[quantidade_respondidas];
        document.getElementById("valor_pergunta_proxima").innerHTML = "Próxima pergunta: " + valor_cada_questao[quantidade_respondidas + 1];
        let nova_pergunta = quantidade_respondidas + quant_pulos;
        carregaPergunta(array_ordem_perguntas[nova_pergunta]);
    }
    else { ganhouJogo() }
}


//Continua Jogo
function continuaJogo() {
    document.getElementById("parabens_acertou").style.display = "none";
    let nova_pergunta = quantidade_respondidas + quant_pulos;
    carregaPergunta(array_ordem_perguntas[nova_pergunta]);
}


//Para Jogo
function paraJogo() {
    document.getElementById("parabens_acertou").style.display = "none";
    document.getElementById("mensagemParouJogo").style.display = "flex";
    document.getElementById("valor_pergunta_atual_2").innerHTML = valor_cada_questao[quantidade_respondidas] + " pontos!";
}


//Ganhou Jogo
function ganhouJogo() {
    document.getElementById("mensagemGanhouJogo").style.display = "flex";
}


//Carrega Perguntas
function carregaPergunta(value) {
    let questao = obterDadosPorId(value);
    console.log(value);
    carregaHTML(questao);
}


//Obtem os dados da constante
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


//Altera as questões no html
function carregaHTML(questao) {
    document.getElementById('pergunta').innerHTML = questao.pergunta;
    document.getElementById('resposta1').innerHTML = questao.opcao1;
    document.getElementById('resposta2').innerHTML = questao.opcao2;
    document.getElementById('resposta3').innerHTML = questao.opcao3;
    document.getElementById('quant_pergunta').innerHTML = quantidade_respondidas + 1 + '/' + 7;
    document.getElementById('valor_pergunta').innerHTML = "Pontos: "+valor_cada_questao[quantidade_respondidas];
    resposta = questao.resposta;
}


//Reseta Jogo

function resetaJogo() {
    document.getElementById("mensagemErrou").style.display = "none";
    document.getElementById("mensagemParouJogo").style.display = "none";
    document.getElementById("mensagemGanhouJogo").style.display = "none";
    inicializaJogo();
    carregaPergunta(array_ordem_perguntas[quantidade_respondidas]);
}


//  Inicializar o Jogo
inicializaJogo();
carregaPergunta(array_ordem_perguntas[quantidade_respondidas]);
console.log(array_ordem_perguntas);