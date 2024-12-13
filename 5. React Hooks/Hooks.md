# React Hooks
- Hooks in react are super powerful functions.
- In behind, it's a regular JS functions, however it becomes powerful when used within React, as it's provided to us by React itself.
- These pre-built logic functions hacve underlying logic developed by React developers.
- It comes with React package, Therefore, we can import these hooks from react package only.

## Frequently used hooks:
### useState()
- useState is a function that provides a super powerful variable.
- These super powerful variable helps us to instantly update the DOM and render the latest data in front of user, which is core feature of React.
- useState() variables are called `State variable`, which depicts the state of each component.
- Therefore, we can create state variable for each component.
- Syntax of useState is `const [variableName, setVariableName] = useState(<INITIAL_VALUE>);`. Import useState function from react package first, `import { useState } from 'react';`
- In the above syntax, useState is function which accepts `INITIAL_VALUE` as an argument, this value is a initial value of the variable which useState returns.
- useState() returns two things, variable and function that update variable value.
- We cannot update variable directly like a normal JS variable, we need to use this set function, because set function triggers the re-render event which update the DOM with latest state value.
- E.g.: We need to store restaurant data list in state variable.
```
import { useState } from 'react';

const [resList, setResList] = useState([]);  // resList is state variable with an initial value as empty array
```
- **Naming convention of set function**: We can put any name of setState function but Industrial method is to use set as prefix and variable name and the function name would be in `camelCase`. Hence, if variable name is `list`, function name would be `setList`.
-  The crucial point about State variables is that whenever they update, React triggers a reconciliation cycle and re-renders the component.
-  This means that as soon as the data layer changes, React promptly updates the UI layer. The data layer is always kept in sync with the UI layer.
-  To achieve this rapid operation, React employs a `reconciliation algorithm`, also known as the `diffing algorithm` or `React-Fibre`.
-  One interesting aspect is how we manage to modify a `const` variable (assigning const to state variable), which traditionally isn't possible. However, because react re-render the entire component when a state variable changes, it essentially creates a new instance of state variable with the updated value. So, in essence, we are not updating state variable instead, React creates a new one with the modified value each time the state changes. This is one of the beauty of React.


### useEffect()
- This hook enables you to perform side effects in your components, such as data fetching, subscriptions, or manually changing the DOM.
- It's the functional equivalent of the `componentDidMount()`, `componentDidUpdate()` and `componentWillUnMount()` lifecycle methods in class components.
- Import useEffect function from react package like `import { useEffect } from 'react';`
- Syntax of useEffect is `useEffect(() => {}, [])`. useEffect is a function which not returns anything, it accepts two arguments which is callback function and dependency array.
- Most normal usage of useEffect is having fetch api and update the state variable of the component.
- Example:
```
import React, { useState, useEffect } from 'react';

function DataFetching = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    // Fetch data and update the state variable
    const response = await fetch("API_URL");
    const data = response.json();
    setData(data);
  }, []);  // Dependency array is empty, it means useEffect will call once after the render method.

  return(
    <p>{data}</p>
  );
}
```

#### When will callback function get called inside the useEffect():
- Callback function is getting called after the whole component get rendered.
- If we have to do something after the render cycle completes we can pass it inside the useEffect, this is the actual use case of useEffect.

### useMemo()
- useMemo that lets you **cache the results** of calculation **between re-renders**.
- Syntax: `const value = useMemo(CalculatedValue, [Dependencies])`
  - CalculatedValue is a funcion which returns some value, and it cache the value returned by the function. Let's say, I'm passing prime number calculation function as Callback in useMemo, which returns Nth prime number.
  - Dependencies is variables based on which function is dependent on, it's like cache the result but only change if there is any change in dependent variable.
- Use cases:
  - **Expensive calculations**: Expensive calculation which takes times to do some calculation and affects the React rendering or UI performance, like if we do Nth prime number calculation based on user input, it will take time for larger number(7 digit nth no.) that affects browser performance and if we are doing other operation like state change or props change, then also it will do prime no calculation for same no, even the number is not change, At this place, we can use useMemo hooks to improve the performance.
  - **Skipping re-rendering of components**: Similar method as above, passing large props may affect the child component, so it good to memoize the child component if props is same. We can do that using **memo()** function. Note: useMemo and memo is different.
 

### useCallback()
- React Hook that lets you **cache a function** definition **between re-renders**.
- Syntax: `const cachedFn = useCallback(fn, dependencies)`
  - fn: The function value that you want to cache. React will return (not call!) your function back to you during the initial render. On next renders, React will give you the same function again if the dependencies have not changed since the last render.
  - dependencies: The list of all reactive values referenced inside of the fn code.
- Usecases:
  1. Skipping re-rendering of component
  2. Updating state from memoized callback
- When to use useCallback():
  1. The function is passed as a prop to a React.memo-wrapped child component.
  2. The function is a dependency of useEffect, useMemo, or another hook, and its stability is important.
  3. The function performs an expensive computation that you want to avoid re-creating unnecessarily.
- When NOT to use useCallback():
  - Don’t use useCallback for every function—it adds complexity and overhead (React needs to remember the function reference). If a function isn’t causing re-renders or isn’t used as a dependency, there’s no benefit to caching it.


### useRef()
- React hook that let's you reference a value **that's not needed for rendering**.
- Syntax: `const ref = useRef(initialValue)`
- useRef persist the value even after component re-render, this is what makes useRef makes special.
- Difference between `useRef vs primitive variable (let, const, var) vs State variables`?
  - **State variable:** When the state value updates it re-renders the components and its child and also persist the value after re-render.
  - **Primitive variable:** When the primitive variable changes, it will not re-renders the component also it will set to initial value after re-render.
  - **Ref variable:** When the ref variable changes, it will not re-render the component but will persist the value even after re-render.
