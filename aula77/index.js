function ValidadorCPF(cpf) {
    this.cpfInserido = cpf.replace(/\D+/g, '');
    this.cpfSemDigito = Array.from(cpf.replace(/\D+/g, '')).splice(0, 9);
}

ValidadorCPF.prototype.primeiroDigito = function () {
    let multiplicador = 10;

    const somaPrimeroDigito = this.cpfSemDigito.reduce(function (ac, val) {
        ac += val * multiplicador;
        multiplicador--;
        return ac;
    }, 0);

    const digito1 = 11 - (somaPrimeroDigito % 11);

    return digito1 > 9 ? 0 : digito1;
}

ValidadorCPF.prototype.segundoDigito = function () {
    let multiplicador = 11;

    const cpfComPrimeroDigito = [...this.cpfSemDigito, String(cpf.primeiroDigito())];

    const somaPrimeroDigito = cpfComPrimeroDigito.reduce(function (ac, val) {
        ac += val * multiplicador;
        multiplicador--;
        return ac;
    }, 0);

    const digito2 = 11 - (somaPrimeroDigito % 11);

    return digito2 > 9 ? 0 : digito2;
}

ValidadorCPF.prototype.validador = function (){
    const cpfComp = [...this.cpfSemDigito, ...String(cpf.primeiroDigito()), ...String(cpf.segundoDigito())].toString();

    let cpfComposto = '';
    for (let i of cpfComp){ cpfComposto += i.replace(',', '') }

    const numerosRepetidos = this.cpfInserido[0].repeat(this.cpfInserido.length);

    if (numerosRepetidos === this.cpfInserido) return 'CPF incorreto!';
    if (cpfComposto !== this.cpfInserido) return 'CPF incorreto!';

    return 'CPF correto!';
}

const cpf = new ValidadorCPF('397.514.288-07');
console.log(cpf.validador());