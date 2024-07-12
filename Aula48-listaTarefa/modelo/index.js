const inputTarefa = document.querySelector(`.inputNew`);
const btnAdd = document.querySelector(`.btnAdd`);
const tarefas = document.querySelector(`.tarefas`);

inputTarefa.addEventListener(`keypress`, function(e) {
    if(e.keyCode === 13) {
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
});

btnAdd.addEventListener(`click`, function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    createButton(li);
    salvarTarefas();
}

function criaLi() {
    const li = document.createElement(`li`);
    return li;
}

function limpaInput() {
    inputTarefa.value = ``;
    inputTarefa.focus();
}

function createButton (li) {
    li.innerText += ``;
    const buttonApagar = document.createElement(`button`);
    buttonApagar.innerText = `Apagar`;
    buttonApagar.setAttribute(`class`, `apagar`);
    li.appendChild(buttonApagar);
}

document.addEventListener(`click`, function(e){
    const el = e.target;

    if (el.classList.contains(`apagar`)) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll(`li`);
    const listaTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace(`Apagar`, ``).trim();
        listaTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringfy(listaTarefas);
    localStorage.setItem(`tarefas`, tarefasJSON);
}

function addTarefasSalvas() {
    const tarefas = localStorage.getItem(`tarefas`);
    const listaTarefas = JSON.parse(tarefas);

    for (let tarefa of listaTarefas) {
        criaTarefa(tarefa);
    }
}
addTarefasSalvas();