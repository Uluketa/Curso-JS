// filter -> sempre retorna um array, com a mesma quantidade de array ou menor
// Na função da filter - retornar true ou false

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let numerosMaiores = [];

const maiores = () => {
    for (let numero of numeros){
        if (numero >= 10) numerosMaiores.push(numero);
    }
}

maiores();
console.log(numerosMaiores);

// Maneira mais facil pra fazer oq fiz acima --- Usando FILTER

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     return valor > 10;
// })


// Esse cod comentado faz o mesmo o codigo abaixo
const numerosFiltrados = numeros.filter(valor => valor > 10);

