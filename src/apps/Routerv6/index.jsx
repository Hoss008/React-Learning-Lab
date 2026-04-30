import Home from '../../components/Home';
import { BrowserRouter, Routes, Route, createBrowserRouter, Outlet } from 'react-router-dom';

function Routing() {
    const router = createBrowserRouter([{
        element: <Home />,
        path: '/',
    }])

  return (
    <>
    </>
  )}
  //define routes here

export default Routing;
//this will be the layout (header , footer ,content)
