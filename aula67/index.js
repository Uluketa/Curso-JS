// REDUCE - Reduzir arrays

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
}, 0);

let ac = [];

const numerosPares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

const dobroValores = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);

// console.log(dobroValores);

const pessoas = [
    { nome: 'Lucas', idade: 20},
    { nome: 'Karen', idade: 19}
]

const buscaIdades = pessoas.reduce((ac, val) => {
    if (ac.idade < val.idade) return ac;
    return val;
}, 0);

console.log(buscaIdades);
