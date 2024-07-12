class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado`)
            return;
        }

        this.ligado = true
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado`)
            return;
        }

        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico(`iPhone`);
d1.ligar();
// d1.desligar();
console.log(d1);

console.log(`##0`);

class IPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}

// intância
const s6 = new IPhone(`6sPlus`, `Branco`, `6s`);
s6.ligar();
// s6.desligar();
console.log(s6);

console.log(`###1`);

// SubClasse (Classe Filha) - Extensão
class Tablet extends DispositivoEletronico {
    constructor(nome, wifi) {
        super(nome)
        this.wifi = wifi;
    }

    // ligar() {
    //     console.log(`Alterou o método ligar`);
    // }
    // os métodos criados nas subClass(filhas) não podem ser acessar por outras subClass(filhas) e nem pela superClass(Pai).
    falaOi() {
        console.log(`Oi`);
    }
}
// instância
const t1 = new Tablet(`Samsung`, true);
t1.ligar();
// t1.desligar();
// t1.ligar();
// t1.falaOi
console.log(t1);

console.log(`###2`);

const t2 = new Tablet(`Motorola`, true);
t2.ligar();
console.log(t2);