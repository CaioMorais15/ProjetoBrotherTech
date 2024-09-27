import logo from "/Logo.png";
import { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
export const Login = () => {
  const [pagina, setPagina] = useState("home");

  const trocaPagina = (novaPagina) => {
    setPagina(novaPagina);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setAuthenticated, setUser } = useContext(AuthContext);
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
                  type="E-Mail/Telefone"
                  placeholder="E-Mail/Telefone..."
                  value={styles.Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                ""
              </div>
              <h1 className={styles.tituloSenha}>Senha</h1>
              <div id="Senha">
                <input
                  className={styles.campoEmail}
                  type="password"
                  placeholder="Senha..."
                  value={styles.Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p>
                <input type="checkbox" /> Concordo com os Termos de Serviço e
                com a Política de Privacidade da Brothers Tech
              </p>
              <div id="Entrar">
                <Link to={"../Page"} className={styles.campoEntrar}>
                  Entrar
                </Link>
                <p>
                  Ainda não tem uma conta? 
                  <Link to={"../Cadastrar"} >
                    Clique aqui!
                  </Link>
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
