// Calcular a soma dos elementos de um array
// Escreva uma função que receba um array de números como entrada e retorne a soma de todos os elementos. 
// Por exemplo, se o array for [1, 2, 3, 4, 5], a saída deve ser 15.

const arrayNumbers = [29, 33, 28, 88, 92]
let calc = 0
function calculadorNumbersArray(arr) {
    arr.map((num) => {
        calc += num
    })

    return calc
}

console.log(calculadorNumbersArray(arrayNumbers))