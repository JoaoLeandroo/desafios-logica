// Encontre a média dos elementos em uma lista de números.

const listaElementos = [29, 10, 30, 9]

function media(lista) {

    let calc = 0

    for(let i = 0; i < lista.length; i++) {
        calc += lista[i]
    }

    return calc / lista.length

}

console.log(media(listaElementos))