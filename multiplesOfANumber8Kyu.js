let findMultiples = (int, lim) => {
    let arr =[]
    for (i = int; i<=lim; i++) {
      if (i % int  == 0) {
        arr.push(i)
      }
    }
    return arr
  }