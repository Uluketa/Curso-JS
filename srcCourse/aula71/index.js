// Object.defineProperty  ---  Object.defineProperties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: this.estoque, //mostra o valor
        writable: false, //pode alterar o valor
        configurable: false //configurável - se esse cod pode ser reescrito ou o Produto.esotque pode ser deletado
    })
}