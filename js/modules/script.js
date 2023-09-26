//importing the user in the file 
import User from './user';
// to import the other things use it this way without the default use as for the rename
import{printName,printAge as agePrinter } from './user'

const user= new User('name',22)
console.log(user);
//calling imported function 
printName(user);
agePrinter(user);