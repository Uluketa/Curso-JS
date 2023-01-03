const pessoa = {
    nome: 'Lucas',
    idade: 17
};

console.log(pessoa.nome);
console.log(pessoa['nome']);

const chave = 'nome';
console.log(pessoa[chave]);

const pessoa1 = new Object();
pessoa1.nome = 'Fábio';
pessoa1.idade = 38;
pessoa1.falarNome = function () { 
    return `${this.nome} está falando seu nome.`; 
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1){
    console.log(chave);
}


