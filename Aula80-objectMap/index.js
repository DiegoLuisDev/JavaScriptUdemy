const pessoas = [
    {id: 3, nome: `Maria`},
    {id: 2, nome: `Joana`},
    {id: 1, nome: `Julia`},
];

// const novasPessoas = {};
// for(const pessoa of pessoas) {
//     const {id} = pessoas;
//     novasPessoas[id] = {...pessoas};
// }

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoas});
}

// for(const [ident, {id, nome}] of novasPessoas) {
//     console.log(ident, id, nome)
// }

novasPessoas.delete(2);
console.log(novasPessoas.get(1));

console.log(`##1`);

const novasPessoa = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoas});
    console.log(id);
}
console.log(novasPessoa.get(2));