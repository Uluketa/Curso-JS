const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares);

const dobroNumerosPares = numeros.filter(num => num % 2 === 0).map(num => num * 2);
console.log(dobroNumerosPares);

const somaDoDobroDosNumerosPares = numeros
.filter(num => num % 2 === 0)
.map(num => num * 2)
.reduce((ac, num) => ac += num);
console.log(somaDoDobroDosNumerosPares);