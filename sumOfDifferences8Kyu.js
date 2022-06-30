function sumOfDifferences(arr) {
    let sorted = arr.sort((a, b) => b - a)
    let sum = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
      sum += (arr[i] - arr[i + 1]);
    }
    return sum;
  }