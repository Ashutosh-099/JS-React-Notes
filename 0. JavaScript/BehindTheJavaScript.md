# Behind the JavaScript
## How JavaScript works:
`Everything in JS happens inside an execution context`. JavaScript is synchronous single threaded language.

## Execution Context:
- It is a box or container in which whole JavaScript code is executed.
- This context is divided into two parts:
  1. **Memory component/Variable envrionment**: Store all the variables with it's vaue in key-value pair and also stores function.
  2. **Code component/Thread of execution**: Store JS code which executes one line at a time.
- When we run JavaScript program, an execution context created.
- When execution context created, it will also create memory phase and then code phase.
- In memory phase, at start, the default value of each variable is `undefined`. For function, it stores whole code of it.
- Value of each variable is assign when code phase executed line by line.
- When a function is invoked/called, it will create new execution context for the function.
- These multiple execution context are executing one by one, so to manage those, `Call stack` is there, which maintains the order of execution contexts.
