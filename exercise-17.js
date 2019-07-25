const kaliTerusRekursif = angka => angka.toString().length > 1 ?  kaliTerusRekursif(parseInt(angka.toString()[angka.toString().length-1]) * kaliTerusRekursif(Math.floor(angka/10))) : angka;

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6