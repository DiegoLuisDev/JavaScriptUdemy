// Factory function (Função fábrica)  é uma função em JavaScript que retorna um objeto. É uma alternativa à utilização de classes ou funções construtoras para criar objetos. As funções fábricas são uma forma simples e poderosa de criar múltiplos objetos similares sem a necessidade de utilizar a palavra-chave new.

function criaPessoa(nome, sobrenome, a, p, assunto) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(` `); // formata para um array
            this.nome = valor.shift(); // forma para remover o primeiro nome que está no agora no array, e armazena ele na variavel nome
            this.sobrenome = valor.join(` `); //une os nomes com espaço entre eles
        },
        // falaImc() {
        // return `${this.nomeCompleto()} Seu IMC é:${this.imc()}`;
        // }

        // Getter
        fala(assunto = `nada`) {
            return `${this.nome} está ${assunto}`;
        },

        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return `Seu Imc é: ` + indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa(`Luiz`, `Miranda`, 1.80, 80, `aaaa`);
const p2 = criaPessoa(`Gusta`, `Gol`, 1.80, 90);
const p3 = criaPessoa(`Gaby`, `Fernanda agata`, 1.80, 75);

p1.nomeCompleto = `Maria Oliveira Silva`;
p1.altura = 1.90;
p1.peso = 90;

console.log(p1.nomeCompleto, p1.sobrenome, p1.imc, p1.fala());
console.log(p2.nomeCompleto, p2.imc);
console.log(p3.sobrenome, p3.imc);