{
  /* <div>
    <div>
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
    <div>
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div> */
}
// ReactElement(Object) => HTML(BrowserUnderstands)
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag 🚀"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
