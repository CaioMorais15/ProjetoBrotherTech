import React, { useState, useEffect } from 'react';
import "./Converter.css"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'; // ou fetch


function Converter() {
    const [exchangeInfo, setExchangeInfo] = useState(null);
    const [moedaBase, setMoedaBase] = useState('BRL'); 

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://api.binance.com/api/v3/exchangeInfo');
            setExchangeInfo(response.data);
        };
        fetchData();
    }, []);

    const handleConverter = () => {
        // Lógica para converter os valores para reais
        const dadosConvertidos = exchangeInfo.symbols.map(symbol => {
            // ... Lógica de conversão usando a função getLatestRates
            return {
                ...symbol,
                // ... novos campos com os valores convertidos
            };
        });
        // Atualizar o estado com os dados convertidos
        setExchangeInfo(dadosConvertidos);
    };

    return (
        <div>
            <button onClick={handleConverter}>Converter para Reais</button>
            {exchangeInfo && (
                <ul>
                    {exchangeInfo.symbols.map(symbol => (
                        <li key={symbol.symbol}>
                            {symbol.symbol}: {symbol.priceChangePercent}% ({symbol.price})
                            {/* ... outros dados convertidos */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default Converter