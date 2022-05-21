function countPositivesSumNegatives(input) {
    let count = 0
    let sum = 0
    if (input == [] || input == null) {
      return []
    } else {
      for (i = 0; i < input.length; i++) {
        if (input[i] > 0) {
          count += 1
        } else {
          sum += input[i]
        }
      }
    }
  let answer = []
  answer.push(count)
  answer.push(sum)
  if (count === 0 && sum === 0) {
    return []
  } else{return answer}
}