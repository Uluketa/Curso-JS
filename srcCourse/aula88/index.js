// Aula 88 - Async & Await
function rand(min = 0, max = 3) {
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

// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand());
//     })
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(err => {
//         console.log(err);
//     })

async function executa(){
    try{
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);

        const fase2 = await esperaAi(11, rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);

    } catch (error) {
        console.log(`Ocorreu o erro: ${error.message}`);
    }
}

executa();

// pending 