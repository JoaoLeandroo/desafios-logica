// Crie uma função que remova os itens repetidos de um array

const times = ['palmeiras', 'santos', 'flamengo', 'flamengo', 'cruzeiro', 'nautico', 'botafogo', 'nautico', 'palmeiras']
const timesNoRepeat = []
let nameTime = ''

function removeRepetidos(rep) {
    for(let i=0; i < rep.length; i++) {
        nameTime = rep[i]
        for(let j=0; j < timesNoRepeat.length; j++) {
            if(nameTime === timesNoRepeat[j]) nameTime = ''
        }
        if(nameTime != '') timesNoRepeat.push(nameTime)
    }
}

removeRepetidos(times)
console.log(timesNoRepeat)