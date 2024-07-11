import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      // {
      //   element: <RecipesPage />,
      //   path: "/recettes",
      //   loader: recipesLoader,
      // },
      // {
      //   element: <RecipePage />,
      //   path: "/recettes/:id",
      //   loader: OneRecipeLoader,
      // },
      // {
      //   element: <UserGuide />,
      //   path: "/étapes"
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
