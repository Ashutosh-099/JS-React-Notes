# Class based component
- Class based component method is now an older way of creating component.
- But it is necessary to clear the concepts because some organisation having project going from years may used class based components.

## How to create Class based component
```
// App.jsx
class App extends React.Component {
  render(){
    return(
      <h1>Hello world</h1>;
    )
  }
}

export default App;
```
- Class based component uses `extends` keyword to use React component feature to make itself as component.
- In the class, `render()` is a function which return JSX.
- We can call class component same as functional component, like this  `<App />`, we can call class component, it would be like we are creating instance of a class.

## Props & state in class component:
- React component are played along with props and state, now in functional component, we can send props in argument and in component, we got it as paramater.
- But a class cannot take any argument, so in class component we used `constructor` to accept props.
- Constructor is a function which instantly called when an instance of class is created.
- So it is better to defined props and state both in construtor, and that we followed in React.
```
// About.jsx

class About extends React.Component {
  constructor(props) {      // accepts props using constructor
    super(props)            // Important line, why?
  }
  
  render() {
    return(
      <h1>Hello world</h1>
    )
  }
}
```
- After defining props, now the question arises how to use this props in our component.
- So in Class component, we use `this` keyword to use props.
```
class About extends React.Component {
  constructor(props) { 
    super(props);
  }
  
  render() {
    return(
      <h1>{this.props.data}</h1>    // Accessing props value
    )
  }
}
```
- We can also destructure the props, if we have more props sent to class component.
```
class About extends React.Component {
  constructor(props) { 
    super(props);
  }
  
  render() {
    const { data } = this.props;
    return(
      <h1>{data}</h1>    // Accessing props value
    )
  }
}
```

### State
- In class component, state is an object and all the properties are state variable.
```
class About extends React.Component {
  constructor() { 
    super();
    this.state = {
      name: "Sherlock Holmes",
      work: "Consultive Detective"
    };
  }
  
  render() {
    const { name, work } = this.state;      // This is optional, we can directly use state variable
    return(
      <h1>{name}</h1>   // Alternative, it we do not want to destructure{this.state.name}
      <h2>{work}</h2>  // Alternative, it we do not want to destructure{this.state.work}
    )
  }
}
```
- In class component, we can update using `this.setState()`, this function is provided by React.Component class.
```
class About extends React.Component {
  constructor() { 
    super();
    this.state = {
      counter: 0
    };
  }

  onButtonClick = () => {
    this.setState({
      counter: this.state.counter + 1    // it will update counter by 1
    });
  }
  render() {
    return(
      <h1>{this.state.counter}</h1>    // Display counter
      <button onClick={onButtonClick}>Increase</button>    // Increment counter by 1 on click
    )
  }
}
```
- If we have multiple state variable, and only few we need to update, we just need to mention the variable that we need to update inside this.setState().

### Why do we use super(props) in constructor?
- In JavaScript, when you define a class that extends another class (inherits from a parent class), we often use the super() method with props as an argument in the constructor of the child class. This is commonly seen in React when you create class-based components. The super(props) call is used for the following reasons:
  1. **Access to Parent Class's Constructor** - When a child class extends a parent class, the child class can have its constructor. However, if the child class has a constructor, it must call super(props) as the first statement in its constructor. This is because super(props) is used to invoke the constructor of the parent class, ensuring that the parent class's initialization is performed before the child class's constructor code is executed. It is essential to maintain the inheritance chain correctly.
  2. **Passing Props to the Parent Constructor** - By passing props to super(props), we ensure that the props object is correctly passed to the parent class's constructor. This is important because the parent class may need to set up its properties or handle the props somehow. By calling super(props), we make the props available for the parent class's constructor to work with.

- In modern JavaScript and React, it's also common to define a constructor without explicitly calling super(props), and it will be automatically called for us. However, if we define a constructor in a child class, and the parent class has its constructor, it's a good practice to include super(props) to ensure that the parent class's constructor is invoked correctly.

