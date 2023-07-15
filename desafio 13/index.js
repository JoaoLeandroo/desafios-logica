// Contar o número de palavras em uma frase
// Escreva uma função que receba uma frase como entrada e retorne o número de palavras presentes na frase. 
// Considere que as palavras são separadas por espaços em branco.
// Por exemplo, se a frase de entrada for "Olá, como você está?", a saída deve ser 4.

function contarPalavras(frase) {
    // Remove espaços em branco extras no início e no fim da frase
    const fraseSemEspacos = frase.trim()
    
    // Divide a frase em palavras usando o espaço em branco como delimitador
    const palavras = fraseSemEspacos.split(" ")
    
    // Retorna o número de palavras presentes na frase
    return palavras.length
  }
  
  const frase = "Ola amigos, como voces estao?"
  const numeroPalavras = contarPalavras(frase)
  console.log(numeroPalavras)
  