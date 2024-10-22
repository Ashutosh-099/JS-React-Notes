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
- There is a catch, we cannot export multiple items simultaneously using this method.

### Named import/export:
- We used this method when there is more than one function or any other thing need to export from single file.
- Usually it is used in `common.js` or in `utils` section where we defined, mock data, helper functions etc.
- Just write the `export` keyword before the variable name.
- E.g.: `export const mockData = {};`
- To import this, we can use `import {mockData} from "../../utils.js`;
- We can use both default and named export/import on same component, it works for both way.
- There is one more method of import/export which is Wildcard or Namespace Exports (* as).
- Wildcard or Namespace exports allows you to export all named exports from a module under a single namespace or object.
- To create a wildcard export, we can use the export * syntax.
- E.g.:
```
export const funcA = () => {///}
export const funcB = () => {///}
```
- To import all the named exports, we can use
```
import * as utils from './util.js';

// Use it as utils.funcA() or utils.funcB()
```

## Where should we keep non-components files?
- Non components files which works as background file, it has some logic which is used in component to achieve some task.
- Such non-component works are API calls, helper function, mock data, constant values, URLs, logo, images etc.
- We should not these logic into component files, it will make component file bigger, and confusing.
- To keep the clean code, we should put this logics into seperate files.
- Therefore, we can create `utils` folder, and inside it, we can store all these behind the logic code and hardcoded code.

## How to render same component multiple times in a component?
- Let's say we need to render restaurants in a card.
- For that we can create component template which shows restaurant data and use this same component for each restaurants.
- But there are 100+ restaurants that we need to render.
- To solve this, we can use `map()` function, it's an normal JavaScript function.
- E.g.: Let's say we have restaurants details in 'resList'
```
{
  resList.map(restaurant => (
    <Card restroDetails={restaurant} />
  ));
}
```

## How can we display filtered data dynamically on UI?
- To continue the above example, we have restaurants having rating details.
- Now we need to render only those restaurant which have rating 4+, which means we need to filter the data, while rendering.
- To filter the data, we can use `filter()` function.
- E.g.
```
{const filteredList = resList.filter(restaurant => {
  return restaurant.rating > 4;
})}
```

## config.js & it's importance:
- config.js files are text files that hold essential program information.
- They are structured for user configuartion. Many programs such as office suits and web browsers, rely on menu-driven configurations.
- These files typically follow a simple structure, often using key-value pairs for settings.
- For instance, if an application only needs to store a user's preferred name, the config file might look like this:
```
NAME='Ashutosh'
SURNAME='Agarwal'
```
- However, most application require multiple settings, so config files often contain key-value pairs for various options.
