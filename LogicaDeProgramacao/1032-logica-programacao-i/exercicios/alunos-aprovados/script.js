console.log("===== ALUNOS APROVADOS =====");

/*
  Construa uma aplicação que receba  o nome de um aluno, suas 3 notas, calcule a média entre elas e retorne o resultado conforme a lógica a seguir:
  1. Se a nota estiver abaixo de 5, o aluno está reprovado.
  2. Se a nota estiver entre 5 e 6.9, o aluno está de recuperação.
  3. Se a nota for maior que 7, o aluno está aprovado.

  A mensagem deve seguir o seguinte padrão: {nome do aluno} está {aprovado | em recuperação | reprovado}.
*/

function calcular() {
  const nome = document.getElementById("nome").value;
  const nota1 = Number(document.getElementById("nota1").value);
  const nota2 = Number(document.getElementById("nota2").value);
  const nota3 = Number(document.getElementById("nota3").value);

  const media = (nota1 + nota2 + nota3) / 3;

  let mensagem = "";

  if (media < 5) {
    mensagem = `${nome} está reprovado. Sua média é ${media}.`;
  } else if (media >= 5 && media < 7) {
    mensagem = `${nome} está em recuperação. Sua média é ${media}.`;
  } else {
    mensagem = `${nome} está aprovado. Sua média é ${media}.`;
  }

  const resultado = document.getElementById("resultado");
  resultado.innerText = mensagem;
}