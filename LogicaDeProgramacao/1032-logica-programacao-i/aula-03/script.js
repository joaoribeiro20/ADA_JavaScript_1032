console.log("===== AULA 3 =====");

// Assinatura da função
// function nomeDaFuncao() {}

const informacoes = [];

function salvar() {
  const nome = document.getElementById("nome");
  const telefone = document.getElementById("telefone");
  informacoes.push([nome.value, telefone.value]);

  nome.value = "";
  telefone.value = "";
  nome.focus();

  console.table(informacoes);
}