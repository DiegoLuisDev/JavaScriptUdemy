/*
Object.values // retorna o valor
Object.entries // retorna indice e valor
Object.getOwnPropertyDescriptor() // retorna a descrição da propriedade(configuração)
Object.assign(des, any)
...(spred)

Object.keys // retorna as chaves
Object.freeze // congela os valores, não podem ser mudados
Object.defineProperties // define varias propriedades
Object.defineProperty // define uma propriedade
*/

// object literals
const produto = {nome: `Calça`, preco: 1.9};
const produto2 = produto; // está no mesmo local da memoria, quando mudando o valor de produto, produto2 será mudado também
const produto3 = {...produto, 
material: `Porcelana`}; // está copiando e as mudanças não afetaram o produto.

produto2.nome = `Camisa`;
produto3.nome = `Shorts`;
produto3.marca = `Nike`; // adicionando propriedades ao produto3
console.log(produto);
console.log(produto2);
console.log(produto3);

// const caneca = Object.assign({}, produto3, {material: `gelxz`});
// console.log(produto3);

console.log(Object.keys(produto3)); // retorna as chaves
console.log(Object.getOwnPropertyDescriptor(produto3, `marca`)); // retorna a descrição da propriedade(configuração)

for(let [ valor , preco] of Object.entries(produto3)) {
    console.log( preco);
}
// Object.entries retorna o indice e valor





