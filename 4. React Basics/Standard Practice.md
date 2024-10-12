# Standard Practice in React

## Good Practices
- Always Destructure the props to make the UI code more readable and manageable.
- To combine array elements to show as atomic value
```
arrElem.join(", ")
```
- Use Optional Chaining, while data might come as `NULL` or `undefined`
```
  const { name, age } = data?.value;
```
- Implement dynamic component listing using JS map() function to loop over an array instead of repeating a same component again and again. Pass the data to component once instead of hard coding the same component with different prop values.
```
restroList = [];     // Assume there is resaurant list with name, and rating
// We need to render card based on Restaurant list
{restroList.map((restaurant) => (
  <RestaurantCard name={restaurant.name} rating={restaurant.rating} />
))}
```
- `Unique key id while using map` i.e. Each item in the list must be uniquely identified. The reason is, when we have component at same level and if a new component comes on first without ID, DOM is going to re-render all the components again at that level. As DOM can't identify where the place the new component.

But if we give each component to unique ID then react knows where to put that component according to the ID. It is a `good optimization and performance thing`.

**Note:** Neven use index as keys in map. It is not recommended.
```
const Body = () => {
  return(
    <div>
       {resList.map((restaurant) => (
         <RestaurantCard key={restaurant.id} resData={restaurant} /
       ))}
    </div>
  )
}
```

## Config Driven UI
- It is a user Interface that is built and configured using a declaration configuration file or data structure, rather than being hardcoded.
- Config is the data coming from the api which keeps on changing according to different factors like user, location, etc.
- This is the most important concepts as it is used by most of the top products.

## React Reconcilation
- `Reconciliation` in React refers to the process by which React updates the DOM (Document Object Model) to match the most recent state of the application.
- React uses a virtual representation of the DOM called the "Virtual DOM" to efficiently update the actual DOM.
- Reconciliation is the algorithmic process of comparing the previous virtual DOM with the current one and making the necessary changes to bring the actual DOM in sync with the application's state.
- React uses a diffing algorithm to identify the differences (or "diffs") between the new and previous virtual trees.
- Reconciliation is a critical aspect of React's performance optimization.

## React Fiber
- React Fiber, often referred to simply as Fiber is an internal and ongoing reimplementation of the React reconciliation algorithm.
- It was introduced by the React team to address some limitations and performance bottlenecks in the original reconciliation process.
- The primary goals of React Fiber are: Improved Rendering - Fiber introduces a new, more efficient algorithm for rendering components. It allows React to break down rendering work into smaller units and prioritize the work more effectively.
