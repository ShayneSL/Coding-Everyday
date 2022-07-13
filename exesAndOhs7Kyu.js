function XO(str) {
    let xcount = 0
    let ocount = 0
    let string = str.toLowerCase()
    for (i = 0; i < string.length; i++) {
      if (string[i] == 'x') xcount++;
      if (string[i] == 'o') ocount++;
    }
    return xcount == ocount
}