import React, { useEffect, lazy, Suspense, useState } from "react";
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
import UserContext from "./utils/userContext";

//Lazily load GroceryMart, perform Code Splitting.
const GroceryMart = lazy(() => import("./components/GroceryMart"));

//Below is an example of Component Composition - A Component can be composed of other Components
const App = () => {
  const [updateUserName, setUpdateUserName] = useState();
  const status = useOnlineCheckStatus();

  useEffect(() => {
    //Make an API call to get the username
    let data = {
      loggedInUser: "Prakhar Patel",
    };
    setUpdateUserName(data.loggedInUser);
  }, []);

  return (
    <div>
      <UserContext.Provider
        value={{ loggedInUser: updateUserName, setUpdateUserName }}
      >
        <div className="min-h-screen flex flex-col">
          <HeaderComponent />

          <main className="flex-1 overflow-y-auto">
            {status ? (
              <Outlet />
            ) : (
              <h2 className="text-center mt-10">
                Looks like you're offline, please check your internet
                connection!
              </h2>
            )}
          </main>

          <Footer />
        </div>
      </UserContext.Provider>
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
