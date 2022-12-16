// Heranças

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (value) {
            if (typeof value !== 'number') return;
            estoque = value;
        }
    })
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Caderno', 10);
const camiseta = new Camiseta('Camiseta LV', 210, 'branco');
const caneca = new Caneca('Caneca Bob Esponja', 45, 'porcelana', 13);