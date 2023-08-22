console.log("===== LISTA DE TAREFAS =====");

/*
Seu time foi encarregado pelo desenvolvimento de um novo software de gestão e produtividade interno para sua empresa. Em conversas internas da equipe ficou decidido que iriam iniciar o desenvolvimento desta solução com a implementação da lista de tarefas. Para a primeira versão desta solução, desenvolva um software capaz de armazenar uma lista de tarefas.

Requisitos:
  1. [x] O software deve permitir a adição de novas tarefas.

  2. [x] Para a primeira versão, cada tarefa deve ser composta apenas pelo título.

  3. [x] Não deve ser permitida a adição de tarefas sem título. Caso o usuário tente adicionar uma tarefa sem título apresente a mensagem: “Erro: não é possível adicionar uma tarefa com título vazio”.

  4. [x] Após cada adição, o software deve apresentar a lista atualizada de tarefas.

  O software foi muito bem aceito internamente, no entanto, os usuários acreditam que seria ainda mais útil se pudessem adicionar uma descrição à cada tarefa. Adicione a possibilidade de adicionar uma descrição à tarefa.

Requisitos:
  1. [x] Altere a estrutura utilizada para armazenamento das tarefas para um objeto complexo, capaz de armazenar titulo e descricao.

  2. [x] Adicione mais um campo para permitir a adição de uma descrição a cada tarefa.

  3. [x] Caso o usuário não insira a descrição da tarefa, insira a descrição padrão “…”.

  4. [x] Altere a apresentação da tarefa para incluir a descrição no seguinte formato: {nome}: {descricao}
*/

const tarefas = [];

function adicionarTarefa() {
  const inputTitulo = document.getElementById("titulo");
  const titulo = inputTitulo.value.trim();

  const inputDescricao = document.getElementById("descricao");
  const descricao = inputDescricao.value.trim();

  inputTitulo.value = "";
  inputDescricao.value = "";

  if (!titulo) {
    alert("Erro: não é possível adicionar uma tarefa com título vazio");
    return;
  }

  const tarefa = {
    titulo,
    descricao: !descricao ? "..." : descricao, // if ternário
  }

  tarefas.push(tarefa);
  inputTitulo.focus();

  const listaDeTarefas = document.getElementById("lista-de-tarefas");
  listaDeTarefas.innerHTML = "";

  for (const item of tarefas) {
    const itemDaLista = document.createElement("li");
    itemDaLista.innerText = `${item.titulo}: ${item.descricao}`;
    listaDeTarefas.appendChild(itemDaLista);
  }
}