# Redux in React
`Please Note`: First and Foremost, **REDUX IS NOT MANDATORY** in your application. Redux is an `external library` which helps to manage our data layer. Everything we do using redux, can be do without Redux. Also, **REACT AND REDUX ARE TWO DIFFERENT LIBRARIES**.
- Alternative of Redux library which is `Zustand`.
- Redux is an open JavaScript library for managing and centralizing application state.
- It not only React library, it is populary used with React, but it can used for other frameworks as well.
- Features of Redux is: `Predictable`, `Centralized`, `Debuggable` and `Flexible`.
- There are some libraries from Redux Team: `React-Redux` and `Redux Toolkit`.

## useContext v/s useRedux
useContext  and  Redux  are both tools used for state management in React applications, but they serve different purposes and have different use cases. The key differences between them:

`useContext`
1. **Scope**:  useContext  is part of the React core and is used for managing state within the component tree. It provides a way to access the value of a context directly within a component and its descendants. It's typically used for smaller-scale state management needs within a component or a small section of the application.
2. **Complexity**: useContext is simpler and more lightweight compared to Redux. It's a part of the React library and doesn't introduce additional concepts or boilerplate code.
3. **Component Coupling**: State managed with useContext is local to the component or a subtree of components where the context is provided. This can lead to more isolated and less globally shared state.
4. **Integration**: It's seamlessly integrated into React and works well with the component lifecycle. You can create and consume contexts within functional components using the useContext hook.

`Redux`
1. **Scope**: Redux is a state management library that provides a global state container for the entire application. It allows you to manage the application state in a predictable and centralized manner.
2. **Complexity**: Redux introduces a set of concepts, such as actions, reducers, and a store. This can make it more complex compared to using useContext for local state management. However, it becomes valuable in larger and more complex applications.
3. **Component Coupling**: State managed with Redux is global, which means any component can connect to and access the state. This can be advantageous for sharing state across different parts of the application.
4. **Integration**: Redux needs to be integrated separately into a React application. You need to create actions, reducers, and a store. Components interact with the global state using the connect function or hooks like useSelector and useDispatch.

- Both the concepts have its own advantages and disadvantages, and its own criteria:
- `Use useContext When`: We have smaller-scale state management needs within a component or a local subtree. We want a lightweight solution without introducing additional complexity. Our state doesn't need to be shared extensively across different parts of the application.
- `Use Redux When`: We have a complex application with a large state that needs to be shared across many components. We want a predictable state management pattern with a unidirectional data flow. We need middleware for advanced features like asynchronous actions.
- Hence, Choose  useContext for simpler and local state management within components or small sections of our application . Choose  Redux for more complex applications where we need a global state that can be easily shared across different components.

## What is Redux?
- Redux helps you manage "global" state - state that is needed across many parts of your application.
- The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur.

## State Management
- Here is one small example
```
function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}
```
It is a self-contained app with the following parts:
- The state, the source of truth that drives our app
- The view, a declarative description of the UI based on the current state
- The actions, the events that occur in the app based on user input, and trigger updates in the state

This is a small example of "one-way data flow":
- State describes the condition of the app at a specific point in time
- The UI is rendered based on that state
- When something happens (such as a user clicking a button), the state is updated based on what occurred
- The UI re-renders based on the new state

However, the simplicity can break down when we have multiple components that need to share and use the same state, especially if those components are located in different parts of the application. Sometimes this can be solved by "lifting state up" to parent components, but that doesn't always help.

One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree. With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!

By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability.

This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.
## Redux Toolkit
- Package which is intended to be the standard way to write Redux logic.
- It was originally create to help address three common concerns about Redux:
  1. Configuiting a redux store is too complicated.
  2. Need to add lot of packages to get Redux to do anything useful.
  3. Redux requires too much boilerplate code.
  
