//named function with 2 param
function sum(a,b){
return a +b;
}

// arrow equivalent
let sum2= (a,b) => a+b

// no param arrow version
let randnum= ()=> Math.random 

// anonymous function

document.addEventListener('click',()=>console.log('click'))

// arrow functions use this. differently

class Person{
  constructor(name){
    this.name = name
  }
  // defined two functions
  printNameUsingArrow(){
    setTimeout(()=>console.log(this.name),10)
    //uses arrow
  }

  printNameWithoutUsingArrow(){
    setTimeout(function (){
      console.log(this.name)
    },10)
    //does no use the arrow
  }

}

let person = new Person('bob')

person.printNameWithoutUsingArrow() // gives blank 
//same as printing here
console.log(this.name) // blank 
// for standard function  this is defined where it called (here it is outside the class)
// hence this in global not present hence blank is printed global scoped

person.printNameUsingArrow() // gives the name bob
// in case for an arrow function the this is not redefined outside the function it used the one defined inside.
