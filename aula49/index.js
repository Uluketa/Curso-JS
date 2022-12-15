// Return - Retorna um valor e termina a função

function soma(a, b) {
    return a + b;
}

console.log(soma(5, 2));

function soma2(a, b) {
    console.log(a + b);
}
soma2(4, 3);

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('Mundo');

console.log(resto);