const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     { nome: 'Lucas' },
//     { nome: 'Karen' },
//     { nome: 'Sara' },
//     { nome: 'Ana' },
//     { nome: 'José' },
//     { nome: 'Débora' },
//     { nome: 'Matheus' },
// ];

// const json = JSON.stringify(pessoas, '', 2);
// escrever(caminhoArquivo, json);

async function leArquivo(caminho){
    const dados = await ler(caminho)
    renderizaDados(dados);
}

function renderizaDados(dados){
    const dadosConvertidos = JSON.parse(dados);
    dadosConvertidos.forEach(element => {
        console.log(element.nome);
    });
}

leArquivo(caminhoArquivo);