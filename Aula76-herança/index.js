// Produto -> aumento e desconto
// Camisa, caneca
function Product(nome, preco) {
    this.nome = nome,
    this.preco = preco
};

Product.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Product.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    // é o mesmo que:
    // this.nome = nome,
    // this.preco = preco
    this.cor = cor;
};

Camiseta.prototype = Object.create(Product.prototype); 
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}; // sobrescrevendo o método de aumento da constructor function Produto
// Camiseta. = 10;

const camiseta = new Camiseta(`Regata`, 10, `Preta`);
// camiseta.aumento(10);
console.log(camiseta);

console.log(`####0`);

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperties(this, {
        preco: {
        enumerable: true,
        value: preco,
        writable: false, 
        configurable: false 
        },
        estoque: {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== `number`) return;
            estoque = valor;
        }
        }
    });
}

Caneca.prototype = Object.create(Product.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca(`Caneca Aço`, 20, `Aço`);
caneca.preco = 40;
console.log(caneca);

// Função construtora base
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Adicionando um método ao protótipo de Produto
Produto.prototype.getInfo = function() {
    return `${this.nome} custa R$${this.preco}`;
};

// Função construtora derivada
function CCaneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco); // Chamando o construtor da superclasse
    this.material = material;
    this.estoque = estoque;
}

// Estabelecendo a herança
CCaneca.prototype = Object.create(Produto.prototype);
CCaneca.prototype.constructor = CCaneca;

// Adicionando um método ao protótipo de Caneca
CCaneca.prototype.getDetalhes = function() {
    return `${this.nome} é feito de ${this.material} e temos ${this.estoque} em estoque.`;
};

// Testando a herança
const ccaneca = new CCaneca('Caneca de Porcelana', 20, 'Porcelana', 100);
console.log(ccaneca.getInfo()); // Output: Caneca de Porcelana custa R$20
console.log(ccaneca.getDetalhes()); // Output: Caneca de Porcelana é feito de Porcelana e temos 100 em estoque.

function PProduto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
   
  PProduto.prototype.aumento = function (quantia) {
    this.preco += quantia;
  };
   
//   Camiseta está somente erdando as propriedades e métodos de Produto
  function CCamiseta(nome, preco) {
    PProduto.call(this, nome, preco);
  }  

  CCamiseta.prototype = Object.create(PProduto.prototype);
  CCamiseta.prototype.constructor = CCamiseta;

  const cc = new CCamiseta(`Vermelha`, 10);
  cc.aumento(10);
  console.log(cc);