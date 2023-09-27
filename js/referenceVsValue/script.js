let a= 10
let b='hi'
let c=a
// variable value 
//  a         10
//  b         'hi'
//   c         10
c=c+1
// variable value 
//  a         10
//  b         'hi'
// c         11
// same for all the primitive types string , number , bigint , boolean , symbol , null and undefined
let d= [1,2]

// variable  value            address   value
//  d        <adddress1>         address1  [1,2]

//  for arrays the reference is stored unlike primitives 
let e=d
// variable  value            address   value
//  d        <adddress1>         address1  [1,2]
//  e        <adddress1>         
// no new memory allocated same address used 

d.push(3)
// variable  value            address   value
//  d        <adddress1>         address1  [1,2,3]
//  e        <adddress1>         
// d and e now has 3 in the array since same address location is stored

d=[3 ,4,5 ]
// entirely overwritten
// variable  value            address   value
//  d        <adddress2>         address1  [1,2,3]
//  e        <adddress1>         adddress2 [3,4,5]
// d and e now has 3 in the array since same address location is stored 
// will not be overwritten if e is changed now since the memory pointed is different
let f=[1,2]
let g=[1,2]
// now new addresses are used for both f and g different addresses used
// variable  value            address   value
//  f       <adddress2>         address1  [1,2]
//  g        <adddress1>         adddress2 [1,2]

let h=[1,2]
console.log(h) // 1,2
addto(h,3)
console.log(h) // 1,2,3
function addto(array,ele){
  // address of h is passed here 
  array.push(ele)
}
addtoFake(h,3)
console.log(h) 
// h= [1,2,3]
function addtoFake(array,ele){
  // array has the value of a new address now and h is not changed
  array=[ele]
}

const z =[1,2]
// here the value that is being constant is the address not the array itself
z.push(3)
// z now has [1,2,3] since the value at the address is changed

// == and === 

// == converts the object and the compares both
 console.log(1=='1') // true 

 console.log(1=='1') // no conversion in ===

 console.log(0 == '') // true since converted 
 // same for
 console.log(0 == false) // true

 console.log(0 ===false) // false 

 // use case for == is when comparing null 

 console.log(null == null) // true 
 console.log(null == undefined) // true and the only usecase == is valid and is used
 console.log(null === undefined) // false 

 //short-circuiting 

 true || console.log('never prints') // never prints since always true 
 false || console.log('prints') // needs to be checked hence evaluated 

 true && console.log('prints') // needs to be checked hence evaluated 
 false && console.log('never prints') // never prints since always false 

 // use case 
 person && person.address // person is checked ..  if false does not go to address attribute preventing null reference error 
