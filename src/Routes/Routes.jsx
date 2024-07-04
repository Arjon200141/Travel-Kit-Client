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
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AdminRoutes from "./AdminRoutes";
import ManageProduct from "../Pages/Dashboard/ManageProduct/ManageProduct";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct/UpdateProduct";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
  
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
          path:"userHome",
          element:<UserHome></UserHome>
        },
        {
          path:"cart",
          element:<Cart></Cart>
        },
        {
          path:"payment",
          element:<Payment></Payment>
        },
        {
          path:"paymentHistory",
          element:<PaymentHistory></PaymentHistory>
        },


        //Admin Routes
        {
          path:"adminhome",
          element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
          path:'allusers',
          element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path:'addproduct',
          element:<AdminRoutes><AddProduct></AddProduct></AdminRoutes>
        },
        {
          path:'manageproduct',
          element:<AdminRoutes><ManageProduct></ManageProduct></AdminRoutes>,
          loader:()=> fetch('http://localhost:5000/products')
        },
        {
          path:'updateproduct/:id',
          element:<AdminRoutes><UpdateProduct></UpdateProduct></AdminRoutes>,
          loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
        }
      ]
    }
  ]);