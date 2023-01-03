function retornaFuncao(){
    const nome = 'Lucas';
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao();

console.log(funcao);
console.dir(funcao);
console.log(funcao());