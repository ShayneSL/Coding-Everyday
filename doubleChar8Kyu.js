function doubleChar(str) {
    let arr = str.split('')
    let empty = []
    for (i = 0; i < arr.length; i++) {
      empty.push(arr[i])
      empty.push(arr[i])
    }
    return empty.join('')
  }