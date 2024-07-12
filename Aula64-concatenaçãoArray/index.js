// concatenação com array
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, [7, 8, 9], `Luiz`);
// poderiamos fazer assim:
// ...rest -> ...spread
const a3 = [...a1, ...a2, `Luiz`, ...[7, 8, 9]];

console.log(a3);

// function que faz exatamente a mesma coisa:
// const a3 = recebe(a1, a2);
// function recebe(a, b) {
//     const a3 = a1.concat(a2);
//     return a3;
// }