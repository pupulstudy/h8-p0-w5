const changeVocals = str => {
  let i, result = new String();

  for(i = 0; i < str.length; i++){
    switch (str[i]) {
      case 'A': case 'a': case 'I': case 'i': case 'U': case 'u': case 'E': case 'e': case 'O': case 'o': 
      result += String.fromCharCode(str.charCodeAt(i)+1);
      break;
      default: result += str[i];
      break;
    }
  }
  return result;
}

const reverseWord = str => {
  let i, result = new String();

  for (i = 1; i <= str.length; i++) {
    result += str[str.length-i];
  }
  return result;
}

const setLowerUpperCase = str => {
  let i, result = new String();

  for (i = 0; i < str.length; i++) {
    str[i] === str[i].toLowerCase()
    ? result += str[i].toUpperCase()
    : result += str[i].toLowerCase();
  }
  return result;
}

const removeSpaces = str => {
  let i, result = new String();

  for (i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
}

const passwordGenerator = name => name.length < 5 ? `Minimal karakter yang diinputkan adalah 5 karakter` : removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));

// TEST CASES
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
