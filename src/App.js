import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

//Below is an example of Component Composition - A Component can be composed of other Components
const App = () => {
  return (
    <div>
      {/* Below are three ways to call a react component. */}
      {/* {TitleComponent()}
      <TitleComponent></TitleComponent> */}
      <HeaderComponent />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
