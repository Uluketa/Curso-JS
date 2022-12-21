// promisses
function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

function baixaPagina(situacao) {
    if (situacao) {
        return Promise.resolve('Página resolvida');
    }

    return esperaAi('Resolvendo a página', 2000);
}

baixaPagina(true)
    .then(dadosPagina => console.log(dadosPagina))
    .catch(erro => console.log(erro));