// nome.splace(indice, delete, elem1, elem2, elem3);
const nome = [ 'Lucas', 'Miguel', 'de', 'Arruda' ];

const removidos = nome.splice(-2, Number.MAX_VALUE, 'Arruda');

console.log(nome, removidos);
