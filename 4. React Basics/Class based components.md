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

### Why do we use componentDidMount?
The  componentDidMount  lifecycle method in React class-based components is used for a specific purpose: it is called immediately after a component is inserted into the DOM (Document Object Model). This makes it a crucial point in the component's lifecycle and provides a valuable opportunity to perform various tasks that require interaction with the DOM or external data sources. Here are some common use cases for componentDidMount:
1. **Fetching Data** - It's often used to make asynchronous requests to fetch data from APIs or external sources. This is a common scenario for components that need to display dynamic content.
2. **DOM Manipulation** - When we need to interact with the DOM directly, such as selecting elements, setting attributes, or applying third-party libraries that require DOM elements to be present, we can safely do so in componentDidMount. This is because the component is guaranteed to be in the DOM at this point.

- By using  componentDidMount , we can ensure that the data fetching or other side effects happen after the initial render and that our component interacts with the DOM or external data sources at the right time in the component's lifecycle.

### Why do we use componentWillUnmount ?
- The  componentWillUnmount  lifecycle method in React class-based components is used to perform cleanup and teardown tasks just before a component is removed from the DOM. It's a crucial part of managing resources and subscriptions to prevent memory leaks and ensure that the component's behavior is properly cleaned up. Here's why and when we should use componentWillUnmount:
  1. **Cleanup Resources** - If your component has allocated any resources, such as event listeners, subscriptions, timers, or manual DOM manipulations, it's essential to release these resources to prevent memory leaks. componentWillUnmount is the appropriate place to do this.
  2. **Cancel Pending Requests** - If your component has initiated any asynchronous requests, such as AJAX calls or timers, you should cancel or clean them up to avoid unexpected behavior after the component is unmounted.
- Example:
```
class MyComponent extends React.Component {
  constructor() {
    super();
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
     // Add a window resize event listener when the component is mounted
     window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
     // Remove the window resize event listener when the component is unmounted
     window.removeEventListener('resize', this.handleResize);
  }

  handleResize(event) {
     // Handle the resize event
     console.log('Window resized:', event);
   }

  render() {
     return <div>My Component</div>;
  }
}
```

- In this example, the component adds a resize event listener to the window when it's mounted, and it removes that listener in the componentWillUnmount method.
- This ensures that the event listener is properly cleaned up when the component is unmounted, preventing memory leaks or unexpected behavior.
- By using componentWillUnmount, we can ensure that any cleanup tasks are executed reliably when the component is no longer needed, helping to maintain the integrity of our application and avoiding potential issues.


### Why can't we have the callback function of useEffect async ?
-  In React, the  useEffect  hook is designed to handle side effects in functional components. It's a powerful and flexible tool for managing asynchronous operations, such as data fetching, API calls, and more. However, useEffect itself cannot directly accept an async callback function. This is because useEffect expects its callback function to return either nothing (i.e., undefined) or a cleanup function, and it doesn't work well with Promises returned from async functions. There are a few reasons for this:
 1. **Return Value Expectation** - The primary purpose of the useEffect callback function is to handle side effects and perform cleanup. React expects us to either return nothing (i.e., undefined) from the callback or return a cleanup function. An async function returns a Promise, and it doesn't fit well with this expected behavior.
 2. **Execution Order and Timing** - With async functions, we might not have fine-grained control over the execution order of the asynchronous code and the cleanup code. React relies on the returned cleanup function to handle cleanup when the component is unmounted or when the dependencies specified in the useEffect dependency array change. If you return a Promise, React doesn't know when or how to handle cleanup.
