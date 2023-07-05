// Criar uma função que receba uma string como parâmetro e retorne a mesma string sem as vogais.
let x = []

function removeVogais(vogais) {
    for(let i = 0; i < vogais.length; i++) {
        if(vogais[i].toLowerCase() === 'a' || vogais[i].toLowerCase() === 'e' || vogais[i].toLowerCase() === 'i' || vogais[i].toLowerCase() === 'o' || vogais[i].toLowerCase() === 'u'){
            
        }else{
            x.push(vogais[i])
        }
    }
}

removeVogais('Carro')

let palavra = x.join('')
console.log(palavra)