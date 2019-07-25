const sorting = arrNumber => {
  let i,j,temp;

  for (i = 0; i < arrNumber.length; i++) {
    for (j = 0; j < arrNumber.length; j++) {
      if (arrNumber[j] > arrNumber[j + 1]) {
        temp = arrNumber[j]
        arrNumber[j] = arrNumber[j + 1]
        arrNumber[j + 1] = temp
      }
    }
  }
  return arrNumber
}

const getTotal = arrNumber => {
  let i,counter = 0

  for (i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === arrNumber[arrNumber.length - 1]) counter++;
  }
  return arrNumber[arrNumber.length - 1] ? `angka paling besar adalah ${arrNumber[arrNumber.length - 1]} dan jumlah kemunculan sebanyak ${counter} kali` : '';
}

const mostFrequentLargestNumbers = arrNumber => {
  let listSort = sorting(arrNumber)
  let countHighest = getTotal(listSort)
  return countHighest
}

// TEST CASES
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''