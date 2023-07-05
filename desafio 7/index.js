// Criar uma função que receba um array de strings como parâmetro
// e retorne um novo array com a primeira letra de cada palavra.

const arrayStrings = ['Futebol', 'Golfe', 'Judô', 'Formula 1', 'Volei']
// arrayStrings.map((item) => {
//     console.log(item.charAt(0))

// })
const newArray = []

function retornNewArray(array) {
    array.map((item) => {
        newArray.push(item.charAt(0))
    })
}

retornNewArray(arrayStrings)

console.log("Primeira letra de cada palavra " + newArray)

