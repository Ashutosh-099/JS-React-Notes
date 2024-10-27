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

## Lifecycle and Order of Lifecyce in Class component:
![image](https://github.com/user-attachments/assets/d768cb6d-91b1-4f58-9be6-1f6445776916)

1. **Constructor** - The constructor method is the first to be called when a component is created. It's where we typically initialize the component's state and bind event handlers.
2. **Render** - The render method is responsible for rendering the component's UI. It must return a React element (typically JSX) representing the component's structure.
3. **ComponentDidMount** - This method is called immediately after the component is inserted into the DOM. It's often used for making AJAX requests, setting up subscriptions, or other one-time initializations.
4. **ComponentDidUpdate** - This method is called after the component has been updated (re-rendered) due to changes in state or props. It's often used for side effects, like updating the DOM in response to state or prop changes.
5. **ComponentWillUnmount** - This method is called just before the component is removed from the DOM. It's used to clean up resources or perform any necessary cleanup.

- React lifecycle depicts how React work with components and its related function. As we can see, as soon as component instance is created, constructor is called, then the render function and then the phase of lifecycle starts.
- There are three main phases of class component:
  1. Mount phase
  2. Update phase
  3. Unmount phase
 
- In the diagram, it is mentioned that React first completes the render phase and React known for it's core concepts i.e. quickly update the DOM with real time data. So it is doing it, let's understand this with an example.
```
// App.jsx
class App extends React.Component {
  constructor() {
    super();
    console.log("App Constructor called");
  }

  componentDidMount() {
    console.log("App mount function called");
  }

  render() {
    console.log("App render called");
    return(
      <About />
    );
  }
}

// About.jsx
class About extends React.Component {
  constructor() {
    super();
    console.log("About Constructor called");
  }

  componentDidMount() {
    console.log("About mount function called");
  }

  render() {
    console.log("About render called");
    return(
      <h1>Hello </h1>
    );
  }
}
```
- In the above code, we put console.log in each function, we have child component 'About', which is called in App.jsx, so we can understand in which order React will execute the functions.
```
Output:
App Constructor called
App render called
// It sees there is a another component called in App
// It executes About.jsx then
About Constructor called
About render called
About mount function called

App mount function called
```
- So the output would be it will first render the parent and then execute the child component in the order and then called "Commit phase" of the parent component.
- But lets have an instance, where we have multiple child component inside App.jsx, how it will behave?
```
// App.jsx
class App extends React.Component {
  constructor() {
    super();
    console.log("App Constructor called");
  }

  componentDidMount() {
    console.log("App mount function called");
  }

  render() {
    console.log("App render called");
    return(
      <About />    // About 1
      <About />    // About 2
    );
  }
}

// About.jsx
class About extends React.Component {
  constructor() {
    super();
    console.log("About Constructor called");
  }

  componentDidMount() {
    console.log("About mount function called");
  }

  render() {
    console.log("About render called");
    return(
      <h1>Hello </h1>
    );
  }
}
```
- In the above example, we called About component two times in App function, now what will be the output.
```
Output:
App Constructor called
App render called
// It sees there is a another component called in App
// It executes About.jsx then
About Constructor called    // About 1
About render called         // About 1

// It optimize the called second component then
About Constructor called    // About 2
About render called         // About 2

About mount function called  // About 1
About mount function called  // About 2

App mount function called
```
- React is so optimized and fast that it first completes the render side of each component, irrespective of how much components are there and then perform the "Commit phase", that is why, react is so fast.
- For reference in the above diagram, we can see, React will first complete the Render phase and then Commit phase.
