import React, { useState, useEffect } from 'react';

function CryptoConverter() {
    const [cryptos, setCryptos] = useState([]);
    const [selectedCrypto, setSelectedCrypto] = useState('');
    const [priceInBRL, setPriceInBRL] = useState(null);
    const [totalInBRL, setTotalInBRL] = useState(null);

    const [quantity, setQuantity] = useState(0);

    // Fetch cryptocurrencies on initial load
    useEffect(() => {
        const fetchCryptos = async () => {
            try {
                const response = await fetch('https://www.cryptocompare.com/api/data/coinlist');
                const data = await response.json();

                const formattedCryptos = Object.entries(data.Data)
                    .filter(([symbol, details]) => details && details.CoinName)
                    .map(([symbol, details]) => ({
                        value: symbol,
                        label: details.CoinName,
                    }));

                setCryptos(formattedCryptos);
            } catch (error) {
                console.error('Erro ao buscar dados das criptomoedas:', error);
            }
        };

        fetchCryptos();
    }, []);

    // Fetch price only when clicking convert button and selectedCrypto changes
    const handleConvert = async () => {
        if (!selectedCrypto || quantity <= 0) {
            console.error('Preencha a criptomoeda e a quantidade.');
            return;
        }

        try {
            const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${selectedCrypto}&tsyms=BRL`);
            const data = await response.json();

            if (data[selectedCrypto] && typeof data[selectedCrypto].BRL === 'number') {
                setPriceInBRL(data[selectedCrypto].BRL);
                const totalInBRL = priceInBRL * quantity;
                setTotalInBRL(totalInBRL.toFixed(2)); // Update the state with the total
            } else {
                console.error('Erro ao buscar o preço: BRL property not found or is not a number');
            }
        } catch (error) {
            console.error('Erro ao buscar o preço:', error);
        }
    };

    const handleSelectChange = (event) => {
        setSelectedCrypto(event.target.value);
    };

    const handleQuantityChange = (event) => {
        const value = parseFloat(event.target.value) || 0;
        setQuantity(value);
    };

    return (
        <div>
            <select value={selectedCrypto} onChange={handleSelectChange}>
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
            <button onClick={handleConvert}>Converter</button>
    {totalInBRL && (
      <p>
        O preço de {selectedCrypto} em BRL é: {totalInBRL}
      </p>
            )}
        </div>
    );
}

export default CryptoConverter;