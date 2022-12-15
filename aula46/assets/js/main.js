const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi (){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput () {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += '  ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('style', 'cursor:pointer');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);

    criaBotaoApagar(li)
    limpaInput();
    salvarTarefa();
}

btnTarefa.addEventListener('click', (e)=>{
    if(!inputTarefa.value) return;

    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', (e)=>{
    const element = e.target;

    if (element.classList.contains('apagar')){
        element.parentElement.remove();
        salvarTarefa();
    }

})

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();