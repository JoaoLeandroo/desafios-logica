// Desafio da Ordenação Personalizada: 
// Crie uma função que receba um array de objetos e os ordene com base em uma propriedade específica de cada objeto.

const arrayObjetos = [
    {name: "joao", sexo: "m", telefone: 8888888888},
    {name: 'ana', sexo: "f", telefone: 3232323222},
    {name: "edson", sexo: "m", telefone: 1111111111},
    {name: "marta", sexo: "f", telefone: 9222992222},
    {name: "thomaz", sexo: "m", telefone: 447477447},
    {name: "ana", sexo: "f", telefone: 9222992222},
]

function ordernarListaArray(arr) {
    let x = []
    arr.forEach((todo, index) => {
       x.push([todo.name, index])
    })
    x = x.sort()

    const newArray = []
    for(let i=0;i<x.length;i++) {
        let teste = x[i][1]
        newArray.push(arr[teste])
    }

    console.log(newArray)
    
}

ordernarListaArray(arrayObjetos)

