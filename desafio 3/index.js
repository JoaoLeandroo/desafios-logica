// Escreva um programa que determine o maior elemento de um array de números.
// Peça ao usuário para inserir os números e exiba o maior elemento.    
let arrayNumbers = [12, 22, 3, 8, 31, 10, 4, 4, 8, 16, 92, 220, 80, 30, 17, 13, 29, 42]
let higherNumber = 0

arrayNumbers.map((numbers) => {
    if(numbers >= higherNumber) {
        higherNumber = numbers
    }
})

console.log("Maior Valor do Array " + higherNumber)