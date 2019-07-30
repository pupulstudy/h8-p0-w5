// const kaliTerusRekursif = angka => angka.toString().length > 1 ?  kaliTerusRekursif(parseInt(angka.toString()[angka.toString().length-1]) * kaliTerusRekursif(Math.floor(angka/10))) : angka;

const kaliTerusRekursif = angka => {
	if (angka.toString().length > 1) {
		for (var i = 0, result = 1; i < angka.toString().length; i++) {
			result *= parseInt(angka.toString()[i]);
		}
		return kaliTerusRekursif(result);
	} else {
		return angka;
	}
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
console.log(kaliTerusRekursif(3333)); // 8
