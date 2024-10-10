import "./CompreCripto.css"
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';


function CompreCrypto() {
    const [cryptocurrencies, setCryptocurrencies] = useState([]);
    const [selectedCrypto, setSelectedCrypto] = useState('');
    const [amount, setAmount] = useState(0);


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


        console.log('Comprar', selectedCrypto, 'no valor de', amount);
    };

    return (
        <div>
            <div className="Container">
                <div className="col-12 col-md-5">
                    <div className="row ">
                        <div className="rounded-5 col-12 col-md-4 ">
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
                            <div className="row" />
                            <option value="">Selecione uma criptomoeda</option>
                            {cryptocurrencies.map(crypto => (
                                <option key={crypto.symbol} value={crypto.symbol}>
                                    {crypto.symbol}
                                </option>
                            ))}
                        </select>
                        <input type="number" value={amount} onChange={handleAmountChange} />
                        <button className="btini" type="submit">Comprar</button>
                    </form>
                </div>
            </div>
        </div>


    );
}

export default CompreCrypto