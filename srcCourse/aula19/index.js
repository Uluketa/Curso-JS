// Objetos

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Arruda',
    idade: 17
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

// Exemplo 1
function criaPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Karen', 'Cristina', 16);
const pessoa2 = criaPessoa('Débora', 'Souza', 40);
const pessoa3 = criaPessoa('José', 'José', 52);

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);

// Exemplo 2
const empresa = {
    nome: 'Marina',
    sobrenome: 'Ruy',
    idade: 23,

    fala () {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} agora.`);
    },

    incrementaIdade () {
        this.idade++;
    }
};

empresa.fala();
empresa.incrementaIdade();
empresa.fala();
empresa.incrementaIdade();
empresa.fala();