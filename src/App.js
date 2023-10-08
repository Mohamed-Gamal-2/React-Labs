import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home-Component/Home.jsx";
import Layout from "./Components/Layout-Componant/Layout.jsx";
import About from "./Components/About-Component/About.jsx";
import Artist from "./Components/Artist-Component/Artist.jsx";
import Contact from "./Components/Contact-Component/Contact.jsx";
import Notfound from "./Components/Notfound-Component/Notfound";

const routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "artist", element: <Artist /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
