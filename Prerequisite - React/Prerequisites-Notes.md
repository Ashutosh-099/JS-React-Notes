# Prerequisite Notes of React

## Q What is `DOM`?
A: Document Object Model(DOM) is a programming interface that represents the structure of HTML or XML document as tree structure.

## React:
React is known as JavaScript Library developed by `Facebook`.
### Why is it called React?
- because of its core principle, which is to efficiently react to changes in a component's state and efficiently update the user interface (UI) accordingly.

## Library v/s Framework:
`Library` is a collection of pre-written code snippets that can be used & reused to perform certain task. `E.g. React`. We can include library in an existing application to achieve certain goal which leads to faster development.
`Framework` provide basic foundation or structure for website or an application. `E.g. Angular`. We cannot use Framework in an exisiting application to achieve certain goal.

### Common in Library and Framework:
Only similarity between Library and Framework is they both are written by third party developers to solve or achieve common problems and to optimize applications.

### Difference b/w Library and Framework:
Key difference is `Inversion of Control`. In library, developer has control of writing library function(even able to customize) & when to call or leverage the library functions. Framework tells developer where code needs to provided, which bind developer to follow the framework rules.

## ReactDOM:
- ReactDOM is a package that provide integration between React and DOM. It serves that glue that allows React component to interact with the browser's DOM.
- ReactDOM is specifically designed for **web applications**, as it handles rendering React components to the HTML DOM.
- It provides methods like `ReactDOM.render()` to attach a React component to a specific HTML element in the DOM.

## How to add React & ReactDOM in an application?
- One of the great benefit of React is, we can add react in an existing application also to build small feature into it.
- We can add react and reactDOM by using CDN packages, Just add CDN links in the HTML file(index.html) and we can ready to use React & ReactDOM in our web app.
- Links: <br/>`<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>`<br/>`<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>`
- **Note:**
- - We have different CDN links for development and production, above mentioned links are development links. Production links contains packages which is optimized, fast and smaller than development packages.
- - This is one way of adding React in an application, we know about `npx create-react-app <application_name>` which helps to create react boilerplate in it.

## Why React & ReactDOM are different packages?
- React is not only used to create web application, it also used in mobile application or in other platforms.
- Hence, React is a core but to diffent it for web application, we have ReactDOM.

## How to create element using React?
- Once we add React & ReactDOM package in the application, we can leverage React functions to create elements which is `React.createElement()`
- Syntax: `React.createElement(<ELEMENT_NAME>, <ATTRIBUTES>, <CHILDREN>);`
- ELEMENT_NAME: In the first argument, you need to provide element/tag name in a string. E.g. "h1", "div"
- ATTRIBUTES: In the second argument, all the attributes that we want to define for particular element are defined in second arguments. E.g. {id: "parent", className: "parent-class"}
- CHILDREN: It represents the content or element nested inside a component. This allows to pass element or other component as child.
- **E.g.** <br/>
  1. To create Heading element:<br/>
  `React.createElement("h1", {id: "heading"}, "Hello World!");`
  2. To create nested component(Create heading in div element): <br/>
  `React.createElement("div", {id: "parent"}, React.createElement("h1", {id: "heading"}, "Hello world inside parent!"));`
- In second example, we created a component as container first called 'parent' and then created another component heading as child of parent, which is same as:
  ```
  <div id="parent">
    <h1> Hello world inside parent</h1>
  </div>
  ```
- **Note:** It is not sufficient to only create element to display into website, we need to add this element into DOM, for that we need ReactDOM package to achieve it.
## React.createElement():
- As we see, createElement of React helps to create element but it returns the element as `Object`.
- To convert this object into HTML element, we need ReactDOM render function.

## How to render React element:
- So ReactDOM has function called render() which takes element object as an argument and convert into HTML element.
- But before render, it requires root element under which it will render the component. Basically means, we need to link our HTML page with our ReactDOM.
- For that, we have createRoot() which helps to link existing HTML element with ReactDOM.
- **E.g.:** Assume you have `<div>` tag called `root` as `id` in `index.html`.
```
const heading = React.createElement("h1", {id: "heading"}, "Hello World!");  // Heading component that will display in web browser
const root = ReactDOM.createRoot(document.getElementById("root"));  // Link ReactDOM with root element of HTML file. This act as a root element for us now.
root.render(heading);  // Render heading after linking root
```
- **Note**: React will overwrite everything inside 'root' & replaces with whatever given inside render().
- Above code depicts the complexity of writing React, this is impossible to understand or even manageable we have multiple nested elements also component which is general in web application. To overcome such issues **JSX** is introduced, which helps to implement react like a HTML syntax.
  
### **Appendix**:
- **`Emmet`** is a powerful toolkit for web developers and designers that greatly enhances their HTML and CSS workflow. It helps in writing code more quickly and efficiently by providing shortcuts for common HTML and CSS patterns.
- **`CDN`**: Content Delivery Network. It is network of distributed servers located in various data center around the world. The primary purpose of a CDN is to deliver web content, such as images, videos, scripts, stylesheets, and other static or dynamic resources, to users more efficiently and with higher performance.
- **`Cross origin(CORS)`**: The crossorigin attribute in the script tag enables CrossOrigin Resource Sharing (CORS) for loading external JavaScript files from different origin than the hosting web page.
