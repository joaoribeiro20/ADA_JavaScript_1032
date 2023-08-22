console.log("===== DIAS DA SEMANA =====");

/*

Crie uma aplicação que receba um número inteiro entre 1 e 7 imprima o dia da semana correspondente, seguindo a seguinte lógica:
1: Domingo
2: Segunda-feira
3: Terça-feira
4: Quarta-feira
5: Quinta-feira
6: Sexta-feira
7: Sábado;

Caso o valor recebido seja diferente de qualquer um destes, retorne: “Valor recebido não corresponde a nenhum dia da semana”.

*/

const dia = 11;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Valor recebido não corresponde a nenhum dia da semana")
}