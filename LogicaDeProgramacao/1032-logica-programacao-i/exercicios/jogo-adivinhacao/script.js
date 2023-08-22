console.log("===== JOGO DA ADIVINHAÇÃO =====");

const numeroAleatorio = Math.floor(Math.random() * 10 + 1);
console.log(numeroAleatorio);

let numero, errou;
let tentativas = 3;
let mensagem = "Digite um número (3/3):";
let pontuacao = 300;

do {
  numero = Number(prompt(mensagem));
  errou = numero !== numeroAleatorio;

  if (errou) {
    tentativas--;
    pontuacao -= 100;
    mensagem = `O número digitado está incorreto. Digite outro número (${tentativas}/3):`;
  }
} while(errou && tentativas > 0)

if (tentativas === 0) {
  alert("Você já utilizou todas as suas tentativas");
} else {
  alert(`Parabéns, você acertou! O número é ${numeroAleatorio}. Pontuação: ${pontuacao}`);
}