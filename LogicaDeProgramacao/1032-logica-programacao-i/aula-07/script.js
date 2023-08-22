console.log("===== AULA 7 =====");

function nome() {
  console.log("A função nome foi chamada");
}

function soma(x, y) {
  return x + y;
}

function subtrai(x, y) {
  return x - y;
}

function multiplica(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function obterValoresDoFormulario() {
  const valorNumero1 = document.getElementById("numero1").value;
  const valorNumero2 = document.getElementById("numero2").value;

  if (isNaN(valorNumero1) || isNaN(valorNumero2)) {
    alert("Valores inválidos. Insira apenas números");
    return {
      numero1: 0,
      numero2: 0,
    };
  }

  const numero1 = Number(valorNumero1);
  const numero2 = Number(valorNumero2);

  return {
    numero1,
    numero2
  }
}

function executarSoma() {
  // const formulario = obterValoresDoFormulario();
  // desestruturação:
  const { numero1, numero2 } = obterValoresDoFormulario();
  const resultado = soma(numero1, numero2);

  console.log("Soma:", resultado);
}

function executarSubtracao() {
  const { numero1, numero2 } = obterValoresDoFormulario();
  const resultado = subtrai(numero1, numero2);

  console.log("Subtração:", resultado);
}

function executarMultiplicacao() {
  const { numero1, numero2 } = obterValoresDoFormulario();
  const resultado = multiplica(numero1, numero2);

  console.log("Multiplicação:", resultado);
}

function executarDivisao() {
  const { numero1, numero2 } = obterValoresDoFormulario();
  const resultado = divide(numero1, numero2);

  console.log("Divisão:", resultado);
}











function saudacao(saudacao, nome = "usuário") {
  return `Olá, ${nome}. ${saudacao}`;
}

const saudacaoEmIngles = (nome) => {  // arrow function
  return `Hello, ${nome}. How are you?`
}

const funcionarios =  [
  {
    codigo: "123",
    nome: "Tião",
    cargo: "Gerente",
    dataNascimento: "01/01/1981"
  },
  {
    codigo: "456",
    nome: "Tieta",
    cargo: "Sócio-proprietário",
    dataNascimento: "02/02/1982"
  },
  {
    codigo: "789",
    nome: "Tibúrcio",
    cargo: "Gerente",
    dataNascimento: "03/03/1983"
  }
]

// funções de alta ordem: high order functions
const find = funcionarios.find((funcionario) => funcionario.nome === "Tieta")

console.log("Find:", find);

const filter = funcionarios.filter(function (funcionario) {
  return funcionario.cargo === "Gerente";
})

console.log("Filter:", filter);

const codigo = "789";

const funcionarioPorCodigo = funcionarios.find((funcionario) => funcionario.codigo === codigo);

console.log("Funcionário por código:", funcionarioPorCodigo);

const map = funcionarios.map((funcionario) => {
  funcionario.media = 5; // calculo
  return funcionario;
});

console.log("Map:", map)

function test(value) {
  console.log(value);
}

