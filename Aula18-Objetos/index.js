// const pessoal = {
//     nome: `Luiz`,
//     sobrenome: `Miranda`,
//     idade: 25
// };

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa(`Luiz`, `Diego`, 15);
const pessoa2 = criaPessoa(`Maria`, `Diego`, 25);
console.log(pessoa1);
console.log(pessoa2);
// um das formas simplificadas de armazenar dados de usuarios

const pessoa3 = {
    nome: `Diego`,
    sobrenome:`Luis`,
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },
    
    incrementaIdade() {
        this.idade++;
    }
};

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();