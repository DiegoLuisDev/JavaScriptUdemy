/* 
    Javascript é baseado em protótipos para passar
propriedades e métodos de um objeto para outro.

Definição de prótotipo: É o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um prótotipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

let objA = {aa: `aaa`};
Object.getPrototypeOf(objA); //método para acessar os prototype do objeto. Output: [Object: null prototype] {}

// constructor function 
function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome,

    this.nomeCompleto = () => `Original` + this.nome + ` ` + this.sobrenome;
// não precisa colocar return, pois ele já retorna
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ` ` + this.sobrenome;
};
 
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ` ` + this.sobrenome;
};

// instância - constructor function
const pessoa1 = new Pessoa(`Maria`,`Ortina`);
const pessoa2 = new Pessoa(`Luiz`,`Augusto`);

console.log(pessoa1);
console.log(pessoa2);

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  let person1 = new Person("Alice");
  person1.greet(); // Output: Hello, my name is Alice
//   Neste exemplo, Person.prototype.greet é um método que é compartilhado por todas as instâncias da função construtora Person.

let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: false
  };
  
//   rabbit.__proto__ = animal;
  animal.__proto__ = rabbit;
  console.log(rabbit.eats); 
  console.log(animal.jumps); 