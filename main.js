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

function digitize(n) {
  return String(n).split('').reverse().map(Number)
}

function isDivisible(n, x, y) {
  return (n % x === 0 && n % y === 0) ? true : false;
}

const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;
  
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    }
    else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    }
    else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears,catYears,dogYears];
}

const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

function booleanToString(b){
  return b ? 'true' : 'false';
}

function stringy(size) {
  let stringTen = '10'
  if (size % 2 == 0) {
    return stringTen.repeat(size/2)
  } else {
    return stringTen.repeat((size/2)) + '1'
  }
}

function greet(name){  
  if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}

function trickyOrder(pokeList) {
return pokeList.split(' ').reverse().join(',')
}

console.log(trickyOrder('charmander','bulbasaur','squirtle'))

function abbrevName(name){
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

const greet = (name, owner) => name == owner? 'Hello boss': 'Hello guest';
const invert = array => array.map(num => -num);