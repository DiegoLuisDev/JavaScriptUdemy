// Document Object Model -  O DOM é uma representação hierárquica de todos os elementos em uma página da web, incluindo tags HTML, seus atributos e o conteúdo textual. Ele fornece uma interface de programação que permite aos desenvolvedores acessar e interagir com os elementos da página.

const elementos = [
    {tag: `p`, texto: `1 Texto`},
    {tag: `div`, texto: `2 Texto`}, 
    {tag: `section`, texto: `3 Texto`},
    {tag: `footer`, texto: `4 Texto`},
];

const container = document.querySelector(`.container`);
const div = document.createElement(`div`);

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag); // cria um novo elemento HTML com a tag especificada.
    tagCriada.innerText = texto;

    // ou podemos fazer assim:

    // let textoCriado = document.createTextNode(texto); //  cria um nó de texto com o texto especificado.

    // tagCriada.appendChild(textoCriado); // adiciona o nó de texto como filho do elemento criado.

    div.appendChild(tagCriada); // adiciona o elemento criado ao elemento div, inserindo-o no DOM.
}

container.appendChild(div);