import logo from "/Logo.png"
import { useState } from "react"
import styles from "./Cadastrar.module.css"
export const Cadastrar = () => {

  const [pagina, setPagina] = useState('home');

  const trocaPagina = (novaPagina) => {
    setPagina(novaPagina)
  }
  return <>
    <div className={styles.container} >
      <div className={styles.divCadastrar}>

        <img src={logo} className={styles.logo} />
        <div id="Logo">

          <h1 className={styles.caixa2}>Bem-Vindo à Brothers Tech</h1>
          <div id="textoCadastro">

            <h1 className={styles.tituloEmail2}>Cadastrar-se</h1>
            <div id="Cadastro">
              <input className={styles.campoEmail2} type="E-Mail/Telefone" placeholder="E-Mail/Telefone..." />
            </div>
            <h1 className={styles.tituloSenha2}>Senha...</h1>
            <div id="Senha">
              <input className={styles.campoEmail2} type="password" placeholder="Senha..." />
            </div>
            <h1 className={styles.tituloSenha2}>Confirmar Senha...</h1>
            <div id="Confirmar Senha">
              <input className={styles.campoEmail2} type="password" placeholder="Confirmar Senha..." />
            </div>
            <p>
              <input type="checkbox" /> Concordo com os Termos de Serviço e com a Política de Privacidade da Brothers Tech</p>
            <div id="Cadastrar">
              <button className={styles.campoCadastrar} >Cadastrar</button>
              <p>Ainda não tem uma conta?<a href="site/src/cadastro/Cadastrar.jsx" > Crie uma!</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
}

export default Login