import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home";
import SobreNos from "./components/SobreNos/SobreNos.jsx";
import CompreCripto from "./components/CompreCripto/CompreCripto.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/SobreNos", element: <SobreNos /> },
       {path: "/CompreCripto", element: <CompreCripto />},
      // {path: "/", element: <Home />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
