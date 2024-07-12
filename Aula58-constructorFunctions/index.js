// Funcão construtora -> objetos
// na contructor function sempre iniciamos com letra mauiscula. Pessoa (new)
// não precisamos colocar virgulas entre as variaveis e os metodos
// não precisamos colocar o return o Javascript já retorna automaticamente

// constructor function
function Pessoa(nome, sobrenome, altura, peso) {
    const ID = 12345;
    const metodoInterno = function() {
        console.log(`Hi`);
    };
    // atributos ou métodos privados
    // não podem ser acessado fora do escopo da function

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.altura = altura;
    this.peso = peso;

    this.nomeCompleto = function () {
        return `${this.nome} ${this.sobrenome}`;
    };

    this.imc = function () {
        const imc = this.peso / (this.altura ** 2);
        return imc.toFixed(2);
    }

    this.falaImc = function() {
        return `${this.nomeCompleto()} o seu imc atualmete é:  ${this.imc()}`;
    }
}

const p1 = new Pessoa(`Luiz`, `Otávio`, 1.80, 80);
console.log(p1.falaImc());