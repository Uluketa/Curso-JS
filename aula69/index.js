// forEach

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

numeros.forEach(num => console.log(num));

// Simulação de Reduce com forEach
let total = 0;
numeros.forEach(num => total += num);
console.log(total);