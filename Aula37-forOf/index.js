// tipos de for
// for classico - Com iteráveis (array ou strings)
// for in - retorna o índice ou chave (string, array ou objetos)
// for of - retorna o valor em si (iteráveis, arrays ou strings)

const nome = [`Diego`, `Luis`, `Miranda`];

// for classico
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log(`1##`);

// for in
for (let chave in nome) {
    console.log(nome[chave])
}

console.log(`2##`);

// for of
for (let valor of nome) {
    console.log(valor)
}

console.log(`3##`);

// forEach
nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});