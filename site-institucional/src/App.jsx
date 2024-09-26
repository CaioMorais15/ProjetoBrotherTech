import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
<Login />
      {/* <Navbar />
      <Outlet />
      <Footer /> */}
    </>
  );
}

export default App;
