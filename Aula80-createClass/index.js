// Classes em JavaScript são uma forma de definir objetos e criar instâncias desses objetos de maneira mais organizada e estruturada. Elas são uma sintaxe mais limpa e familiar para quem vem de linguagens orientadas a objetos como Java, C++ ou Python, mas, em essência, são açúcares sintáticos sobre a herança baseada em protótipos do JavaScript.

class Pessoa {
    constructor(nome,  idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // com class os métodos já ficam armazenados automaticamente no prototype do objeto
    falar() {
        console.log(`${this.nome} está falando`);
    }
}

// SubClass - Extends
class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
      super(nome, idade); // Chama o construtor da classe pai
      this.curso = curso;
    }
  
    estudar() {
      console.log(`${this.nome} está estudando ${this.curso}.`);
    }
  }
  
const estudante1 = new Estudante('Maria', 22, 'Engenharia');
estudante1.falar();  // Saída: Olá, meu nome é Maria e eu tenho 22 anos.
estudante1.estudar();       // Saída: Maria está estudando Engenharia.

console.log(`###0`);

// classes e constructor são indenticas, a mudanças como nos metodos (class já vem no prototype), parametros (na class é no constructor), metodos podem ser criado normalmente dentro do escopo da class
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
};

const p1 = new Pessoa(`Diego Luiz`, ``)
p1.falar();

console.log(`###1 `);

// métodos estáticos
// Métodos estáticos em JavaScript são definidos na própria classe e não em suas instâncias. Isso significa que eles são chamados diretamente na classe e não em um objeto criado a partir da classe. Métodos estáticos não têm acesso às propriedades da instância da classe (usando this), mas podem acessar outras propriedades e métodos estáticos da classe.

class Calculadora {
    static somar(a, b) {
      return a + b;
    }
  
    static subtrair(a, b) {
      return a - b;
    }
}

console.log(Calculadora.somar(5, 3)); // Saída: 8
console.log(Calculadora.subtrair(5, 3)); // Saída: 2

// const calc = new Calculadora();
// console.log(calc.somar(5, 3)); // Erro: calc.somar is not a function