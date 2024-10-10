import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX Element (h1, h2, h3 inside a div with class="title")
// To call headerElement, just call {headerElement} 
/*
const headerElement = (
  <div className="title">
    <h1> Heading 1 </h1>
    <h2> Heading 1 </h2>
    <h3> Heading 1 </h3>
  </div>
);
*/

// Functional Component name 'HeaderComponent'
// To call, <HeaderComponent />
const HeaderComponent = () => {
  return (
    <div className="title">
      <h1>Heading 1</h1>
      <h2>Heading 1</h2>
      <h3>Heading 1</h3>
    </div>
  );
};

// Component Composition
const HeaderComponent2 = () => {
  return (
    <div>
      <HeaderComponent />
      <h2> Hello world !</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent2 />);
