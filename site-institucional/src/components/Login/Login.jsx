import logo from "/Logo.png";
import { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export const Login = () => {
  const [pagina, setPagina] = useState("home");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Basic validation for empty fields
    if (email.trim() === "" || password.trim() === "") {
      setError("Preencha todos os campos!");
      return; // Stop execution if validation fails
    }

    // Additional validation logic could be added here (e.g., email format)

    // Assuming successful validation (replace with your login logic)
    console.log("Login attempted with email:", email, "password:", password);
    // navigate(to your desired page after successful login);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.divLogin}>
          <img src={logo} className={styles.logo} />
          <div id="Logo">
            <h1 className={styles.caixa}>Bem-Vindo à Brothers Tech</h1>
            <div id="textoLogin">
              <h1 className={styles.tituloEmail}>Login</h1>
              <div id="Login">
                <input
                  className={styles.campoEmail}
                  type="email"
                  placeholder="E-Mail..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <h1 className={styles.tituloSenha}>Senha</h1>
              <div id="Senha">
                <input
                  className={styles.campoEmail}
                  type="password"
                  placeholder="Senha..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <p style={{ padding: "20px" }}>
                <input type="checkbox" /> Concordo com os Termos de Serviço e
                com a Política de Privacidade da Brothers Tech
              </p>
              <div id="Entrar">
                <button className={styles.campoEntrar} onClick={handleLogin}>
                  Entrar
                </button>
                <p>
                  Ainda não tem uma conta?
                  <Link to={"../Cadastrar"}>Crie uma!</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
