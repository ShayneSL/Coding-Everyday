/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself. done
Add them all together. reduced and done
Take the square root of the result. math sqrt fn
Divide by two. bracketed

Note: the result should be rounded down to the nearest integer. math floor fn!
*/

function predictAge(a,b,c,d,e,f,g,h){
    let arr = [a,b,c,d,e,f,g,h]
    let productArray = arr.map((age) => age*age)
    let sum = productArray.reduce((acc,c) => acc + c, 0)
    return (Math.sqrt(sum))/2
  }
