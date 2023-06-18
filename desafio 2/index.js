// Escreva um programa que calcule o valor total de uma compra, considerando o preço e a quantidade de cada produto. 
// Peça ao usuário para inserir os preços e as quantidades dos produtos e exiba o valor total da compra.

const products = {
    shirt: 22.50,
    shorts: 30.20,
    cap: 10.90,
    shoe: 109.90
}

let amountProducts = [products.cap, products.cap, products.cap, products.shoe]
let value = 0;
amountProducts.forEach((prod) => {
    value += prod
})

console.log("Valor final das compras $" + value.toFixed(2))
