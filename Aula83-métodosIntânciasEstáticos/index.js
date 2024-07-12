class ControleRemoto{
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // método de instância
    aumentarVolume() {
        this.volume += 2;
        console.log(this.volume);
    }
    // método de instância
    diminuirVolume() {
        this.volume -= 2;
    }
    // método estático
    static trocaPilha() {
        console.log(`Troca pilha iniciado`);
    }
}

const c1 = new ControleRemoto(`LG`);

// for(let i = 0; i < 10; i++){
//     c1.aumentarVolume();
// }

// c1.aumentarVolume();
c1.aumentarVolume();
c1.diminuirVolume();
console.log(c1);

ControleRemoto.trocaPilha();