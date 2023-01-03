const numero = Number(prompt('Digite seu número:'));

const bumerotitulo = document.getElementById('numero');
const divo = document.getElementById('texto');

const raiz = numero ** 0.5;
const inteiro = Number.isInteger(numero);
const NAN = Number.isNaN(numero);
const baixo = Math.floor(numero);
const cima = Math.ceil(numero);
const duascasas = numero.toFixed(2);

bumerotitulo.innerHTML = numero;

divo.innerHTML = `<p>Raiz Quadrada: ${raiz}</p>
<p>${numero} é inteiro: ${inteiro}</p>
<p>É NaN: ${NAN}</p>
<p>Arredondado para baixo: ${baixo}</p>
<p>Arredondado para cima: ${cima}</p>
<p>Com duas casas decimais: ${duascasas}</p>`;