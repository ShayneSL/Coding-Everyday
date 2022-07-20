function position(letter){
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let alphabetPosition = text => 
      text.split('').map(x => alphabet.indexOf(x) + 1);
    return `Position of alphabet: ${Number(alphabetPosition(letter))}`
    }