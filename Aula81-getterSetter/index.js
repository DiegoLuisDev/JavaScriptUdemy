const _velocidade = Symbol(`velocidade`);
// com Symbol não utilizamos o new
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade ]= 50;
    }
    // SETTER: Atualiza o valor
    set velocidade(valor) {
        // console.log(`SETTER`);
        if(typeof valor !== `number`) return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    // GETTER: Retorna o valor atualizado(se tiver setter)
    get velocidade() {
        // console.log(`GETTER`);
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade ] >= 100) return
        this[_velocidade ]++;
        console.log(this.velocidade);
    }

    freiar() {
        if(this[_velocidade ] <= 0) return
        this[_velocidade ]--;
        // console.log(this.velocidade);
    }
}

const c1 = new Carro(`Fusca`);

// for(let i = 0; i <= 200; i++) {
//     c1.acelerar();
// }

c1.velocidade = 55;
console.log(c1.velocidade);

console.log(`##1`);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    set nomeCompleto(valor) {
        valor = valor.split(` `);// mudar para
        this.nome = valor.shift();
        this.sobrenome = valor.join(` `);
    }
}
const p1 = new Pessoa(`Diego`, `Luiz`);
p1.nomeCompleto = `Felipe Miranda Oliveira`;
console.log(p1.nome);
console.log(p1.sobrenome);