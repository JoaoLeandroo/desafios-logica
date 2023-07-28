// Calcule a fatorial de um número.


let numero = 6
let num;
let result = 0

for(let i = numero; i > 0; i--) {
    if(num === 0) {
        num++
    }

    if(i === numero) {
        num = numero - 1
        result = i * num
        num--

    }

    if(i < numero) {
        result = result * num
        num--
    }
}

console.log("A fatorial de " + numero + " é " + result)
