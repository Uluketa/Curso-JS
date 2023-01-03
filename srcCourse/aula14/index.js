const string1 = "Hello e ola são saudades";

//Mostra qual elemento está em determinada posição da string com a abertura de chaves
console.log(string1[1]);

// Apresenta o valor da string na posição mencionada
console.log(string1.charAt(2));

// Concatenação
console.log(string1.concat(" em um lindo dia"));

// Demonstra em qual posição está a palavra ou trecho mencionado
console.log(string1.indexOf('o'));

// O mesmo que o de cima porém de traz para frente
console.log(string1.lastIndexOf('o'));

// Expressão regular - no caso retorna todas as letras minusculas de a até z em forma de uma array
console.log(string1.match(/[a-z]/g));

// O search procura o que você pede e retorna a posição no qual foi encontrado
console.log(string1.search(/[a-z]/));

// Outro exemplo com search
console.log(string1.search(/l/));

// Reclace serve para substitution de uma palavra ou elemento por outro(os)
console.log(string1.replace('ola', 'bolo de chocolate'));

// Outro exemplo com replace usando uma expressão regular
console.log(string1.replace(/l/g, '*'));

// Para ver o tamanho da string usa-se o length
console.log(string1.length);

// O slice pega um pedaço da string de acordo com as medidas dadas e é a mesma coisa que o substring
console.log(string1.slice(4, 10));

// Outros exemplos usando slice -- AMBOS DÃO O MESMO RESULTADO
console.log(string1.slice(8));
console.log(string1.slice(-3));

// Ultimos exemplos de slice
console.log(string1.slice(-5, -4));

// Para dividir uma string em um array, dividindo-a por um denominador em comum, é usado o split -- No caso esta sendo dividida pelos espaços ' '
console.log(string1.split(' '));

// Para colocar um limite no split
console.log(string1.split(' ', 2));

// toUpperCase coloca todos os elementos da string em letra maiuscula
console.log(string1.toUpperCase());

// toLowerCase coloca todos os elementos da string em letra minuscula 
console.log(string1.toLowerCase());
