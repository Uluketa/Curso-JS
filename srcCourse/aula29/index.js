for (var i = 1; i <= 6; i++) {
    console.log(`Linha ${i}`);
}

for (var i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(`O número ${i} é ${par}`);
}

// Usando Array

const frutas = ['Maçã', 'Pera', 'Uva']

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}