# React Basics

## React Props
- Short form of properties.
- To dynamically send data to a component we use props.
- Passing a prop to a component is like passing an argument to a function.
- It is standard way to follow `camelCase` for props naming convention.
```
<Heading name="Ashutosh" age="24" />      name & age is properties that is passing to Heading component
```
### Receiving props in the component
- Props will be wrapped and send in JavaScript object.
- In the above example, it will be like
```
props: {
  name: "Ashutosh",
  age: "24"
}
```
- As it is JavaScript object, we can access props and it's properties same how we write JS code in between JSX i.e. `{}`, Here how we can read props in the component
```
const Heading = (props) => {
  return (
    <h1>Name: {props.name}<h1>
    <h2>Age: {props.age}<h2>
  );
}
```
- Another way is to `destructure the props` just like destructuring the object in JS.
```
const Heading = (props) => {
  const { name, age } = props
  return (
    <h1>Name: {name}</h1>
    <h2>Age: {age}</h2>
  );
}
```
OR
```
const Heading = ({ name, age }) => {
  return (
    <h1>Name: {name}</h1>
    <h2>Age: {age}</h2>
  );
}
```

## <React.Fragment></React.Fragment>
- `React.Fragment` are used to define fragments. Fragments are way to group multiple children without adding any extra DOM element.
- They are often used when we need to return multiple elements from a component's render method but don't want to wrap them in a container element like <div>.
- Another way to define fragment is `<></>`.
- The reason we use fragment is it helps to make our code cleaner and more semantically meaningful.
```
import React from 'react';

function MyComponent() {
  return(
    <React.Fragment>
      <h1> Hello World </h1>
      <h2> Hello </h2>
    </React.Fragment>
  );
}
```

## Understanding of Import and Export in React
- There are two different types of export and import in React.
  1. Default import/export
  2. Named import/export
- We need to import or export the components to use them in other components or main components, also to link the components with each other. Otherwise it will not render the components on web.

### Default import/export
- Syntax: `export default <COMPONENT_NAME>`
- We use `export` and `default` keyword with the component name at the end of component file.
- E.g.
```
const Header = () => {
  return(
    <h1>Heaader</h1>
  );
}

export default Header;
{/* export default Header.jsx */} // Another way of export
```
- To import such component, we can use `import Header from './components/Header';`

### Named import/export:
- 
