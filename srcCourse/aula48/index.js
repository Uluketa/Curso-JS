// Arguments

function hello() {
    console.log(arguments);
    console.log(arguments[1]);
}
hello('Lucas', 17, 'SP', 'Solteiro');


function func(a, b = 7, c = 0) {
    const math = a * b + c;
    console.log(math);
}
func(10, undefined, 3);

function contador(operador, numero_inicial, ...numeros) {

    for (let numero of numeros) {
        if (operador === '+') numero_inicial += numero;
        if (operador === '-') numero_inicial -= numero;
        if (operador === '/') numero_inicial /= numero;
        if (operador === '*') numero_inicial *= numero;
    }

    console.log(`O resultado final é ${numero_inicial}`);
}
contador('*', 1, 20, 30, 40, 50, 60);