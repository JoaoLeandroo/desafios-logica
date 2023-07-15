//Crie uma function que receba uma string e verifique se alguma letra repete nessa string.

let x = 'abcc'
let saveString = []
let validate = true
function toCheckString(valueString) {
    for(let i = 0; i < valueString.length; i++){
        saveString.map((item) => {
            if(item === valueString[i]){
                console.log("A letra ( " + valueString[i] + " ) Repeta na String.")
                validate = false
                return
            }
        })
        saveString.push(valueString[i])
    }

    if(validate === true) {
        console.log('Não existe letras repetidas nessa string.')
    }
}

toCheckString(x.toUpperCase())