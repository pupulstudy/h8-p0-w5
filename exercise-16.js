const totalDigitRekursif = angka => angka > 0 ? parseInt(angka.toString()[angka.toString().length-1]) + totalDigitRekursif(Math.floor(angka/10)) : 0;

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5