let varA = `A`;
let varB = `B`;
let varC = `C`;

let temp = varA;
varA = varB;
varB = varC;
varC = temp;

[varA, varB, varC] = [varB, varC, varA]

console.log([varB, varC, varA]);
