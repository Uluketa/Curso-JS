const nomes = ['Lucas', 'João', 'Pedro'];
nomes[2] = 'Karen';
console.log(nomes);

delete nomes[2];
console.log(nomes);

const nomesComConstructor = new Array('Lucas', 'João', 'Pedro');

// Valor por referência
const nomes2 = ['Lucas', 'João', 'Pedro'];
const novo = nomes2;
novo.pop();

console.log(novo, nomes2);

// Resto do array - REST operator

// O código abaixo faz uma cópia do array nomes3 e coloca em novo2. Desse modo, as alterações feitas em novo2 não são refletidas em nomes3, assim como o inverso.
const nomes3 = ['Lucas', 'João', 'Pedro'];
const novo2 = [...nomes3];
novo2.pop();

console.log(novo2, nomes3);

console.log(nomes3.length);

// POP - tira o ultimo elemento de um array
// SHIFT - tira o primeiro elemento de um array

const idades = [12, 19, 28, 59];
const idadeExcluidaComeco = idades.shift();
const idadeExcluidaFim = idades.pop();
console.log(idadeExcluidaComeco, idades, idadeExcluidaFim);

// Para colocar + no array - usa-se push()
idades.push(13, 22);
console.log(idades);

// Para colocar + no array; inserindo no inicio (indice [0])
idades.unshift(10);
console.log(idades);

// Fatiar nosso array
const notas = ['B', 'MB', 'R', 'MB', 'I', 'R', 'I'];
const fatia1 = notas.slice(1, 3);
const fatia2 = notas.slice(1, -1);
const fatia3 = notas.slice(0, 2);
console.log(fatia1, fatia2, fatia3);

// Gerar Array por uma string - Separando a string pelos espaços
const nomeCompleto = 'Lucas Miguel de Arruda';
const ArrayNome = nomeCompleto.split(' ');
console.log(ArrayNome);

// Para fazer o contrario, usa-se JOIN()
const ArrayNome2 = [ 'Lucas', 'Miguel', 'de', 'Arruda' ];
const nomeCompleto2 = ArrayNome2.join(' ');
console.log(nomeCompleto2);