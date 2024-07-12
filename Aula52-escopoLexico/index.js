// Escopo Lexico define o alcance (ou "escopo") em que uma variável está acessível e pode ser referenciada dentro do código. Em outras palavras, o escopo léxico determina onde uma variável pode ser usada com base na estrutura do código fonte, especialmente no posicionamento da definição da variável.

const nome = `Luiz`;

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = `Otávio`;
    falaNome();
}
usaFalaNome();

function outer() {
    var x = 30;

    function inner() {
        console.log(x);
    }

    inner();
}

outer(); // imprime 30

// Esses exemplos demonstram como o escopo léxico permite que funções em JavaScript acessem variáveis de escopos externos à medida que elas são definidas, e não onde são executadas.
let a = 1;

function first() {
    let b = 2;

    function second() {
        let c = 3;
        console.log(a, b, c); // Imprime 1, 2, 3
    }

    second();
}

first();