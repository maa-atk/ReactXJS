const items = [
  {name:'bike',price:1000},
  {name:'bike2',price:10},
  {name:'bike3',price:1020},
  {name:'bik4',price:1030},
  {name:'bik6',price:1010},
  {name:'bik5',price:1100},
  {name:'bik7',price:1200},
  {name:'bik8',price:1060}
]
// does not change the existing array filter, map, find ,some
// filter method returns t or f based on the condition and stores it into the new array
 const filteredItems = items.filter((item)=>item.price>=100)
 //console.log(filteredItems)
 //map does operation for all the  the elements and stores inside another array
 const mappedItems = items.map((item)=>item.price) // returns the price of each and stores in the array
 const foundItems = items.find((item)=>item.price===100)// finds one returns 1st true value
 //no return method does an operation for all the elements in the array and changes the old array no new array created
 items.map((item)=>console.log(item.price))

 // some function return true if any of the obj returns true
const hasItemsGreaterThan100 =items.some((item)=>item>=1000)
  // every function return true if ALL of the obj returns true
const hasAllItemsGreaterThan100 =items.every((item)=>item>=1000)

//reduce method takes in an array and a property the array will be reduced into
// sum , item , func , initialization of sum
const reduceItems = items.reduce((totalSum,item)=>item.price+=totalSum,0)
console.log(reduceItems)
const items1=[1,22,2,4]
const includes100= items1.includes(1) // returns true if found

// destructuring obj and array
const alpha=['a','b','c','s','d','s']
const num=[1,2,3,4,5,6]

// const a = alpha[0]
// const b= alpha[1] 
// old way of getting the obj 0 and 1

const [a,b]= alpha //assigns 1 to a and 2 to b
const[c,,d,e]=alpha// c=1,d=3,e=4
const[f,,g,h,...rest]=alpha// same as above but now rest has the rest of the elements
console.log(rest) // d , s
// combining arrays

const newArray= [...alpha,...num] // both combined same as alpha.concat(num)

function sumMultiply (a,b){
return [a+b, a*b]
}
const [sum,multiply]=sumMultiply(1,2)// saves sum in sum and multiplication result in multiply
const [sum1,multiply1,division='defaultvaluenotdefined']=sumMultiply(1,2)// since div not defined the default value printed

// immutability

const ppl=['a','b','c','s','d','s']
ppl[2]="changed"
//here the array ppl is changed 


const peopleCopy=[...ppl] // new address and new array
 peopleCopy[2] ="changed"
 // old array untouched
 //performance issues for large arrays
 
 //with method
 const newArray1 =ppl.with(2,"changed") // array copied with changed element at index
 
 // toSort

 ppl.sort()// modifies the original array
 const newsortarray=ppl.toSorted()
 // better since copy and sorting takes place at the same time 

 // same for reverse and toReversed()

 ppl.splice(0,2,"new ") // delete the first 2 elements and replace with new there
 // edits the original array

 ppl.toSpliced(0,2,"new") // immutable version








