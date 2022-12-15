const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Miguel',
    idade: 17,
    endereco: {
        rua: 'Rua Luiz',
        numero: 145
    }
}

const { nome, sobrenome, ...resto} = pessoa;
console.log(resto);
