// Metódo Splice em JavaScript é utilizado em arrays para adicionar, remover ou substituir elementos
// Ele modifica o array original e retorna um array contendo os elementos removidos, se houver.
// (ìndice, delete, elem1, elem2, elem3);
//              -5        -4       -3          -2
//               0         1        2           3
const nomes = [`Maria`, `João`, `Eduardo`, `Gabriel`, `Júlia`];
const sobrenome = [...nomes]; // copiando os dados de nomes
nomes.splice(0, 0, `Luiz`, `Otávio`); // adiciona no começo
nomes.splice(nomes.length, 0, `Carlos`, `Miguel`); // adiciona no final
const removido = nomes.splice(0, Number.MAX_VALUE);
console.log(nomes, removido);

console.log(`#####0`);

// temos que nos atentarmos nos indices negativos, pois os indices mudam completamente.
// splice(-5, Number.MAX_VALUE); apagará todos 
// const removidos = nomes.splice(3, 2);
//o primeiro será o indice, o segundo será a quantidade que ele vai remover apartir do indice
console.log(nomes, removido);

console.log(`#####1`);
console.log(sobrenome);
let array = [1, 2, 3, 4, 5];
array.splice(2, 1, 'a', 'b');  
// Adiciona 'a' e 'b' a partir do índice 2, e deleta o 3
console.log(array); // Saída: [1, 2, 'a', 'b', 3, 4, 5]