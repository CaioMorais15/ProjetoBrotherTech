import React, { useState, useEffect } from 'react';
import "./CryptoConverter.css";

function CryptoConverter() {
    const [cryptos, setCryptos] = useState([]);
    const [selectedCrypto, setSelectedCrypto] = useState('');
    const [selectedCryptoName, setSelectedCryptoName] = useState('');
    const [priceInBRL, setPriceInBRL] = useState(null);
    const [totalInBRL, setTotalInBRL] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [notification, setNotification] = useState('');

    useEffect(() => {
        const fetchCryptos = async () => {
            try {
                const response = await fetch('https://www.cryptocompare.com/api/data/coinlist');
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
                }
                const data = await response.json();
                if (!data.Data) {
                    throw new Error('Dados não encontrados na resposta da API.');
                }

                const formattedCryptos = Object.entries(data.Data)
                    .filter(([symbol, details]) => details && details.CoinName)
                    .map(([symbol, details]) => ({
                        value: symbol,
                        label: details.CoinName,
                    }));

                console.log('Criptomoedas carregadas:', formattedCryptos);
                setCryptos(formattedCryptos);
            } catch (error) {
                console.error('Erro ao buscar dados das criptomoedas:', error);
            }
        };

        fetchCryptos();
    }, []);

    const handleConvert = async () => {
        if (!selectedCrypto || quantity <= 0) {
            console.error('Preencha a criptomoeda e a quantidade.');
            return;
        }

        try {
            const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${selectedCrypto}&tsyms=BRL`);
            const data = await response.json();
            console.log('Dados de preço:', data);

            if (data.Response === 'Error') {
                console.warn(`Não foi possível obter o preço para ${selectedCrypto}: ${data.Message}`);
                setPriceInBRL(null); // Define preço como null se não houver mercado
                setTotalInBRL(null); // Reseta total em BRL
                setNotification(`Preço não disponível para ${selectedCryptoName} em BRL.`);
                return; // Retorna sem continuar
            }

            if (data.BRL && typeof data.BRL === 'number') {
                setPriceInBRL(data.BRL);
                const totalInBRL = data.BRL * quantity;
                setTotalInBRL(totalInBRL.toFixed(2));
                setNotification(`Você comprou ${quantity} de ${selectedCryptoName} por R$ ${totalInBRL}`);
            } else {
                console.error('Erro ao buscar o preço: BRL property not found or is not a number');
            }
        } catch (error) {
            console.error('Erro ao buscar o preço:', error);
            setNotification(`Erro ao buscar o preço: ${error.message}`);
        }
    };

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        const selectedCryptoDetail = cryptos.find(crypto => crypto.value === selectedValue);
        setSelectedCrypto(selectedValue);
        setSelectedCryptoName(selectedCryptoDetail ? selectedCryptoDetail.label : '');
        console.log('Criptomoeda selecionada:', selectedValue);
        setNotification('');
    };

    const handleQuantityChange = (event) => {
        const value = parseFloat(event.target.value) || 0;
        console.log('Quantidade:', value);
        setQuantity(value);
    };

    return (
        <div>
            <select className="btc" value={selectedCrypto} onChange={handleSelectChange}>
                {cryptos.map((crypto) => (
                    <option key={crypto.value} value={crypto.value}>
                        {crypto.label}
                    </option>
                ))}
            </select>
            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                placeholder="Quantidade"
            />
            <div className="btn">
                <button onClick={handleConvert}>Converter</button>
                {totalInBRL && (
                    <p>
                        O preço de {selectedCryptoName} em BRL é: {totalInBRL}
                    </p>
                )}
            </div>
            {notification && (
                <div className="notification">
                    <p>{notification}</p>
                </div>
            )}
        </div>
    );
}

export default CryptoConverter;
