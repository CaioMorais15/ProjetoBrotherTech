import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./SobreNos.css";
import React from "react";

function SobreNos() {
  return (
    <div>
<Navbar />
    <div className="page">
      <h1 className="titulo">Quem Somos</h1>
      <div className="text">
        <p>
          Somos a BrothersTech e desenvolvemos o BrothersCoins, um aplicativo
          inovador voltado para investidores do mercado de criptomoedas. O
          objetivo do aplicativo é facilitar a tomada de decisões conscientes e
          seguras, oferecendo ferramentas que combinam análise de mercado,
          notificações em tempo real sobre variações de preços, e dicas
          personalizadas de investimento baseadas em tendências. A empresa
          destaca a crescente demanda pelo mercado de criptomoedas, que teve um
          aumento significativo de investidores, e vê no BrothersCoins um grande
          potencial para se tornar uma ferramenta essencial nesse setor. O
          projeto é sustentado por um modelo de negócios sustentável, com
          funcionalidades básicas gratuitas e uma versão premium que oferece
          análises mais aprofundadas de moedas internacionais. Além disso, a
          BrothersTech desenvolveu o aplicativo com a colaboração de
          investidores experientes, visando atender às necessidades do
          público-alvo: jovens e adultos interessados em tecnologia, blockchain
          e diversificação de investimentos.
        </p>
      </div>
    </div>
    <Footer />
    </div>

  );
}

export default SobreNos;
