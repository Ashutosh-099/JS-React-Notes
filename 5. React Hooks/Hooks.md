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



