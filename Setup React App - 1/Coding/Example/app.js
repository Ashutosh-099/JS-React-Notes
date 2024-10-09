import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child1" }, [
    React.createElement("h1", {className: "heading1", key: "heading1"}, "Heading 1"),
    React.createElement("h2", {className: "heading2", key: "heading2"}, "Heading 2"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", {className: "heading1", key: "heading1-2"}, "Heading 1"),
    React.createElement("h2", {className: "heading2", key: "heading2-2"}, "Heading 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
