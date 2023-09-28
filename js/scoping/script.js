import { moduleVarExported } from "./moduleScope"
// there are 4 types of scopes global scope module scope function scope and block scope 
// a is globally scoped can be accesd everywhere 
const a=1
 function test(){
   // b is func scoped
    const b= 2
   //  here a =1 b =2 
    console.log("inside func",a,b )
    if(true){
      const c=3
      var d=4
      //case for var is it is always function scoped by default wil be accessible in the func even if it is declared in the block
     // b=2,c=3 c is block scoped anything enclosed in {} is  block scoped
      console.log(b,c,d)
    }
    //out of block scope for c error not defined 
    //d will be printed
     console.log(b,c,d)
 }
 test()
//  here a=1 b cannot be defined error
 console.log('OUTSIDE FUNCTION',a,b)
// got this from the non module scoped var
 console.log(varGlobal)
// got this from the module exported var
console.log(moduleVarExported)
// got this from the module variable wil throw error not defined
console.log(moduleVar)

// let var and const

let varlet1=1
//let varlet1=1 //error cannot be redeclared 
var z=1
var z=1
// can be redeclared //scoped to the next function if no function present then global
// var hoisted the initilization 

//const vs let 
const k=1
k=2 // not allowed to change the variable value ie value for primitives or reference in case of obj and arrays
let l=1
l=2 // allowed


