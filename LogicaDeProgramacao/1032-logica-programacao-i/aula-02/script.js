console.log("===== AULA 2 =====");

// Lista de contatos:
// 1. Receber um nome e telefone no padrão nome:telefone
// 2. Dividir este valor pelo ":"
// 3. Criar um objeto com os atributos nome e telefone
// 4. Adicionar o objeto em um array
// 5. Imprimir a lista de contatos no console

const contato = prompt("Digite o nome e telefone:");
const informacoes = contato.split(":");

const pessoa = {
  nome: informacoes[0],
  telefone: informacoes[1]
}

const listaDeContatos = [pessoa];

console.log(listaDeContatos);