import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Cadastrar from "./components/Cadastrar/Cadastrar";

function App() {
  return (
    <>
 <Login />
<Cadastrar/>
      <Navbar />
      <Outlet />
      <Footer />
      
    </>
  );
}

export default App;
