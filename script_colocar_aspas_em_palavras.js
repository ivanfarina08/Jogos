// Função para ler o arquivo TXT
// Função para ler o arquivo TXT usando fetch
async function lerArquivo(caminho) {
    const resposta = await fetch(caminho);
    const dados = await resposta.text();
    return dados.split('\n');
  }
  
  
  // Função para adicionar aspas e vírgula
  function adicionarAspasVirgula(palavras) {
    return palavras.map(palavra => {
      // Expressão regular para verificar se a palavra tem 5 letras
      if (/^[a-zA-Z]{5}$/.test(palavra)) {
        return `'${palavra}',\n`;
      } else {
        return "";
      }
    }).join('');
  }
  
  
  // Função principal
  async function main() {
    const caminhoArquivo = '/br-sem-acentos.txt';
    const palavras = await lerArquivo(caminhoArquivo);
    const palavrasComAspasVirgula = adicionarAspasVirgula(palavras);
    document.getElementById("palavras").innerHTML = palavrasComAspasVirgula;
  }
  
  main();
  