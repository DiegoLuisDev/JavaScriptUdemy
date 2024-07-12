// constructor 
const pessoa1 = new Object();
pessoa1.nome = `Luiz`;
pessoa1.sobrenome = `Otávio`;
pessoa1.idade = 30;
pessoa1.falarNome = function() {
    return (`${this.nome} ${this.sobrenome}`)
};
pessoa1.getDataNascimento = function() {
    const data = new Date();
    const ano = data.getFullYear() - this.idade;
    return `Data Nascimento: ` + ano;
};

console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());

for(let chave in pessoa1) {
    console.log(chave);
}

console.log(`####0`);


// object literals
const pessoa2 = {
    nome: `Luiz`,
    sobrenome: `Otávio`
};

// Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() { //com get ele simulará que o método é uma propriedade
            return `${this.nome} ${this.sobrenome}`;
        }
    }
};
const nome1 = `Diego`;
const nome2 = `Luiz`;
const p1 = criaPessoa(nome1, nome2);
console.log(p1.nomeCompleto);

console.log(`####1`);

// Constructor functionc
function Pessoa(nome, sobrenome) {
    this.nome =  nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`;
    };

    Object.freeze(this); // não será possivél mudar o objeto

    // com constructor não precisamos colocar o return
};

const p2 = new Pessoa(nome1, nome2);
p2.nome = `Outra`;
console.log(p2.nomeCompleto());

 