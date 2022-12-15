const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// Primeira maneira de concatenar arrays - concat
const a3 = a1.concat(a2, [7, 8, 9]);

// Segunda maneira de concatenar arrays - spread
const a4 = [...a1, ...a2, ...[7, 8, 9]]

console.log(a3)
console.log(a4);
