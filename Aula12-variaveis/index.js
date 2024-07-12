let varA = `A`;
let varB = `B`;
let varC = `C`;

let temp = varA;
varA = varB;
varB = varC;
varC = temp;

temp = varC; //a
varC = varB;
varB = varA;
varA = temp;