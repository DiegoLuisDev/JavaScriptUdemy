// Em JavaScript, os getters e setters são métodos especiais que permitem acessar e modificar os valores de propriedades de um objeto de uma forma controlada. Eles permitem implementar comportamentos específicos ao acessar ou definir valores de propriedades, como validações, cálculos ou transformações de dados. Isso é útil para garantir a integridade dos dados e facilitar a manutenção do código.
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, `estoque`, {
        enumerable: true, // mostra a chave
        configurable: false, // permitido alterar as configurações

        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== `number`) {
            //    throw new TypeError(`Mensagem`);
            console.log(`error`);
            }

            estoquePrivado = valor;
        }
    });
}
const p1 = new Produto(`Camiseta`, 20, 3);
console.log(p1);

console.log(`#####1`);

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        }, 
        set nome(valor) {
            // valor = valor.replace(`${valor}`, `Olá Mundo!`); // mudando parte ou a mensagem completa
            _nome = valor;
        }
    };
}

const p2 = criaProduto(`Camisa`); // com get o valor será retornado
p2.nome = `Qualquer coisa`; // com set o valor de nome será mudado
console.log(p2.nome);