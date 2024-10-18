import "./CompreCripto.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function CompreCrypto() {
    const [cryptocurrencies, setCryptocurrencies] = useState([]);
    const [selectedCrypto, setSelectedCrypto] = useState('');
    const [amount, setAmount] = useState(0);
    const [clientInfo, setClientInfo] = useState({
        clientId: 0,
        name: "", // Campo vazio
        email: "", // Campo vazio
        phone: "", // Campo vazio
        registrationDate: new Date().toISOString(),
        interestedInTechnology: true,
        interestedInHighReturns: true,
        interestedInDiversification: true,
        notifications: [],
        investmentTips: []
    });

    useEffect(() => {
        fetch('https://api.binance.com/api/v3/exchangeInfo')
            .then(response => response.json())
            .then(data => {
                setCryptocurrencies(data.symbols);
            });
    }, []);

    const handleCryptoChange = (event) => {
        setSelectedCrypto(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Encontrar a criptomoeda selecionada para obter o ID
        const selectedCryptoData = cryptocurrencies.find(crypto => crypto.symbol === selectedCrypto);
        const cryptocurrencyId = selectedCryptoData ? selectedCryptoData.id : 0;

        // Montar o novo investimento
        const newInvestmentTip = {
            investmentTipId: 0,
            clientId: clientInfo.clientId,
            client: {
                ...clientInfo,
                notifications: [], // Se não houver notificações, pode ser deixado vazio
                investmentTips: [] // Pode ser deixado vazio se não houver dicas
            },
            cryptocurrencyId: cryptocurrencyId,
            cryptocurrency: {
                cryptocurrencyId: cryptocurrencyId,
                name: selectedCrypto,
                riskLevel: "medium", // Ajuste conforme necessário
                potentialReturn: "high", // Ajuste conforme necessário
                growthHistory: "stable", // Ajuste conforme necessário
                notifications: [],
                investmentTips: []
            },
            tip: `Comprar ${selectedCrypto} no valor de ${amount}`,
            tipDate: new Date().toISOString()
        };

        // Enviar a requisição para a API
        fetch('https://brothertech.somee.com/api/InvestmentTips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newInvestmentTip),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta da rede');
            }
            return response.json();
        })
        .then(data => {
            console.log('Compra registrada com sucesso:', data);
            // Limpar os campos após o envio
            setSelectedCrypto('');
            setAmount(0);
        })
        .catch((error) => {
            console.error('Erro ao registrar a compra:', error);
        });
    };

    return (
        <div>
            <div className="Container">
                <div className="col-12 col-md-5">
                    <div className="row">
                        <div className="rounded-5 col-12 col-md-4">
                            <p>Compre Cripto</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <p>Compra Recorrente</p>
                        </div>
                    </div>
                </div>
                <div className="Cripto">
                    <form onSubmit={handleSubmit}>
                        <select value={selectedCrypto} onChange={handleCryptoChange}>
                            <option value="">Selecione uma criptomoeda</option>
                            {cryptocurrencies.map(crypto => (
                                <option key={crypto.symbol} value={crypto.symbol}>
                                    {crypto.symbol}
                                </option>
                            ))}
                        </select>
                        <input 
                            type="number" 
                            value={amount} 
                            onChange={handleAmountChange} 
                            placeholder="Valor" 
                            min="0" 
                            required 
                        />
                        <button type="submit">Comprar</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CompreCrypto;
