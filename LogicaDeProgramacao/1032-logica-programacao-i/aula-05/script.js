console.log("===== AULA 5 =====");

/*
numero

enquanto numero for menor que 10, imprima:
*/

let numero = 1;

while (numero < 10) {
  if (numero % 2 === 0) {
    numero = numero + 1;
    continue;
  }
  console.log(numero);
  numero = numero + 1;
}

console.log("valor final", numero);

/*

Utilizando while, desenvolva uma aplicação que receba 1 número, percorra o intervalo entre 1 e 100 e imprima todos os múltiplos deste número com a mensagem “{numeroEncontrado} é múltiplo de {numero}." Se nenhum múltiplo for encontrado imprima a mensagem: “Não existem múltiplos de {numero} entre 1 e 100“.

*/