import React from "react";
import ReactDOM from "react-dom/client";

// ReactElement(is an Object) => HTMLElement( Renders as an HTML Element which BrowserUnderstands)

//JSX (Transpiled before it reaches to JS) -> PARCEL -> Babel
// JSX Babel transpiled to -> React.createElement -> ReactElement -> ReactDOM -> HTMLElement
const reactElement = <span>React Element</span>;

const TitleComponent = () => (
  <div>
    <h1 id="title">Title in Namaste React</h1>
  </div>
);

//Below is an example of Component Composition - A Component can be composed of other Components
const HeadingComponent = () => {
  return (
    <div>
      {reactElement}
      {/* Below are three ways to call a react component. */}
      {TitleComponent()}
      <TitleComponent></TitleComponent>
      <TitleComponent />
      <h1 id="heading">Namaste React 🚀</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
