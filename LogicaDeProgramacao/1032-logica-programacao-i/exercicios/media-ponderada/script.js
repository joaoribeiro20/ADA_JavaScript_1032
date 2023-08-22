console.log("===== MEDIA PONDERADA =====");

// ((nota1 x peso1) + (nota2 x peso2) + (nota3 x peso3)) / (peso1 + peso2 + peso3)

const peso1 = 1;
const peso2 = 2;
const peso3 = 3;

const nota1 = Number(prompt("Digite a nota 1:"));
const nota2 = Number(prompt("Digite a nota 2:"));
const nota3 = Number(prompt("Digite a nota 3:"));

const mediaPonderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);

const mediaPonderadaArredondada = Math.round(mediaPonderada * 10) / 10;

console.log("Média ponderada:", mediaPonderadaArredondada);

// Arredondar para 1 casa decimal:
// entradas utilizadas: 10, 9 e 8
// saída esperada: 8.6
