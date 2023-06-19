// Escreva um programa que verifique se uma palavra é um isograma. 
// Um isograma é uma palavra em que nenhuma letra se repete. 
// Por exemplo, "house" é um isograma, mas "hello" não é.

let palavra = ''
let verifique;
function checkWord(word) {
    for(let i = 0; i < word.length; i++) {

        if(palavra.includes(word[i]) === true){
            verifique = true
            palavra += word[i].toLowerCase()
        }else{

            palavra += word[i].toLowerCase()
        }
        

    }
}
checkWord('casa')

if(verifique === true) {
    console.log(`a palavra ${palavra} NÃO é um isograma`)
}else{
    console.log(`a palavra ${palavra} É um isograma`)
}
