const alunos =  [`Luis`, `Diego`,`Carvalho`];
// Array são um conjunto de dados separados por elemento, cada elemento é indetificado por indices, nesse caso `Luiz` está no indice 0, o `Diego` no 1 e o `Carvalho` no 2.
console.log(alunos[0]);
// aqui estamos exibindo apenas o indice 0, que é o primeiro, para exibir o indice que queremos devemos colocar digita-lo nos []]
alunos[0] = `Figueiredo`;
// forma para codificar o indice que queremos
console.log(alunos.length);
// forma para sabermos o tamanho do nosso array
alunos[alunos.length] = `Fabio`;
// uma forma para adicionarmos um dado no final do array
alunos.push(`Luiza`);
// .push é moutra forma para adicionarmos um dado no final do array
alunos.unshift(`Guilherme`);
// .unshift para adicionarmos dados no inicio do array
let removido = alunos.pop();
// .pop para removermos um dado do final do array, forma para salvarmos o dado que foi removido
let removido1 = alunos.shift();
// forma para removermos o primeiro elemento do array
delete alunos[1];
// forma para deletarmos um elemento especifico sem modificar as posições do indices
console.log(removido);
console.log(removido1);
console.log(alunos);
console.log(alunos.slice(0, 2));
// .slice irá mostrar os indices de 0 até 1, .slice(0, -1) irá mostrar todos menos o último
console.log(typeof alunos);
// mostrar o tipo de dado
console.log(alunos instanceof Array);
// mostra se realmente é um array 