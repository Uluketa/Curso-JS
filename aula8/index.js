const nome = 'Lucas Miguel';
const sobrenome = 'Arruda';
const idade = 17;
const peso = 69;
const altura = 1.82;
let imc; //peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);

anoNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento);

// Outra maneira de imprimir valores de forma mais moderna e legivel
// console.log(`${nome} tem ${altura} de altura`);