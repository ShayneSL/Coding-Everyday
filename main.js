function basicOp(operation, a, b)
{
  if (operation == '-') {
    return a-b
  } else if (operation == '+') {
    return a+b
  } else if (operation == '*') {
    return a*b
  } else {
    return a/b
  }
}

function positiveSum(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum = sum + arr[i]
      }
    }
    return sum 
  }

  function sum (numbers) {
    if (numbers == []) {
       return 0
     } else {
        let total = 0 
        for (let i = 0; i < numbers.length; i++) {
         total += numbers[i]
       }
        return total
     }
      
      
  };