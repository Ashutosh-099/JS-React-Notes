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
