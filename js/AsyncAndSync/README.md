## Promises

### makeRequest Function

The `makeRequest` function is defined to simulate making a network request. It returns a Promise that either resolves with the message "target is reached" or rejects with the message "target not reached," depending on the `location` parameter.

### processRequest Function

The `processRequest` function is also defined as a Promise, simulating processing the response received from the `makeRequest` function. It resolves with a message that includes the `response` parameter.

## Async/Await

### doWork Function

The `doWork` function is an example of using Async/Await to perform asynchronous operations sequentially. It combines the `makeRequest` and `processRequest` functions to demonstrate how to handle Promises using the more readable and synchronous-looking Async/Await syntax.
