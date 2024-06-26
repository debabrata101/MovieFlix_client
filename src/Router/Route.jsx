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
import EditProfile from "../Page/Dashboard/EditProfile";
import MovieDetails from "../Page/MovieDetails";
import SeriesDetails from "../Page/SeriesDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("https://movie-flix-server-413x.vercel.app/movies"),
      },
      {
        path: "/movies/:id",
        element: <MovieDetails />,
        loader: ({ params }) =>
          fetch(`https://movie-flix-server-413x.vercel.app/movies/${params.id}`),
      },
      {
        path: "/series/:id",
        element: <SeriesDetails />,
        loader: ({ params }) =>
          fetch(`https://movie-flix-server-413x.vercel.app/series/${params.id}`),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contuct />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "series",
        element: <Series />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "edit-movies/:id",
    element: <PrivateRoute><EditMovies /></PrivateRoute>,
    loader: ({ params }) => fetch(`https://movie-flix-server-413x.vercel.app/movies/${params.id}`),
  },
  {
    path: "edit-series/:id",
    element: <PrivateRoute><EditSeries/></PrivateRoute>,
    loader: ({ params }) => fetch(`https://movie-flix-server-413x.vercel.app/series/${params.id}`),
  },

  {
    path: "dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element:<PrivateRoute> <DashboardHome /></PrivateRoute>,
      },
      {
        path: "profile/edit/:id",
        element:( <PrivateRoute><EditProfile /></PrivateRoute>),
        loader: ({ params }) =>
          fetch(`https://movie-flix-server-413x.vercel.app/users/get/${params.id}`)
      },
      {
        path: "add-movies",
        element: <PrivateRoute><AddMovie /></PrivateRoute>,
      },

      {
        path: "add-series",
        element:<PrivateRoute> <AddSeries /></PrivateRoute>,
      },
    ],
  },
]);
