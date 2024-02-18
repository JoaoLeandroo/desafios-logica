// Identifique os números primos

const num = 13;

const primo = (n) => {
  let x = 0;
  let count = 0
  
  for (let i = 1; i <= 1000; i++) {
    x = n / i;
    if (Number.isInteger(x)) count++
  }

  if(count > 2 || n === 1) {
    console.log(`O número ${n} não é primo`)
    return
  }
  console.log(`O número ${n} é considerado é um número primo`)
};

primo(num);
