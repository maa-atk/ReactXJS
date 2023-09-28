
//object destructuring 
const p1={
  name:'a',
  age:1,
  address:{
    city: 'tutukbad',
    state:'hue hue'
  }
}

const p2={
age:2,
favfood:'sand'

}

// two objects 
const {name , age } = p1 // variables are extracted and set to correct name and age
// not based on position but name must match exactly 
console.log(name) // a

// or
const {name:firstName , age:Ageofperson } = p1 // variables are extracted and set to correct name and age
// the property is assigned to firstname and can be called now using that 
const {name:firstName1 , age:Ageofperson1, favfood='default-value' } = p1 
// can set default value to new variable/property if not defined then the default value is picked up 

const {name:firstName2 , age:Ageofperson2, ...rest } = p1 
//rest now has the other properties except the name and age

const {name:firstName3 , age:Ageofperson4, address:{city} } = p1 // destructuring and getting the value in the address

p3 = {...p1,...p2} 
// p3 has 
// name a from p1
// age 2 gets refined via p2
// adddress of p1
// and fav food from p2


function printUser({name , age , food ='defaultValueIfNotFound'}){

  /// here only the name and age property is used from the object passed and the entire p1 is not used 
 console.log(`name is ${name} and age is  ${age}`) 
}

printUser(p1)

// inheritance and composition
class Monster {
  constructor(name){
    this.name=name
  }

  attack(){
    console.log(this.name,"attacked")
  }
  walk(){
    console.log(this.name,"walked")
  }
}

class FlyingMonster extends Monster{
  // inheritance
  flew(){
    console.log(this.name,"flew")
  }
}

class SwimmingMonster extends Monster{
  // inheritance
  swim(){
    console.log(this.name,"Swam")
  }
}

const shark= new SwimmingMonster('shark')
shark.walk()
shark.attack()
shark.swim()

const chicken= new FlyingMonster('chicken')
chicken.walk()
chicken.attack()
chicken.flew()

// to create a flying swimming monster 
// difficult so use 
//use composition instead of inheritance

function swimmer({name}){
  // destructure and send the name from the object
 return {
 swim: ()=> console.log(name,"Swam")
 } 
}

function swimmerMonster(name){
  const monster= {name :name}
  // destructure and send the name from the object
 return {
  ...monster,// get all the properties of the monster class
  ...swimmer(monster),
 swim: ()=> console.log(name,"Swam")
 } 
}

function flyer ({name}){
  // destructure and send the name from the object
 return {
 fly: ()=> console.log(name,"flew")
 } 
}



function flyingSwimmingMonster(name){
  const monster= {name :name}
  // destructure and send the name from the object
 return {
  ...monster,// get all the properties of the monster class
  ...swimmer(monster),// add function to swim
 ...flyer(monster)// add function to fly to the obj property
 } 
}

const obj= swimmer({name:'penguin'})
obj.swim()

// to create a swimming monster we do
const obj2= swimmerMonster('Platypus')
obj2.swim()

// create flying swimming monster 
const  obj3=flyingSwimmingMonster("hooman")
obj3.fly()
obj3.swim()

