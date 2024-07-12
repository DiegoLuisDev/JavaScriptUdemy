const falar = {
    falar(){
        console.log(`${this.nome} está falando`);
    },
};
const comer = {
    comer(){
        console.log(`${this.nome} está comendo`);
    },
};
const beber = {
    beber(){
        console.log(`${this.sobrenome} está bebendo`);
    },
};
// const pessoaPrototype = Object.assign({}, falar, comer, beber);

const pessoaProto = {...falar, ...comer, ...beber}; // spread operator
// const pessoaProto = {
//     saudacao() {
//         console.log(`Olá, meu nome é ${this.nome}`);
//       }
//     };


function criaPessoa(nome, sobrenome) {

    // return Object.assign(Object.create(pessoaProto), {
    return Object.create(pessoaProto, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa(`Luiz`, `Fabio`);
p1.falar();