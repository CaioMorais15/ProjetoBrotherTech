import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home";
import SobreNos from "./components/SobreNos/SobreNos.jsx";
import CompreCripto from "./components/CompreCripto/CompreCripto.jsx";
import Mercados from "./components/Mercados/Mercado.jsx";
import Page from "../Page.jsx";
import Login from "./components/Login/Login.jsx";
import Cadastrar from "./components/Cadastrar/Cadastrar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Page /> },
      { path: "/SobreNos", element: <SobreNos /> },
      { path: "/CompreCripto", element: <CompreCripto /> },
      { path: "/Mercados", element: <Mercados /> },
      { path: "/Page", element: <Page /> },
      { path: "/Login", element: <Login /> },
      { path: "/Cadastrar", element: <Cadastrar /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
