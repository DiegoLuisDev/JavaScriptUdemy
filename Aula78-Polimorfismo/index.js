// Polimorfismo é um conceito fundamental na programação orientada a objetos que permite que uma função, método ou objeto tenha comportamentos diferentes dependendo do contexto em que é usado. Em JavaScript, que é uma linguagem de programação orientada a objetos baseada em protótipos, o polimorfismo pode ser implementado de várias maneiras, como usando herança e sobrescrita de métodos.

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor){
        console.log(`Saldo Insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c:${this.agencia}/${this.conta} | `+
    `Saldo: R$${this.saldo.toFixed(2)}`);
};

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

// polimorfismo
CC.prototype.sacar = function(valor) {
    if((this.saldo + this.limite) < valor){
        console.log(`Saldo Insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function CP(conta, agencia, saldo) {
    Conta.call(this, conta, agencia, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc = new CC(1, 2, 0, 100);
cc.depositar(0);
cc.sacar(101);


console.log(`#####1`);

const cp = new CP(1, 2, 0, 100);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);

console.log(`#####2`);

// Exemplo 2: Polimorfismo com Funções e Objetos
// javascript
// Copiar código
function mostrarSomDoAnimal(animal) {
  animal.fazerSom();
}

let animal = {
  fazerSom: function() {
    console.log('O animal faz um som');
  }
};

let cachorro = {
  fazerSom: function() {
    console.log('O cachorro late');
  }
};

let gato = {
  fazerSom: function() {
    console.log('O gato mia');
  }
};

mostrarSomDoAnimal(animal); // O animal faz um som
mostrarSomDoAnimal(cachorro); // O cachorro late
mostrarSomDoAnimal(gato); // O gato mia