# Functions in JS

## Function statement
- a.k.a `Function declaration`
  ```
  function a() {
    // ......
  }
  ```

## Function expression
- Function used as values
```
var a = function () {
  // .....
}
```

## Function statement v/s Function expression
- Hoisting i.e. we can call function anywhere (even before function declaration) but if we assign function to variable and we call it before declaration then its return error.

## Anonymous function
- Function which do not have it's own identity.
```
var anonymousFunc = function () {
  // ....
}
```
- Here function() is anonymous which do not have it's own identity, it identifies by using `anonymousFunc` variable.
- We cannot create anonymous function using function statement, only create using function expression.
