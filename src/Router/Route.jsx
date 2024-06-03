import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Registration from "../Page/Registration";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          element:<Home/>
        },

      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/Registration",
      element:<Registration/>
    }
  ]);