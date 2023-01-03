function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    return this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
    return this.preco = this.preco + (this.preco * (percentual / 100));
}

const produto1 = new Produto('Camisa', 200);

const produto2 = {
    nome: 'Caneca',
    preco: 32
}
Object.setPrototypeOf(produto2, Produto.prototype);

const produto3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        value: 'Borracha',
        enumerable: true
    },

    preco: {
        writable: true,
        configurable: true,
        value: 4.5,
        enumerable: true
    }
});

console.log(`Produto 1 (desconto): ${produto1.desconto(10)}`);
console.log(`Produto 2 (desconto): ${produto2.desconto(10)}`);
console.log(`Produto 3 (desconto): ${produto3.desconto(10)}`);

console.log('-----------------');

console.log(`Produto 1 (aumento): ${produto1.aumento(10)}`);
console.log(`Produto 2 (aumento): ${produto2.aumento(10)}`);
console.log(`Produto 3 (aumento): ${produto3.aumento(10)}`);