import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Notfound from "./Components/Notfound/Notfound";
import Guard from "./Components/Guard/Guard";
import Message from "./Components/Message/Message";
import GuardInverse from "./Components/GuardInverse/GuardInverse";
const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <GuardInverse>
            <Home />
          </GuardInverse>
        ),
      },
      {
        path: "register",
        element: (
          <GuardInverse>
            <Register />{" "}
          </GuardInverse>
        ),
      },
      {
        path: "login",
        element: (
          <GuardInverse>
            <Login />
          </GuardInverse>
        ),
      },
      { path: "message/:id", element: <Message /> },
      {
        path: "profile",
        element: (
          <Guard>
            {" "}
            <Profile />{" "}
          </Guard>
        ),
      },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
