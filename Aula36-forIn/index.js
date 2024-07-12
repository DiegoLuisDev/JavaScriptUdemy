// const container = document.querySelector(`.container`);
// const div = document.createElement(`div`);
// for in - lê os indices ou chaves do objeto
//                  0        1        2
// const frutas = [`Pessego`, `Uva`, `Laranja`];
const pessoas = {
    Nome: `Diego`,
    Idade: 11,
    Natural: `Sim`
};

const chave = nome;
console.log(chave);


for (let i in pessoas) {
    //utilizando o for classico: let i = 0; i < frutas.length; i++
    let res = pessoas[i];
    let resCriado = document.createElement(`p`);
    resCriado.innerText = `${i}: ${res}`;
    //estamos pegando as chaves (propriedades), e valores
    div.appendChild(resCriado);
}
container.appendChild(div);
// const {Nome, Idade} = pessoas;
// console.log(Nome, Idade);
// desestruturação