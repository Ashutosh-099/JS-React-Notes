# React Testing
`Testing` is a crucial aspect of software development, helping ensure that the code behaves as expected and meets the specified requirements. There are various types of testing, each serving a specific purpose in the software development life cycle. Here are some common types of testing:

## Types of Developer testing:
1. `Manual testing`: Testing the functionality that we have developed. E.g. we have developed a search bar, manual testing is checking the search bar manually by searching the query. **Please note: This is not a very promisable way because we can't test every new feature in a big application.** **A single line can introduce bugs in our whole app because multiple components are connected to each other.**
2. `Automatic testing`: We can write the test cases for testing the functionality. It includes
   - `Unit testing`: Write test cases for the specific part (isolated components).
   - `Integration testing`: Writing testcases for the components that are connected like menu page and cart page are connected.
   - `End to end testing`: Writing testcases from user enters into the website to user leaves the website.

## Setup Testing libraries in React
1. React Testing library: It is provided by react that allows to test react components.

    `npm i -D @testing-library/react`
3. jest: React testing library uses jest so we need to install it.

   `npm i -D jest`
  - Since we are using `Babel` as a bundler so we need to install some extra libraries. More details (Link)[https://babeljs.io/docs/usage]
3. Install extra babel libraries
  
  `npm install --save-dev @babel/core @babel/cli @babel/preset-env`
4. Create babel.config.js / babel.config.cjs
```
const presets = [
 [
 "@babel/preset-env",
 {
 targets: {
 edge: "17",
 firefox: "60",
 chrome: "67",
 safari: "11.1",
 },
 useBuiltIns: "usage",
 corejs: "3.6.4",
 },
 ],
];
module.exports = { presets };
```
5. Configure jest

   `npx jest --init`
  - After running this command, you have to select some options
    ![image](https://github.com/user-attachments/assets/cd74aeb1-ca9d-4f02-ad57-76cd0cd36b53)

  - We are using jsdom as a test environment. When we run test cases, there is no browser or server. For running the test cases we need an enviornment which is jsdom.
6. Install jsdom environment
  
     `npm install --save-dev jest-environment-jsdom`
  
7. To enable JSX in testing environment or in jsdom, we need to install babel preset.

   `npm i -D @babel/preset-react`
   - set babel config then:
     ![image](https://github.com/user-attachments/assets/24f798b0-eeae-4557-8edf-be7bf7a7707c)

8. After enabling we need to use DOM functions, for that install

   `npm i -D @testing-library/jest-dom`
   - Import this library in test file to use the dom functions. like `import "@testing-library/jest-dom"`
   
## Writing testcases standards
- Create a folder `__tests__` and create a file in this folder with the `filename.test.js`
- Add `coverage` folder in `.gitignore` file, it will contains information of running test cases with its coverage details.
- To execute test command, `npm run test`, Make sure we have test command script in package.json, which is `"test": "jest"`
- To continue execute like when we change it react and it will update the DOM, create new script in package.json, which is `"watchTest": "jest --watch"`
- To group the testcases of one component, we can use `describe()` like this,
```
describe("", () => {
   // test cases
});
```

## Writing testcases
### Syntax
- To create testcases we use `test` or `it` function. E.g.
  ```
  test("<TEST_DESCRIPTION>", () => {
      // TEST LOGIC INSIDE
        // Rendering
        // Querying
        // Assertion
  });
   OR
  it("<TEST_DESCRIPTION>", () => {
      // TEST LOGIC INSIDE
        // Rendering
        // Querying
        // Assertion
  });
  ```
- test() or it() function will take two parameter, first is description and second is call back function.

### Unit test
- It means we isolate one component and test the component loading, rendering, children and logic of it.
- Isolation of component means render the component in js-dom in isolation and test it.
- In this example, we have ContactUs page, we need to check whether ContactUs is loading or not.
```
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ContactUs from "../ContactUs";

test("Should render Contact us page", () => {
   // Rendering
   render(<ContactUs />);      // It will render ContactUs component in js-dom in isolation.

   // Querying
   const heading = screen.getByRole("heading");

   // Assertion
   expect(heading).toBeInTheDocument();
});
```
- `render()` provided by react testing library, which is used to render component in js-dom.
- To access component elements, we need to use `screen` variable, which helps to provide function to access elements in the component. In the above example, we find heading element by using `screen.getByRole()` function.
- Now, after finding out specific element, we need to verify or assert that selected element is there in component or DOM. For that we need dom functions, which we get by testing-library/jest-dom library, in the above example we use `toBeInTheDocument()`. For more function exploration, check this link [js-dom-functions](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohavetextcontent).

### Access element in Component
- As mentioned earlier, we need to use `screen` to access element from the DOM.
- There are multiple functions provided by library to access specific element, such are:
  1. getByRole(<ROLE_NAME>)
  2. getByText(<TEXT_NAME>)
  3. getByPlaceholderText(<PLACEHOLDER_VALUE>)
  4. getByTitle(<TITLE>)
  5. getByTestId(<TEST_ID>) etc..
- `getByTestId` is a very useful function, if we need to find specific element, but there are more element or difficult to access element by there name, role, text. etc.
- We can simple use `getByTestId`, just assign test id property to specific element, like `<h1 data-testid="heading">Hello World</h1>`
- We can use the above like this, `screen.getByTestId("heading")`
- The above function, find the element and return single element, but if we need to find multiple elements having same role, text etc. We have same function acronyms just `All` is adde, Like this,
  1. getAllByRole(<ROLE_NAME>)
  2. getAllByText(<TEXT_NAME>)
  3. getAllByPlaceholderText(<PLACEHOLDER_VALUE>)
  4. getAllByTitle(<TITLE>)
  5. getAllByTestId(<TEST_ID>) etc..
