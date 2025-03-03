import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import HeaderComponent from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Address from "./components/Address";
import Restuarent from "./components/Restuarent";
import Error from "./components/Error";

//Below is an example of Component Composition - A Component can be composed of other Components
const App = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </div>
  );
};

const routesConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/address",
        element: <Address />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restuarent/:resId",
        element: <Restuarent />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routesConfig} />);
