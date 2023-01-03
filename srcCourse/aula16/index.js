// Objeto Math

let num1 = 9.7127;
let num2 = Math.floor(num1);
let num3 = Math.ceil(num1);

// Floor arredonda para baixo e ceil para cima
console.log(num2, num3);

// Arredonda de forma padrão
let num4 = Math.round(num1);
console.log(num4);

// Encontra o maior número dos quais
console.log(Math.max(3,2,5,6));

// O mesmo de cima, mas ao contrario
console.log(Math.min(3,2,5,6));

// Aleatório
const aleatorio = Math.random();
console.log(aleatorio);

// Potenciação
console.log(Math.pow(2, 10));
console.log(2 ** 10);

// Raiz quadrada
console.log(9 ** (1/2));
console.log(16 ** 0.5);

// Dividir um numero por zero -- Resultado = Infinity
console.log(100 / 0);

