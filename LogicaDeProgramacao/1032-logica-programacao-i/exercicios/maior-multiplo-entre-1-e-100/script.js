console.log("===== MAIOR MULTIPLO ENTRE 1 E 100 =====");

const numero = Number(prompt("Digite um número"));

let encontrouMultiplo = false;
let numeroAtual = 100;
while (numeroAtual > 1) {
  const ehMultiplo = numeroAtual % numero === 0;
  if (ehMultiplo) {
    console.log(`O maior múltiplo de ${numero} entre 1 e 100 é ${numeroAtual}`);
    encontrouMultiplo = true;
    break;
  }
  numeroAtual--;
}

if (!encontrouMultiplo) {
  console.log(`Não existem múltiplos de ${numero} entre 1 e 100.`)
}