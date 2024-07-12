const pessoa = {
    nome: `Luis`,
    sobrenome: `Carvalho`,
    idade: 30,
    endereço: {
        rua: `Rua Carlos Junior`,
        numero: 333
    }
};

//  atribuição via desestruturação
// const { nome, sobrenome } = pessoa;
// ele criará 2 variaveis, contendo os valores das propriedades

// const { nome: teste} = pessoa;
// // mudando o nome da variavel
// console.log(teste);

// let {nome = `caio`} = pessoa;
// nome = `caio`
// criará a variavel nome, e mudará o seu valor
// console.log(nome);

let nomePessoa = pessoa.nome
nomePessoa = `caio`;
console.log(nomePessoa);
// forma para pegar o nome do objeto pessoa e atribui-lo a variavel nomePessoa

const { endereço: {rua: r, numero: n}, endereço } = pessoa;
// console.log( r, n, endereço );

const {nome3, ...resto} = pessoa;
console.log(nome3);

const {idade, nome, sobrenome} = pessoa;
// // rest pegara todas as outras propriedades não importa qual seja a ordem (idade está delas)
console.log(nome, sobrenome, idade, r, n);
