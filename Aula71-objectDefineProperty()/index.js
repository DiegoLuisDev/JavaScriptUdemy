// defineProperty é um método que permite definir ou modificar uma propriedade diretamente em um objeto, especificando características como configurabilidade, enumerabilidade, e a capacidade de ser modificada (writable) ou acessada (get e set). Esse método pertence ao objeto global Object.

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, `estoque`, {
        enumerable: true, // mostra a chave
        value: estoque, // valor, também poderia ser uma função
        writable: false, // permitido alterar o valor
        configurable: false // permitido alterar as configurações
    });

    // defineProperties
    Object.defineProperties(this, {
        nome: {
        enumerable: true,
        value: nome,
        writable: false, 
        configurable: false 
        },
        preco: {
            enumerable: true,
        value: preco,
        writable: false, 
        configurable: false 
        }

    });
};

const p1 = new Produto(`Camisa`, 20, 3);
p1.estoque = 4; // não será possivel alterar, pois writable está false
// console.log(Object.keys(p1)); // retorna as propriedades
console.log(p1);
for(let chave in p1) {
    console.log(chave);
}

// Define a propriedade 'idade' com um getter e um setter
let idadeValor = 30;
const obj = {};
Object.defineProperty(obj, 'idade', {
    enumerable: true,
    configurable: true,
    
    get: function() {
        return idadeValor;
    },
    set: function(novoValor) {
        idadeValor = novoValor;
    }
});

console.log(obj.idade); // Saída: 30

// Modifica a idade usando o setter
obj.idade = 35;
console.log(obj.idade); // Saída: 35