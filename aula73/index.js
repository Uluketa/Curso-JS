const produto = {nome: 'Caneca', preco: 1.8 }

const outraCoisa = {...produto};
const outroComAssign = Object.assign({}, produto);
const outroMaisManual = {nome: produto.nome, preco: produto.preco}

// Object.keys -> Mostra as chaves do objeto
// Object.values -> Mostra os valores das chaves dos objetos (contrario ao Object.keys)
// Object.entries -> Retorna um array com a chave e valor com cada campo de um objeto
// Object.freeze -> Não permite que o obj seja alterado
// Object.defineProperty -> (exemplo abaixo)
// Object.getOwnPropertyDescriptors -> Retorna informação das propriedades do Object

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptors(produto, 'nome'));