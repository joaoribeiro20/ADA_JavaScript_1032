console.log("===== AULA 6 =====");

// while (condicao) {

// }

// para ( inicialização ; condição ; expressão final ) { }

// for (let index = 0; index <= 100; index++) {
//   const ehPar = index !== 0 && index % 2 === 0;
//   if (ehPar) {
//     console.log(index);
//   }
// }

// Percorrendo um array:
// const listaDeCompras = ["Banana", "Ovos", "Carne", "Pão", "Refrigerante"];

// for (let indice = 0; indice < listaDeCompras.length; indice++) {
//   const elemento = listaDeCompras[indice];
//   console.log(elemento);
// }

// const matriz = [
//   [1, 2, 3],
//   [4, 5, 6, 7],
//   [8, 9],
//   ["João", "Maria"]
// ];

// for (let index = 0; index < matriz.length; index++) {
//   const element = matriz[index];
//   console.log(element);
// }

// Percorrendo um array com for..of:
// const listaDeCompras = ["Banana", "Ovos", "Carne", "Pão", "Refrigerante"];

// for (const item of listaDeCompras) {
//   console.log(item);
// }

// key:value -> chave:valor
const pessoa = {
  nome: "Adriano",
  dataNascimento: "31/10/1990",
  hobbies: ["Ler", "Programar"],
  endereco: {
    rua: "1",
    numero: "2",
    bairro: "Centro",
    cidade: "Cuiabá",
    uf: "MT"
  }
}

// const cidade = pessoa.endereco.cidade;
// const cidade = pessoa.endereco ? pessoa.endereco.cidade : "Não informado"; // if ternário


const cidade = pessoa.endereco?.cidade ?? "Não informado"; // operado de coalescência
console.log(cidade)

// for (const key in pessoa) {
//   console.log(key);
// }