function numbers(num1, num2) {
 if (num1 > num2) console.log(`O número ${num1} é maior que ${num2}`);

 else if (num1 < num2) console.log(`O número ${num2} é maior que ${num1}`);

 else if (num1 === num2) console.log(`Os números inseridos são iguais`);

 else console.log(`Ops. Algo está errado...`);
}

numbers(40, 'a');