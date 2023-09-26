# JavaScript Callbacks and Function Usage

## Functions as Objects

- In JavaScript, a function is also an object.
- When you log a function like `console.log(print)`, it prints the definition of the function as a JavaScript object.

## Using Callback Functions

- The `usecallBack` function is designed to accept a callback function as its argument.
- It utilizes the passed callback function to perform a specific task.
- For example, when you call `usecallBack(print)`, the `print` function is passed as a callback, and it prints 'hello' when invoked.

## Handling Callback Errors

- It's important to avoid calling the callback function when passing it as an argument.
- For instance, calling `usecallBack(print())` results in an error because `print()` is immediately executed, and its return value (which is `undefined`) is passed as the callback.

## Assigning Functions to Variables

- Functions can be assigned to variables and used as callbacks.
- `const callBack1 = print` assigns the `print` function to `callBack1`, allowing you to use `callBack1('hello')` to print 'hello'.

## Inline Functions as Callbacks

- Inline functions can be used as callbacks directly within the function call.
- For example, `usecallBack((val) => console.log(val))` uses an inline function to log a value.
