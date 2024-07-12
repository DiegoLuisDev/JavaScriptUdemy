// Object literals = new Object -> Object.prototype

const objA = {
    chaveA: `A`
    // __proto__: Object.prototype - todo objeto já vem com esse prototype
};

const objB = {
    chaveB: `B`
     // __proto__: objA
};

const objC = new Object();
objC.chaveC = `C`;

Object.setPrototypeOf(objB, objA);
// setPrototypeOf configura o prototype de objB, que vai ser o objA
Object.setPrototypeOf(objC, objB);
// vai ser uma cadeia com o prototype de objC sendo o objB, objB vai ser o objA, e por fim objA vai ser Object.prototype
console.log(objC.chaveA);
// com objC conseguimos acessar qualquer chave anterior, por conta do propotype encadeado.

console.log(`####0`);

function Product(nome, preco) {
    this.nome = nome
    this.preco = preco
}  

Product.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Product.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

// instância -Constructor
const p1 = new Product(`Camisa`, 50);
// p1.desconto(50);
p1.aumento(50);
console.log(p1);

console.log(`####1`);

// instância - Object literals
const p2 = {
    nome: `Caneca`,
    preco: 15
};

Object.setPrototypeOf(p2, Product.prototype);
p2.aumento(10);
console.log(p2);

console.log(`####2`);

const p3 = Object.create(Product.prototype, {
    preco: {
        writable: true, // alterar o valor
        configurable: true, // alterar as defineções
        enumerable: true, // mostrar o valor
        value: 99 // valor
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 40
    }
// criamos o objeto direto e já expecificamos as chaves as defineções
// a mesma coisa que isso: Object.setPrototypeOf(p3, Produto.prototype);
});
// p3.preco = 10; // quando criamos um objeto direto temos que expecificar pelo uma chave existente no construtor
p3.aumento(10);

console.log(p3);

console.log(`####3`);

function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  // Adicionando um método ao protótipo de Car
  Car.prototype.getDetails = function() {
    return this.make + " " + this.model;
  };
  
  // Criando uma nova instância de Car
  let myCar = new Car("Toyota", "Corolla");
  console.log(myCar.getDetails()); // Output: Toyota Corolla
  
  function ElectricCar(make, model, batteryLife) {
    Car.call(this, make, model); // Chama o construtor de Car
    this.batteryLife = batteryLife;
  }
  
  // Estabelecendo a herança
  ElectricCar.prototype = Object.create(Car.prototype);
  ElectricCar.prototype.constructor = ElectricCar;
  
  // Adicionando um método específico a ElectricCar
  ElectricCar.prototype.getBatteryLife = function() {
    return this.batteryLife + " hours";
  };
  
  let myElectricCar = new ElectricCar("Tesla", "Model S", 24);
  console.log(myElectricCar.getDetails()); // Output: Tesla Model S
  console.log(myElectricCar.getBatteryLife()); // Output: 24 hours

  // Adicionando uma propriedade ao protótipo de Car
  Car.prototype.wheels = 4;
    
  console.log(myCar.wheels); // Output: 4
  console.log(myCar.hasOwnProperty('wheels')); // Output: false
  console.log('wheels' in myCar); // Output: true

// hasOwnProperty: Verifica apenas se a propriedade existe diretamente na instância do objeto.
// Operador in: Verifica se a propriedade existe na instância do objeto ou em qualquer ponto na cadeia de protótipos.