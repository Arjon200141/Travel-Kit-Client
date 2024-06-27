import {
    createBrowserRouter 
  } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Shop from "../Pages/Shared/Shop/Shop/Shop";
import Contact from "../Pages/Contact/Contact";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
  
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
        },
        {
          path:"/login",
          element:<LogIn></LogIn>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
    {
      path:"dashboard",
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:"cart",
          element:<Cart></Cart>
        },


        //Admin Routes
        {
          path:'allusers',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);