function saudacao(){
    console.log('Bom dia!');
}

function saudacao1(nome){
    console.log(`Bom dia ${nome}`);
    return 123456;
}

const variavel = saudacao1('Karen');
console.log(variavel);

function soma(num1, num2){
    const resultado = num1 + num2;
    return resultado;
}

function soma2(num1 = 9, num2 = 8){
    const resultado = num1 + num2;
    return resultado;
}

console.log(soma(93621575,89745876));
console.log(soma2());

const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(81));

// Maneira mais nova de funcões
// const radi = function (n) { n ** 2 }
// const radi = (n) => { n ** 2 }
const radi = n => { n ** 2 }

// Sempre que houver o return, nada mais é rodado após a sua presença
