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
  };
{}

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
{}

noSpace=(x)=> x.split(" ").join("") //splits by a space separator, rejoins the array into a string with 0 spaces in-between characters

function getCount(str) {
  var vowelsCount = 0;
  let arrayVowels = str.split(' ').join('') 
  console.log(arrayVowels)
  for (i = 0; i < arrayVowels.length; i++) {
  if (arrayVowels[i] === 'a' || arrayVowels[i] === 'e' || arrayVowels[i] === 'i' || arrayVowels[i] === 'o' || arrayVowels[i] === 'u') {
    vowelsCount++
    }   
  }
  return vowelsCount
}

function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}

function add(a,b){
  return a + b
}

function divide(a,b){
  return a / b
}

function multiply(a,b){
  return a * b
}

function mod(a,b){
  return a % b
}
 
function exponent(a,b){
  return a ** b
}
  
function subt(a,b){
  return a - b
}

const nameShuffler = str => str.split(' ').reverse().join(' ');