const alunos = ['Lucas', 'Maria', 'Bea', 1, true];
const pessoas = ['Lucas', 'Gabriela', 'Pagaime']

console.log(pessoas);

// O array é inexado pela quantidade de elementos
console.log(pessoas[1]);

// Mudando valores da array
pessoas[0] = 'Pirres';
console.log(pessoas);

// Caso não exista o valor mencionado, será criado um novo
pessoas[3] = 'Lucas';
console.log(pessoas);

// Tamanho do array
console.log(pessoas.length);

// Adicionar elemento no array pelo fim
pessoas.push('Malu');
console.log(pessoas);

// Adicionar no começo
pessoas.unshift('Bea');
console.log(pessoas);

// Remover do fim -- Cria-se a variavel para mostrar quem foi removido
const removido = alunos.pop();
console.log(removido);
console.log(alunos);

// Remover do começo
alunos.shift();
console.log(alunos);

// Remover elementos no meio do array
delete alunos[1];
console.log(alunos);

// Pegar valores de um elemento ao outro -- No caso esta pegando os valores do 0 ao 3 (informa-se 4, porque é o limite)
console.log(pessoas.slice(0, 4));

// Mesma coisa usando negativos
console.log(pessoas.slice(0, -2));

// O array é considerado um object
console.log(typeof alunos);

// Verifica se é uma array retornando true ou false
console.log(alunos instanceof Array);