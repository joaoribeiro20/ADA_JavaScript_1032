console.log("===== FUNDAMENTOS =====")

/*
  var: permite alterar o estado e redeclarar
  let: permite alterar o estado mas não permite redeclarar
  const: não permite alterar o estado e nem redeclarar
*/

var nome = prompt("Digite seu nome")
let idade = prompt("Digite a sua idade")
const nota1 = parseFloat(prompt("Digita a nota 1"))
const nota2 = parseFloat(prompt("Digite a nota 2"))
const soma = nota1 + nota2

console.log(soma)