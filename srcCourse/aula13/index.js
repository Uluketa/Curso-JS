let varA = 'a';
let varB = 'b';
let varC = 'c';

const varAtemp = varA;

varA = varB;
varB = varC;
varC = varAtemp;

// ou [varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);