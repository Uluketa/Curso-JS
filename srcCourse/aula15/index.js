// IEEE 754-2008

let num1 = 19.929;
let num2 = 2.5;

// Altera o valor da variavel para String
console.log(num1.toString() + num2);
// num1 = num1.toString();

// Combinação binária do number
console.log(num1.toString(2));

// Arredonda o number -- O numero dentro dos parenteses determina a quantidade de casas decimais
console.log(num1.toFixed(2));

// Checa se a variavel é um Inteiro
console.log(Number.isInteger(num1));

// NaN significa que deu um erro na conta
let temp = num1 * 'Ola';
console.log(temp);

// Fala se a condição esta em NaN
console.log(Number.isNaN(temp));


