import logo from "/Logo.png";
import { useState } from "react";
import styles from "./Cadastrar.module.css";
import { Link } from "react-router-dom";

export const Cadastrar = () => {
  const [pagina, setPagina] = useState("home");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleCadastro = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Basic validation for empty fields
    if (email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
      setError("Preencha todos os campos!");
      return; // Stop execution if validation fails
    }

    // Additional validation logic could be added here (e.g., email format, password matching)

    // Assuming successful validation (replace with your registration logic)
    console.log("Registration attempted with email:", email, "password:", password);
    // navigate(to your desired page after successful registration);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.divCadastrar}>
          <img src={logo} className={styles.logo} />
          <div id="Logo">
            <h1 className={styles.caixa2}>Bem-Vindo à Brothers Tech</h1>
            <div id="textoCadastro">
              <h1 className={styles.tituloEmail2}>Cadastrar-se</h1>
              <div id="Cadastro">
                <input
                  className={styles.campoEmail2}
                  type="email"
                  placeholder="E-Mail..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <h1 className={styles.tituloSenha2}>Senha...</h1>
              <div id="Senha">
                <input
                  className={styles.campoEmail2}
                  type="password"
                  placeholder="Senha..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <h1 className={styles.tituloSenha2}>Confirmar Senha...</h1>
              <div id="Confirmar Senha">
                <input
                  className={styles.campoEmail2}
                  type="password"
                  placeholder="Confirmar Senha..."
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <p style={{ padding: "20px" }}>
                <input type="checkbox" /> Concordo com os Termos de Serviço e
                com a Política de Privacidade da Brothers Tech
              </p>
              <div id="Cadastrar">
                <button className={styles.campoCadastrar} onClick={handleCadastro}>
                  Cadastrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastrar;