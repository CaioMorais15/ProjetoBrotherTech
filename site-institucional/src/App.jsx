import { Outlet } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
    <Navbar />
      <Outlet />
    </>
  );
}

export default App;
