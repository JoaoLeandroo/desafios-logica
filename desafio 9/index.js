// Criar uma função que receba uma string como parâmetro e retorne a mesma string com todas as palavras capitalizadas.

function capitalizarPalavras(frase) {
    let palavras = frase.split(" ")  // Divide a frase em palavras
    let capitalizadas = palavras.map(function(palavra) {
      return palavra.charAt(0).toUpperCase() + palavra.slice(1)  // Capitaliza a primeira letra de cada palavra
    });
    return capitalizadas.join(" ")  // Junta as palavras em uma única string
  }
  
 
  let frase = "exemplo de frase para capitalizar"
  let resultado = capitalizarPalavras(frase)
  console.log(resultado);  // Saída: "Exemplo De Frase Para Capitalizar"
  