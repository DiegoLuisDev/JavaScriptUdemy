// Uma função recursiva em JavaScript é uma função que se chama a si mesma para resolver um problema.

// Isso significa que a função contém uma chamada para ela mesma dentro de sua própria definição.

// function recursiva -> autoinvocada

function recursiva(max) {
    if(max >= 10) return;
        max++;
        console.log(max);
        recursiva(max);
}

recursiva(-0);

// Outro exemplo:
// calculando o fatorial de 5
function fatorial(n) {
    if (n === 0) {
      return 1;
    } 
      return n * fatorial(n - 1);
  }

console.log(fatorial(5)); // Saída: 120

function retornaFatorial(num) {
  if(num === 0) {
    return 1;
  }
    return num * retornaFatorial(num -1);
    // num começa com 5, nos parenteses é feito a subtração e multiplica e logo depois a inovação
}

console.log(retornaFatorial(5)); // Saída: 120