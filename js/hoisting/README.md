# JavaScript Hoisting 

## Hoisting in JavaScript

- **Hoisting** is a JavaScript behavior that moves variable and function declarations to the top of their containing scope during compilation.

## Function Declarations Hoisting

- **Function declarations**, like `function test(a, b) { ... }`, are fully hoisted, allowing them to be called before their actual placement in the code.
- This means that even if you call `test(1, 2)` before the function declaration, it works because the function declaration is hoisted to the top.

## Arrow Functions and Non-Hoisting

- **Arrow functions**, such as `const testConst = (a, b) => a + b;`, are not hoisted.
- Attempting to call `testConst1(1, 2)` before its actual declaration results in an initialization error because arrow functions are not hoisted.

## `var` Keyword and Variable Declarations

- Variables declared with the **`var`** keyword, like `var testConstvar = (a, b) => a + b;`, are hoisted but initialized with `undefined` until assigned a value.
- This means that calling `testConstvar(1, 2)` before the assignment results in a type error (not a function).
- Variables declared with `var`, such as `var variableVar = 1;`, are also hoisted and initialized with undefined but they are assigned with the value later on if called before assignment it returns undefined.


