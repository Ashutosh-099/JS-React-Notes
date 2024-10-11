# JSX in React
- As we see earlier, to create components or element, we are using React.createComponent(), which is complex and difficult to understand and maintain. Therefore it is not `developer-friendly`.
- To overcome the above complexity, `JSX` is introduced by Facebook developer.
- JSX makes developer life easy as we no longer have to write our code using React.createElement().

## JSX:
- JSX is HTML like or XML like syntax.
- JSX stands for `JavaScript XML`. It's syntax extension for JavaScript.
- JSX is not a part of React.
- It is also not HTML inside JavaScript. As JavaScript engine cannot understand JSX as it only understand ECMAScript.

  Here's an example of JSX:
  ```
  const element = <h1>Hello World!</h1>
  ```
  In above code, it looks like an HTML but it is JSX. JSX element also return object as value.<br/>
  Therefore, `JSX -> React.createElement -> React Element JavaScript object -> HTML Element(render)`

## Is JSX a valid JavaScript?
- Answer is yes or no. JSX is not a valid Javascript syntax as it’s not pure HTML or pure JavaScript for a browser to understand.
- JS does not have built-in JSX. The JS engine does not understand JSX because the JS engine understands ECMAScript or ES6+ code.

## How browser understand JSX:
- This is because of Parcel because “Parcel is a Beast”.
- Before the code gets to JS Engine it is sent to Parcel and Transpiled there. Then after transpilation, the browser gets the code that it can understand.
- ### Transpilation:
    Converting the code in such a format that the browsers can understand.
- Parcel is like a manager who gives the responsibility of transpilation to a package called Babel.
- Babel is a package that is a compiler/transpiler of JavaScript that is already present inside ‘node-modules’.
-  It takes JSX and converts it into the code that browsers understand, as soon as we write it and save the file.

## Difference b/w HTML and JSX:
- JSX is not HTML. It’s HTML-like syntax.
- HTML uses ‘class’ property whereas JSX uses ‘className’ property.
- HTML can use hypens in property names whereas JSX uses camelCase syntax.

## Advatanges of JSX:
- **Sanitizes the data**: If someone gets access to your JS code and sends some malicious data which will then get displayed on the screen, that attack is called `cross-site scripting`. It can read cookies, local storage, session storage, get cookies, get info about your device, and read data. JSx take care of your data. If some API passes some malicious data JSX will escape it. It prevents cross-site scripting and sanitizes the data before rendering.
- **Makes code readable**: JSX makes it easier to write code as we are no longer creating elements using React.createElement().
- **Makes code simple and elegant**
- **Show more useful errors and warnings**
- **JSX prevents code injections (attacks)**

## Single Line JSX and Multi line JSX code:
- Single line code: `const jsxHeading = <h1>Namaste React</h1>`
- Multi line code: If writing JSX in multiple lines then using ‘()’ parenthesis is mandatory. To tell Babel from where JSX is starting and ending.
  ```
  const jsxHeading = (
    <div>
      <h1>Heading</h1>
    </div>
  );
  ```

## React components:
Everything inside React is a component. There are two different types of component:
- **Function based component** -  New way of writing code, most commonly used
- **Class based component** -  Old way of writing code, used rarely in industry

### React Functional Component:
- It is just normal JavaScript function that return JSX or react element.
- Use arrow function to create functional component.
- Please note: Always name React Functional Component with **Capital Letters** otherwise you will confuse it with normal function.
```
const Heading = () => {
  return(
    <h1>Hello World!</h1>
  );
}
```
- To render functional component, we can call them like `<Heading />`. This is syntax Babel understands.
- We can also call them using `<Heading></Heading>`
- Another way to call functional component is `{Heading()}`. As this is function at the end, we can call like function.

### Class Component:
- This is the older or legacy way to create react component.
```
class Heading extends React.Component{
  constructor() {
    super();
    // Define any state here
  }

  render() {
    return (<h1> Heading </Heading>);
  }
}

export default Heading;
```

### Component composition:
- A component inside component is called component composition.
![image](https://github.com/user-attachments/assets/9833b33d-9a3e-4d27-8f80-aba8b3b1df44)

## JavaScript code inside JSX:
- We can also write JS code in between JSX, inside React component when `{}` paranthesis is present, we can write any javascript expression inside it.
- It provides great advantage, if we need to render some element based on condition, at that time we can write JavaScript for condition.

  ![image](https://github.com/user-attachments/assets/16ec8a74-2036-419b-b2a3-5cf60b47d82f)

### How to call React Element in JSX?
- We can use ‘{}’ parenthesis.
```
const elem = <span> React Element </span>
const HeadingComponent = () => (
  <div id="containter">
    {elem}
    <h1> Hello world!</h1>
  </div>
)
```
###  What will happen if we call 2 elements inside each other?
- If we put 2 components inside each other, then it will go into an infinite loop and the stack will overflow. It will freeze your browser, so it’s not recommended to do so.

### Role of type attribute in a script tag? What options can I use there?
- The type attribute in a <script> tag is used to specify the media type of the script content. It tells the browser how to interpret the script. There are a few different values you can use with the type attribute:
  1. Omitted or Empty String: If the type attribute is omitted or set to an empty string (type=""), the browser will assume the default JavaScript type
  2. text/javascript (Deprecated)
  3. module
  4. text/babel
  5. text/typescript
