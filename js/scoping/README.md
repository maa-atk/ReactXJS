# JavaScript Scopes and `var` Keyword Exception

## Global Scope
- Variables declared outside of any functions or blocks are in the global scope.
- In this code, `varGlobal` is a global variable because it's declared at the top level, and it can be accessed from anywhere in the script.

## Module Scope
- In JavaScript, each module has its own scope.
- The variable `moduleVarExported` is in the module scope because it's exported from the "moduleScope" module and can be accessed from other modules that import it.

## Function Scope
- Variables declared within a function are only accessible within that function.
- In this code, `a`, `b`, `c`, and `d` are function-scoped variables.
- `a` is globally scoped because it's declared outside the function.
- `b` is function-scoped because it's declared within the `test` function.
- `c` and `d` are block-scoped within the `if` block but still function-scoped within the `test` function due to JavaScript's function scope rules.

## Block Scope
- Variables declared within a block (inside curly braces `{}`) are only accessible within that block.
- In this code, `c` is block-scoped within the `if` block, and it's not accessible outside of that block.
- JavaScript introduced block-scoped variables using `let` and `const`, so `c` behaves as expected.
- However, `d` is declared using `var`, which, by default, is function-scoped, but it can be accessed outside the block due to the `var` variable hoisting behavior.

## `var` Keyword Exception
- Variables declared with `var` are function-scoped by default, regardless of where they are declared.
- This means that `d`, declared with `var` inside the `if` block, is still accessible within the entire `test` function, even outside the block.

These explanations and the provided code snippet will help you understand JavaScript variable scoping and the behavior of the `var` keyword.
