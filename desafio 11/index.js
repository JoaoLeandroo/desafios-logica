// Inverter uma string
// Escreva uma função que receba uma string como entrada e retorne a mesma string invertida. 
// Por exemplo, se a entrada for "Hello, World!", a saída deve ser "!dlroW ,olleH".
let x = []
let stringName = 'leandro'

function inverterString(name) {
    x = []
    for(let i = 0; i < name.length; i++) {
        x.push(name[i])
    }

    x.reverse()
    stringName = x.join('')
    console.log(stringName)
}

inverterString(stringName)