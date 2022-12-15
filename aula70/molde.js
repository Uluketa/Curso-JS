// Factory functions // Constructor functions // Class //


// FACTORY
function criaPessoa (nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Lucas', 'Miguel');
console.log(p1.nomeCompleto);



// CONSTRUCTOR
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Lucas', 'Miguel');
Object.freeze(p2.nome)
console.log(p2);