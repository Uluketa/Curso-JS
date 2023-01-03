// Object.defineProperty  ---  Object.defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, //configurável - se esse cod pode ser reescrito ou o Produto.esotque pode ser deletado
        get: function () {
            return estoque;
        },
        set: function (value) {
            if (typeof value !== 'number') {
                throw new TypeError('Mensagem');
            }
        }
    });
}

const produto1 = new Produto('Camiseta', 20, 4);
console.log(produto1);