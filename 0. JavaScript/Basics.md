# JavaScript Basics
## Diff b/w JS expression and JS statement
- `JavaScript Expression` - An expression is a piece of code that produces a value. It can be a single value, a variable, a function call, or a combination of values and operators that result in a value. Expressions can be used wherever a value is expected, such as in assignments, function arguments, and within other expressions.

  Example:
  ```
    5 + 3       // Produces the value 8
    "Hello"     // Produces the string value "Hello"
    myVariable  // Produces the value stored in the variable myVariable
    func(4)     // Calls a function and produces its return value
  ```
- `JavaScript Statement` - A statement is a line of code that performs an action. It doesn't produce a value like an expression. Statements are often used to control the flow of a program, define functions, declare variables, and perform other tasks. Statements can include loops, conditionals, function declarations, and variable assignments.

  Example:
  ```
    if (x > 10) {
      // Conditional statement
      // Executes a block of code if x is greater than 10
    }
    
    for (let i = 0; i < 5; i++) {
      // Loop statement
      // Repeats a block of code five times
    }
    
    function greet(name) {
      // Function declaration statement
      console.log("Hello, " + name);
    }
    
    let y = 42;  // Variable assignment statement
  ```
