// Crie uma operação que calcule descontos de compras de acordo com cada metodo de pagamento, pix, boleto, cartao credito, etc...

class Payment {
  constructor(user, valueAmount) {
    this.user = user;
    this.valueAmount = valueAmount;
  }

  //   Sem desconto - até 2 parcelas sem juros
  // 3 - 4 parcelas, acrescimo de 5% de juros, por parcela
  // 5 - 7 parcelas, acrescimo de 8% juros, por parcela
  // 8 - 12 parcelas, acrescimo de 12% juros, por parcela
  credito(parcelas) {
    if(parcelas === 1 || parcelas === 2) {
        console.log(`Valor total R$${this.valueAmount} sem descontos.`)
        return
    }

    if(parcelas === 3 || parcelas === 4) {
        const juros = 5/100*this.valueAmount
        const finalValue = Number(this.valueAmount + juros)
        const divisionParcelas = finalValue / parcelas
        console.log(`Valor gasto, com acrescimo de 5% de juros por parcela ${finalValue.toFixed(2)} foi dividido em ${parcelas} parcelas de R$${divisionParcelas.toFixed(2)}`)
        return
    }

    if(parcelas === 5 || parcelas === 6 || parcelas === 7) {
        const juros = 8/100*this.valueAmount
        const finalValue = Number(this.valueAmount + juros)
        const divisionParcelas = finalValue / parcelas
        console.log(`Valor gasto, com acrescimo de 8% de juros por parcela ${finalValue.toFixed(2)} foi dividido em ${parcelas} parcelas de R$${divisionParcelas.toFixed(2)}`)
        return
    }

    if(parcelas >=8 && parcelas <= 12) {
        const juros = 12/100*this.valueAmount
        const finalValue = Number(this.valueAmount + juros)
        const divisionParcelas = finalValue / parcelas
        console.log(`Valor gasto, com acrescimo de 12% de juros por parcela ${finalValue.toFixed(2)} foi dividido em ${parcelas} parcelas de R$${divisionParcelas.toFixed(2)}`)
        return
    }

  }

  //   Desconto 35%
  pix() {
    const discount = 35/100*this.valueAmount
    const finalValue = Number(this.valueAmount - discount)
    console.log(`Valor total R$${this.valueAmount.toFixed(2)} com desconto de 35% (R$${discount.toFixed(2)}) o valor final pago foi R$${finalValue.toFixed(2)}`)
  }

  //   Desconto 25%
  boleto() {
    const discount = 25/100*this.valueAmount
    const finalValue = Number(this.valueAmount - discount)
    console.log(`Valor total R$${this.valueAmount.toFixed(2)} com desconto de 25% (R$${discount.toFixed(2)}) o valor final pago foi R$${finalValue.toFixed(2)}`)
  }

  //   Desconto 15%
  debito() {
    const discount = 15/100*this.valueAmount
    const finalValue = Number(this.valueAmount - discount)
    console.log(`Valor total R$${this.valueAmount.toFixed(2)} com desconto de 15% (R$${discount.toFixed(2)}) o valor final pago foi R$${finalValue.toFixed(2)}`)
  }
}

const clientLucasFernandes = new Payment("Lucas Fernandes", 2095.22)
clientLucasFernandes.pix()

const clientJoaoLeandro = new Payment("Joao Leandro", 899.50)
clientJoaoLeandro.boleto()

const clientLuanaFelix = new Payment("Luana Felix", 22000.00)
clientLuanaFelix.debito()

const clientAnaBeatriz = new Payment("Ana Beatriz", 5000)
clientAnaBeatriz.credito(4)

const clientCarlosMiguel = new Payment("Carlos Miguel", 5000)
clientCarlosMiguel.credito(5)

const clientLeticiaMaria = new Payment("Leticia Maria", 5000)
clientLeticiaMaria.credito(10)

const clientFernanda = new Payment("Fernanda", 5000)
clientFernanda.credito(7)