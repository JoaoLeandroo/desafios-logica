// Escreva um programa que encontre o número mais frequentemente repetido em um array de números.
// Peça ao usuário para inserir os números e exiba o número mais frequente.

let numbers = [2, 6, 8, 2, 3, 8, 9, 17, 8, 6, 22, 72, 6, 6]
let num = 0
let valor = 0
let x = 0
for(let i = 0; i < numbers.length; i++) {
    for(let j = 0; j < numbers.length; j++) {
        if(numbers[i] === numbers[j]){
            num = num + 1

        }
    }

    if(num >= x) {
        x = num
        valor = numbers[i]
    }
    num = 0
}

console.log(`O número mais frequente é ${valor} aparece um total de ${x} vezes.`)