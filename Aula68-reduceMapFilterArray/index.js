// Retorne a soma do dobro de todos os pares
// filtrar os pares
// dobrar os valores
// reduzir (somar tudo)


const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 10, 13, 24];
const numerosPares = numeros.filter(function(obj) {
    return obj % 2 === 0; // 
}).map(function(obj) {
    return obj * 2;
}).reduce(function(ac, valor) {
    return ac + valor;
});


console.log(numerosPares);