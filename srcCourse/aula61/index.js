function* geradora1 (){
    yield 'Lucas';
    yield 'Miguel';
    yield 'Arruda';
    return true;
    yield 'Martins';
}
// Após o return, os yields param de funcionar

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);