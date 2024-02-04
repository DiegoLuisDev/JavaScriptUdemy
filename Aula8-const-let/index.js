const nome = `Luiz Otávio`;
const sobreNome = `Miranda`;
const idade = 30;
const peso = 84;
const alturaEmMt = 1.80;
const IMC = peso / (alturaEmMt * alturaEmMt );
let dataNascimento = 2023 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmMt} de altura, e seu IMC é de ${IMC}, seu ano de nascimento é ${dataNascimento}`);

// Usamos template string