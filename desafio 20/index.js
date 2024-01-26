// Voce tem uma lista com uma serie de números, dentro dessa lista algumas sequencias de número 0 e 1, se dentro da lista tiver algum numero diferente de 0 e 1, converta esse número para 0 ou 1, mantendo uma ordem

const listaNumeros = [0, 1, 0, 1, 7, 8, 0, 1]
const novaLista = []
let firistNumber = 0

listaNumeros.forEach((num) => {
    if(num === 0 || num === 1) {
        novaLista.push(num)
        firistNumber = num
        return
    }

    if(firistNumber === 1) {
        novaLista.push(0)
        firistNumber = 0
        return
    }

    novaLista.push(1)
    firistNumber = 1
})

console.log(novaLista)