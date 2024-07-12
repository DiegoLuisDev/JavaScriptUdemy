// Em JavaScript, há três tipos principais de aspas que podem ser usadas para definir strings: aspas simples ('), aspas duplas ("), e crases (`). 
// Cada tipo tem suas próprias características e usos. Aqui está uma explicação detalhada das diferenças e quando usar cada um:

// Resumo
// Aspas Simples ('): Útil para strings que contêm aspas duplas.
// Aspas Duplas ("): Útil para strings que contêm aspas simples.
// Crases (`): Usadas para template literals, que permitem interpolação de expressões e strings multilinhas.

console.log(`Luiz Otávio`); //String
// console.log(`Luiz "Otávio" `);
// quando quisermos utilizar aspas no texto temos que inverter, no caso se estiver com as duplas feche com as simples, logo "Otávio" com aspas duplas irá aparecer.]

console.log(`Luiz Otávio`);
// console.log(" 'Otávio' "); 
// e quando tiver com aspas duplas feche o termo no caso aqui ´'Otávio' com aspas simples
// Exemplificando: temos que invertas as aspas quando queremos mostra-las

console.log(`Luiz Otávio`);
// já aqui podemos adicionar tanto aspas simples como aspas duplas: 
// console.log(` 'Luiz' "Otávio" `);

// Todos aqui são string

console.log(35, 15.85 `Luiz Otávio de novo`);

console.log(`Meu nome é Marco. Estou aprendendo JavaScript ás`, 10, `da manhã.`);
console.log(`Este ` + `É`, `Um`, 1000, `Número`)