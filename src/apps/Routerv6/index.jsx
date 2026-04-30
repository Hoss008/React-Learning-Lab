import Home from "../../components/Home";
import {BrowserRouter, Routes, Route, createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
]);

function Routing() {
return <RouterProvider router={router} />;
}
export default Routing;

//1-define routes here
//this will be the layout (header , footer ,content)
