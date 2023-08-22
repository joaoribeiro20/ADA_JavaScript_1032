console.log("===== ESTOQUE DE VEÍCULOS =====");

/*
Uma empresa de veículos está passando por um processo de modernização e precisa migrar da estratégia atual de controle de estoque, que é o preenchimento manual de planilhas, para um sistema que possibilite o controle automatizado.

Construa um software capaz de armazenar a marca, modelo e quantidade em estoque de cada veículo.

Requisitos:
1. Os dados devem ser armazenados em um array de objetos.

[
  { modelo: "nome do modelo", marca: "nome da marca", quantidade: 1 },
  { modelo: "nome do modelo", marca: "nome da marca", quantidade: 2 },
]

2. O sistema deve conter uma forma de consultar a quantidade de um veículo pelo modelo. Esta busca deve funcionar mesmo se o usuário digitar maiúsculas e minúsculas diferentes do cadastro. Por exemplo, as buscas “gol”, “GOL” ou “Gol” devem todas encontrar o estoque do carro de modelo “Gol”.

3. Após utilizarem o sistema, os funcionários perceberam que a busca seria mais útil se eles não tivessem que preencher o modelo completo do veículo, mas apenas o início do modelo. Melhore a busca para permitir isto.

Para buscas em arrays:
- find: array.find(item => instrucao booleana);
*/

let estoque = [];

function salvar() {
  const modelo = document.getElementById("modelo");
  const marca = document.getElementById("marca");
  const quantidade = document.getElementById("quantidade");

  const item = {
    marca: marca.value,
    modelo: modelo.value,
    quantidade: Number(quantidade.value)
  };

  estoque.push(item);
  marca.value = "";
  modelo.value = "";
  quantidade.value = "";
  marca.focus();

  console.table(estoque);
}

function filtrar() {
  const filtro = document.getElementById("filtro");
  const veiculoFiltrado = estoque.find(veiculo => veiculo.modelo.toLowerCase().startsWith(filtro.value.trim().toLowerCase()));
  const mensagem = veiculoFiltrado.marca + " " + veiculoFiltrado.modelo + " em estoque: " + veiculoFiltrado.quantidade;
  alert(mensagem);
}
