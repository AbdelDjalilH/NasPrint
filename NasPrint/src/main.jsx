import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import APropos from "./pages/APropos.jsx";
import NosProduits from "./pages/NosProduits.jsx";
import NosNouveautees from "./pages/NosNouveautees.jsx";
import Connexion from "./pages/Connexion.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <APropos />,
        path: "/a-propos",
      },
      {
        element: <NosProduits />,
        path: "/nos-produits",
      },
      {
        element: <NosNouveautees />,
        path: "/nos-nouveautées",
      },
      {
        element: <Connexion />,
        path: "/connexion",
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
