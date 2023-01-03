const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {

    if (numero === 5) {
        console.log('5 - Pula para a próxima iteração do laço');
        continue;
    }

    if (numero === 7){
        console.log('7 - Saiu do FOR');
        break;
    }

    console.log(numero);
}