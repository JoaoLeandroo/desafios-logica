// Escreva um programa que determine o segundo maior elemento de um array de números.
// Peça ao usuário para inserir os números e exiba o segundo maior elemento.

let arrayNumbers = [12, 22, 3, 8, 31, 10, 4, 4, 8, 16, 92, 220, 80, 30, 17, 13, 29, 42, 93, 94, 89, 95, 90, 71]
arrayNumbers.sort((a, b) => {
    return a - b
})

let secondNumber = 0
let numero = 0

arrayNumbers.map((num) => {
    if(num > numero) {
        secondNumber = numero
        numero = num
    }
})

console.log("O segundo maior numero da lista é " + secondNumber)