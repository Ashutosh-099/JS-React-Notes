# React Lifecycle:
## Functional component Lifecycle method:
- The react component lifecycle refers to the series of phases that a react component goes through from its creation and rendering to updates and eventual removal from the DOM.
- While the traditional lifecycle methods are associated with class components, the introduction of hooks are provided a more versatile way to manage component behavious in functional components.
- There are 3 phases in the React component life cycle:
  1. Mounting phase
  2. Updating phase
  3. Unmounting phase
 
### Mounting phase:
- During the mounting phase, a functional component is being created and added to the DOM. In this phase, you typically initialize state and perform any setup that's needed when the component is first rendered.
- **useState**: The useState hook allows you to add state to your functional components. It replaces the need for a constructor and this.state in class components.
- You can initialize state and retrieve the current value and function to update it.
- **useEffect**: useEffect hook with an empty dependency array simulates the **componentDidMount** lifecycle method. It runs the provided function after the component is first rendered. This is a good place to perform data fetching or initial setup.
```
useEffect(() => {
  // Call back function
}, []); 
```

### Updating phase:
- In the updating phase, the functional component is re-rendered due to changes in its props or state.
- You can use the useEffect hook without and empty dependency array to achieve behaviour similar to **componentDidUpdate**.
- **useEffect**: By using the useEffect hook without a dependency array, you can simulate the behaviour of componentDidUpdate. The provided function will run on every render.
```
useEffect(() => {
  // Call back function
}); // without dependency array
```
- If you want to run code whenever specific state or props change (like componentDidUpdate), include those dependencies in the dependency array.
```
useEffect(() => {
  // Call back function of updation of state variable
}, [<STATE_VARIABLE>])
```

### Unmounting phase:
- In the unmounting phase, the functional component is being removed from the DOM.
- The cleanup function in the useEffect hook simulates the behaviour of **componentWillUnmount**().
- **useEffect**: By returing a function from the useEffect hook, you can specify cleanup operations to be performed when the component is unmounted.
```
useEffect(() => {
  // Call back function
  return() => {
    console.log("Component will unmount");
  }
}, []);  // Empty dependency array ensures this cleanup runup only once.
```
