console.log("===== CALCULADORA =====");

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
    throw new Error("Valores inválidos. Insira apenas números");
  }

  const numero1 = Number(valorNumero1);
  const numero2 = Number(valorNumero2);

  validarPositivo(numero1);
  validarPositivo(numero2);

  return {
    numero1,
    numero2
  }
}

function validarPositivo(numero) {
  if (numero < 0) {
    throw new Error("Insira apenas números positivos");
  }
}

function executarSoma() {
  try {
    const { numero1, numero2 } = obterValoresDoFormulario();
    const resultado = soma(numero1, numero2);

    console.log("Soma:", resultado);
  } catch (erro) {
    alert(erro.message);
  }
}

function executarSubtracao() {
  try {
    const { numero1, numero2 } = obterValoresDoFormulario();
    const resultado = subtrai(numero1, numero2);

    console.log("Subtração:", resultado);
  } catch (erro) {
    alert(erro.message);
  }
}

function executarMultiplicacao() {
  try {
    const { numero1, numero2 } = obterValoresDoFormulario();
    const resultado = multiplica(numero1, numero2);

    console.log("Multiplicação:", resultado);
  } catch (erro) {
    alert(erro.message);
  }
}

function executarDivisao() {
  try {
    const { numero1, numero2 } = obterValoresDoFormulario();
    const resultado = divide(numero1, numero2);

    console.log("Divisão:", resultado);
  } catch (erro) {
    alert(erro.message);
  }
}