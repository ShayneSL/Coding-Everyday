function count (string) {  
    let arr = string.split('')
    let sums = arr.reduce(function (obj, item) {
      if (!obj[item]) {
        obj[item] = 0
      }
      obj[item]++
      return obj
    }, {})
     return sums;
  }