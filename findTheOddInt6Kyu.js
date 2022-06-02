function findOdd(array) {
    let integerObject = array.reduce(function (obj,item) {
             if (!obj[item]) {
               obj[item] = 0
             }
      obj[item]++
      return obj
             }, {})
    for (const property in integerObject) {
    console.log(`integerObject.${property} = ${integerObject[property]}`);
      if (integerObject[property] % 2 != 0) {
        return Number(property)
      }
  }
  }