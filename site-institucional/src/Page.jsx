import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Cadastrar from "./components/Cadastrar/Cadastrar";
import Home from "./components/Home/Home";

const Page = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default Page;
