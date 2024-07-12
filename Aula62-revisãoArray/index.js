// Array
// const nomes = [`Jota`, `Maria`, `Claúdio`];
const nomes = new Array(`Jota`, `Maria`, `Claúdio`, `Marcio`);
// const novo = nomes; // toda alteração em novo será refletido a nomes
const novo = [...nomes]; // forma correta de copiar os dados do array
const removido = nomes.pop(); // removendo e salvando o dado removido na variavel, mudando a ordem
delete nomes[0] // com delete ele apagará o dado, sem mudar a ordem

const addPrimeiro = nomes.unshift(`Ricardo`); // adicionou ricarda no indice 0
const removePrimeiro = nomes.shift(); // removeu o ricardo do indice 0 que era o primeiro


nomes.push(`Mario`);
nomes.push(`Bross`);

console.log(nomes, nomes.length);
console.log(novo, novo.length);

console.log(`#####1`);

const pessoas = new Array(`Jota`, `Maria`, `Claúdio`, `Marcio`);
const de1a3 = pessoas.slice(1, -1)
console.log(de1a3);

console.log(`#####2`);

const nome = `Luis Otavio Fernando`;

const verNome = nome.split(` `);
console.log(verNome)

console.log(`#####3`);

const nomeArray = [ 'Luis', 'Otavio', 'Fernando' ];
const nome2Array = nomeArray.join(`, `);
console.log(nome2Array)
