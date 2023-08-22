console.log("===== AULA 4 =====");

// se condicao for verdadeira execute

// const numero = "11";

// condicional "e" -> &&
// const condicao = numero >= 0 && numero < 10 && numero % 2 == 0;

// const condicao = numero <= 0 || numero >= 10;

// if (condicao) {
//   console.log("Condição atendida!");
// }

// if (!condicao) {
//   console.log("Condição NÃO atendida!")
// }

// switch
// const produto = "Vassoura";

// switch (produto) {
//   case "Maçã":
//     console.log("O preço da Maçã é R$ 2.99 / Kg.");
//     break;
//   case "Banana":
//     console.log("O preço da Banana é R$ 3.99 / Kg.");
//     break;
//   case "Pêra":
//     console.log("O preço da Pêra é R$ 4.99 / Kg.");
//     break;
//   case "Uva":
//     console.log("O preço da Uva é R$ 8.99 / Kg.");
//     break;
//   default:
//     console.log("Este produto não consta no estoque.")
// }

const dia = -1;

switch(dia) {
  case 1:
  case 7:
    console.log("Final de semana");
    break;
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    console.log("Dia de semana")
    break;
  default:
    console.log("Dia inválido")
}
