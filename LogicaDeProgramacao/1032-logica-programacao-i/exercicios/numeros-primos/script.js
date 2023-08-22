console.log("===== NUMEROS PRIMOS =====");

for (let numero = 2; numero <= 100; numero++) {
  let ehPrimo = true;

  for (let primo = 2; primo < numero; primo++) {

    if (numero % primo === 0) {
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo) {
    console.log(numero);
  }
}

// for (let numero = 1; numero <= 100; numero++) {
//   let multiplos = 0;

//   for (let primo = 0; primo <= numero; primo++) {
//     if (numero % primo === 0) {
//       multiplos++;
//     }
//   }

//   if (multiplos === 2) {
//     console.log(numero);
//   }
// }