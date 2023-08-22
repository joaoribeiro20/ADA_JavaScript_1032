console.log("===== NÚMEROS PARES =====");

function verificar() {
  const numero = document.getElementById("numero");
  const numeroConvertido = parseFloat(numero.value);
  const resto = numeroConvertido % 2 == 0;
  const resultado = document.getElementById("resultado");

  if (resto) {
    resultado.innerText = "O número é par";
  } else {
    resultado.innerText = "O número é ímpar";
  }
}