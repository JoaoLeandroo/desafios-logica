// Faça a contagem de elementos dentro de um array a partir de determinado index

const listItens = ['Joao', 'melancia', 'bicicleta', 'luana', 'carro', 'ventilador', 'ruan', 'barco']
let cont = 0
const searchNome = "Carro"

listItens.forEach((todo) => {
    if(cont > 0) cont++

    if(todo.toUpperCase() === searchNome.toUpperCase()) cont++
})

console.log(cont)