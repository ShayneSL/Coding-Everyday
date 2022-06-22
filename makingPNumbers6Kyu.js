function createPhoneNumber(numbers){
    let a = numbers.slice(0,3).join('');
    let b = numbers.slice(3,6).join('');
    let c = numbers.slice(6,10).join('');
    return `(${a}) ${b}-${c}`
  
}