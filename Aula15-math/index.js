let num1 = 9.49999;
// num1 = Number(num1.toFixed(2));
// mostra duas casas decimais depois da virgula
let num2 = Math.floor(num1);
console.log(num2);
// Math.floor arredonda o valor para baixo
num2 = Math.ceil(num1);
console.log(num2);
// Math.ceil arredonda o valor para cima
num2 = Math.round(num1);
console.log(num2);
// Math.round arrendonda o valor automaticamente( caso o número seja 9.50 ele irá arredondar para cima)
console.log(Math.max(-10,1,2,3,4,5,50));
// Math.max verifica o maior valor
console.log(Math.min(-10,1,2,3,4,5,50));
// Math.min verifica o menor valor
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);
// Math.random irá gerar um número aleatorio, nesse caso estamos entre 10 e 5
// Math.round irá arredondar o valor aleatorio que o Math.random está gerando
console.log(Math.PI);
// Gerar o valor de PI
console.log(Math.pow(2, 10));
console.log(2 ** 10);
// Math.pow faz a elevação dos número, porém com os ** podemos gerar o mesmo valor
let num3 = 9;
console.log(num3 ** (1/2));
console.log(num3 ** 0.5) ;
// os dois metodos geram a raiz quadrada
console.log(100/0);
// Infinity ele irá retornar um valor true
console.log(num3 > 0 ?`aprovado`:`reprovado`);
// condição ternario