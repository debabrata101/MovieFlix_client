import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Registration from "../Page/Registration";
import About from "../Page/About";
import Contuct from "../Page/Contuct";
import Movies from "../Page/Movies";
import Series from "../Page/Series";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "../Page/Dashboard/DashboardHome";
import AddMovie from "../Page/Dashboard/AddMovie";
import EditMovies from "../Page/Dashboard/EditMovies";
import EditSeries from "../Page/Dashboard/EditSeries";
import AddSeries from "../Page/Dashboard/AddSeries";


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
        {
          path:"about",
          element:<About/>
        },
        {
          path:"contact",
          element:<Contuct/>
        },
        {
          path:"movies",
          element:<Movies/>
        },
        {
          path:"series",
          element:<Series/>
        },

      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/registration",
      element:<Registration/>
    },
    {
      path:"dashboard",
      element:<DashboardLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          element:<DashboardHome/>
        },
        {
          path:"add-movies",
          element:<AddMovie/>
        },
        {
          path:"edit-movies",
          element:<EditMovies/>
        },
        {
          path:"add-series",
          element:<AddSeries/>
        },
        {
          path:"edit-series",
          element:<EditSeries/>
        },
      ]
    }
  ]);