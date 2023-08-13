// Crie uma lista de frutas(array) e mantenha o o item "Laranja" fixo na posição 2
// Adicione itens ao inicio do array e encontre uma forma de manter a Laranja sempre na posição 2, sem excluir nenhum item do array.


const listFruits = ['uva', 'Pêra', 'Laranja', 'Maçã']
console.log("Item na Posição 2, na lista original: " + listFruits[2])

// listFruits.unshift("Acerola")
// listFruits.unshift("Abacaxi")
// listFruits.unshift("Banana")

if(listFruits[2] == 'Laranja') {
    console.log(listFruits[2])
}
else {
    const posiLaranja = listFruits.indexOf("Laranja")

    // Nesse Splice, estou removendo o item Laranja do array 
    listFruits.splice(posiLaranja, 1)

    // Nesse splice, eu adicione o item Laranja, na posi 2
    listFruits.splice(2, 0, 'Laranja')
    console.log(listFruits)
    console.log("posi 2: " + listFruits[2])

}

