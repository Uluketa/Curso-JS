// Prototypes

function Pessoa (nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() { 
    return `${this.nome} ${this.sobrenome}`;
}

const pessoa1 = new Pessoa('Lucas', 'Arruda', 17);
console.log(pessoa1.nomeCompleto());