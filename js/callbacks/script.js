function print(val){
  console.log(val)
}

console.log(print)
// function is an object and the log prints the def of the function

function usecallBack(callBack){
  // use the passed function
  callBack('hello')
}

usecallBack(print)
//prints hello
//here the print function is passed into the useCallback function which then provides it with the value hello to print

//if passed like this then error not a func callback the return is an undefined not a func
usecallBack(print())
//another way similar to the above method
const callBack1=print
callBack1('hello')

// works for inline functions as well
usecallBack((val)=console.log(val))