import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import HeaderComponent from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Address from "./components/Address";
import Restuarent from "./components/Restuarent";
// import GroceryMart from "./components/GroceryMart"; //When using Lazy Loading, we do not import components like this.
import Error from "./components/Error";
import useOnlineCheckStatus from "./utils/customHooks/useOnlineCheckStatus";

//Lazily load GroceryMart, perform Code Splitting.
const GroceryMart = lazy(() => import("./components/GroceryMart"));

//Below is an example of Component Composition - A Component can be composed of other Components
const App = () => {
  const status = useOnlineCheckStatus();
  return (
    <div>
      <HeaderComponent />
      {status ? (
        <Outlet />
      ) : (
        <h2>
          Looks like you're offline, please check your internet connection!
        </h2>
      )}
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <GroceryMart />
          </Suspense>
        ),
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
