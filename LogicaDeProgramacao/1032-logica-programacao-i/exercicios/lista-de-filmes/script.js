console.log("===== LISTA DE FILMES =====");

/*
  Criar uma função:
  1 - recupere a lista de filmes do localStorage
  2 - imprima a lista de filmes na tela
*/

function obterListaDeFilmes() {
  return JSON.parse(localStorage.getItem("filmes"));
}

function salvarListaDeFilmes(filmes) {
  localStorage.setItem("filmes", JSON.stringify(filmes));
}

function atualizarListaDeFilmes(filmes) {
  const elementoUl = document.getElementById("lista-de-filmes");
  elementoUl.innerHTML = "";

  for (const filme of filmes) {
    const elementoLi = document.createElement("li");
    elementoLi.innerText = `${filme.nome} - ${filme.ano}`;
    elementoUl.appendChild(elementoLi);
  }
}

function ehValido(valor) {
  if (!valor) {
    throw new Error("Todos os valores são obrigatórios");
  }
}

function ehNumero(valor) {
  if (isNaN(valor)) {
    throw new Error("Número inválido");
  }
}

function adicionarFilme() {
  try {
    const elementoCodigo = document.getElementById("codigo");
    const elementoNome = document.getElementById("nome");
    const elementoAno = document.getElementById("ano");

    ehValido(elementoCodigo.value);
    ehValido(elementoNome.value);
    ehValido(elementoAno.value);
    ehNumero(elementoCodigo.value);
    ehNumero(elementoAno.value);

    const filme = {
      codigo: Number(elementoCodigo.value),
      nome: elementoNome.value,
      ano: Number(elementoAno.value)
    }

    const filmes = obterListaDeFilmes();
    filmes.push(filme);
    salvarListaDeFilmes(filmes);
    atualizarListaDeFilmes(filmes);

    elementoCodigo.value = "";
    elementoNome.value = "";
    elementoAno.value = "";

    elementoCodigo.focus();
  } catch (erro) {
    alert(erro.message);
  }
}

const filmes = obterListaDeFilmes();
atualizarListaDeFilmes(filmes);