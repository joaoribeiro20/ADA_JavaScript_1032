console.log("===== NÚMEROS PARES ENTRE 1 E 100 =====");

// Utilizando while - e outra estrutura estudada que julgar necessária - imprima os números pares entre 1 e 100.

let number = 1;

while (number < 100) {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
}