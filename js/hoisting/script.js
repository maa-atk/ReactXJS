function test(a,b){
  return a+b;
}

const testConst = (a,b)=> a+b
console.log(test(1,2)) 
console.log(testConst(1,2))

console.log(test1(1,2)) // this will also work since hoisted
// some pieces of code is taken to the top of the file and then executed even if placed below
// this is done for functions

console.log(testConst1(1,2)) // this will not work initilization error not hoisted
// arrow functions are not hoisted just normal function

// in general the code runs from the top of the file to the bottom!

console.log(testConstvar(1,2)) // type error testConstvar is not a function

// if a variable is defined as var then undefined is the out put since it is initialized not set by hoisting
// like var variableVar = undefined 
// will throw error for const cannot access error
console.log(variableVar) 


function test1(a,b){
  return a+b;
}

const testConst1 = (a,b)=> a+b
var testConstvar = (a,b)=> a+b
var variableVar =1;

