## Variables and Values

- JavaScript variables store values.
- Primitive types include string, number, bigint, boolean, symbol, null, and undefined.
- Primitive values are directly assigned to variables.
- When assigning a primitive value to another variable, a copy of that value is made.
  - Example:
    - `let a = 10;` assigns the number `10` to variable `a`.
    - `let b = 'hi';` assigns the string `'hi'` to variable `b`.
    - `let c = a;` creates a copy of `a` with the value `10`.

## Reference Types and Arrays

- Arrays and objects in JavaScript are reference types.
- When assigning a reference type to another variable, both variables reference the same memory location.
- Modifying the content of one variable affects the other if they refer to the same memory location.
  - Example:
    - `let d = [1, 2];` creates an array `[1, 2]` and assigns it to variable `d`.
    - `let e = d;` makes both `d` and `e` reference the same array in memory.

- Reassigning the reference variable creates a new memory location for the variable.
- Modifying one variable does not affect the other when they refer to different memory locations.
  - Example:
    - `d = [3, 4, 5];` reassigns `d` to a new array `[3, 4, 5]`, while `e` still references the old array `[1, 2]`.

## Function Parameters

- When you pass an array to a function as an argument, you pass its reference.
- Modifying the array within the function affects the original array.
  - Example:
    - `let h = [1, 2];`
    - `addto(h, 3);` passes a reference to the original array `h`.

## Constants and Reference Types

- Constants declared with `const` store the address/reference, not the value.
- You can modify the content of a constant array/object because the reference remains the same.
  - Example:
    - `const z = [1, 2];` stores the reference to the array `[1, 2]`, allowing you to modify its content.

## Equality Operators (`==` and `===`)

- The `==` operator performs type conversion before comparison, which can lead to unexpected results.
- The `===` operator performs strict equality comparison without type conversion.
  - Example:
    - `1 == '1'` is `true` due to type conversion, but `1 === '1'` is `false`.

## Short-Circuiting

- Logical operators (`||` and `&&`) use short-circuiting to evaluate expressions efficiently.
- They stop evaluating as soon as the result is known, preventing unnecessary execution.
  - Example:
    - `true || console.log('never prints');` doesn't execute the statement because the result is always `true`.
    - `false && console.log('never prints');` doesn't execute because the result is always `false`.

## Null Reference Check

- Short-circuiting can be used to check for null references before accessing attributes or properties.
  - Example:
    - `person && person.address` checks if `person` exists before accessing its `address` attribute to prevent null reference errors.

