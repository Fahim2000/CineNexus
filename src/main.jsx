import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import  MovieList  from "./pages/MovieList.jsx";
import  MovieDetail  from "./pages/MovieDetail.jsx";
import  Search  from "./pages/Search.jsx";
import  ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: (
          <MovieList apiPath="movie/now_playing" title="Home"/>
        ),
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/movies/popular",
        element: <MovieList apiPath="movie/popular" title="Popular" />,
      },
      {
        path: "movies/top",
        element: <MovieList apiPath="movie/top_rated" title="Top Rated" />,
      },
      {
        path: "movies/upcoming",
        element: <MovieList apiPath="movie/upcoming" title="Upcoming" />,
      },
      {
        path: "/search",
        element: <Search apiPath="search/movie" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
