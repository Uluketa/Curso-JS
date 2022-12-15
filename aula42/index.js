function ePaisagem(largura, altura) {
    return largura >= altura;
}

if (ePaisagem(100, 50) === true) console.log('Paisagem');
else console.log('Retrato');


const Paisagem = (largura, altura) => { largura >= altura; }

if (Paisagem(100, 50) === true) console.log('Paisagem');
else console.log('Retrato');
