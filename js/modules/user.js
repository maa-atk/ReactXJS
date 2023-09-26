
// can also be exported inline by 
// export default class User {

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}


// or export function printName ()
function  printName(user){
    console.log(`this is the user name ${user.name}`)
}
function  printAge(user){
    console.log(`this is the user age ${user.age}`)
}

// can export only one thing as default in general it will be the class
// here it will be the user class

export default User;

// to export the other functions use {} and export 
export {printName,printAge}