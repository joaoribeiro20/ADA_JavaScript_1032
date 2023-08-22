console.log("===== LISTA DE COMPRAS =====");

// Criar um algoritmos que permita criar uma lista de compras com 5 elementos e imprima estes elementos no console em ordem alfabética.

// 1. Receber 5 itens
const listaDeCompras = [];

listaDeCompras[0] = prompt("Insira o item 1:");
listaDeCompras[1] = prompt("Insira o item 2:");
listaDeCompras[2] = prompt("Insira o item 3:");
listaDeCompras[3] = prompt("Insira o item 4:");
listaDeCompras[4] = prompt("Insira o item 5:");

// 2. Ordenar os itens em ordem alfabética
// 3. Imprimir os itens
alert("Lista de Compras: " + listaDeCompras.sort().join(", "))
