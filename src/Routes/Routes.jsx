import {
    createBrowserRouter 
  } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Shop from "../Pages/Shared/Shop/Shop/Shop";
import Contact from "../Pages/Contact/Contact";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
        },
        {
          path:"/shop",
          element:<Shop></Shop>,
          loader:()=> fetch('http://localhost:5000/products')
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        }
      ]
    },
  ]);