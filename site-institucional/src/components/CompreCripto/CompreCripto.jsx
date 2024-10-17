import "./CompreCripto.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Replace with your chosen library for currency conversion (e.g., coingecko)
const exchangeRateApi = 'https://api.binance.com/api/v3/ticker/price?symbol=';

function CompreCrypto() {

    // Modedas Correntes
    const [cryptocurrencies, setCryptocurrencies] = useState([]);

    // Moeda Selecionada
    const [selectedCrypto, setSelectedCrypto] = useState('');

    const [amount, setAmount] = useState(0);
    const [clientInfo, setClientInfo] = useState({
        clientId: 0,
        name: "",
        email: "",
        phone: "",
        registrationDate: new Date().toISOString(),
        interestedInTechnology: true,
        interestedInHighReturns: true,
        interestedInDiversification: true,
        notifications: [],
        investmentTips: [],
    });
    const [fromCurrency, setFromCurrency] = useState('USD'); // Default from currency
    const [toCurrency, setToCurrency] = useState('BRL');   // Default to currency (Real)
    const [convertedAmount, setConvertedAmount] = useState(0);  // State for converted amount

    useEffect(() => {
        const fetchCryptoData = async () => {
            //const response = await fetch('https://api.binance.com/api/v3/exchangeInfo');
            const response = await fetch('https://www.cryptocompare.com/api/data/coinlist');
            const data = await response.json();
            console.log(data);
            setCryptocurrencies(data.fsym);
        };

        fetchCryptoData();
    }, []);

    const handleCryptoChange = (event) => {
        setSelectedCrypto(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleFromCurrencyChange = (event) => {
        setFromCurrency(event.target.value);

    };

    const handleToCurrencyChange = (event) => {
        setToCurrency(event.target.value);
    };

    const convertPrice = async () => {

        if (!selectedCrypto || !toCurrency) {
            alert('Selecione a criptomoeda de origem');
            return;
        }

        console.log(`${exchangeRateApi}`)
        // https://api.binance.com/api/v3/ticker/price?symbol=BTCBRL
        const response = await fetch(`${exchangeRateApi}${selectedCrypto}`);
        const data = await response.json();
        console.log(data);
        const conversionRate = data[selectedCrypto][toCurrency];
        setConvertedAmount(amount * conversionRate);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedCrypto) {
            alert('Selecione uma criptomoeda');
            return;
        }

        const realPrice = await convertPrice(selectedCrypto);
        const convertedAmountInReal = amount * realPrice;

        // Rest of your logic for registering the purchase with converted amount in Reais...

        console.log('Compra registrada com sucesso:', {
            selectedCrypto,
            amount,
            convertedAmountInReal,
        });

        // Clear form fields after successful submission
        setSelectedCrypto('');
        setAmount(0);
    };

    return (
        <div>
            <Navbar />
            <div className="Container">
                <div className="col-12 col-md-5">
                    <div className="row">
                        <div className="rounded-5 col-12 col-md-4">
                            <p>Compre Cripto</p>
                        </div>
                    </div>
                    <div className="Cripto">
                        <form onSubmit={handleSubmit}>
                            <select value={selectedCrypto} onChange={handleCryptoChange}>
                                <option value="">Selecione uma criptomoeda</option>
                                {cryptocurrencies.map((crypto) => (
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
                            <div className="converter">
                                <input type="submit" value="Converter" />
                            </div>
                        </form>
                    </div>

                </div>

                <Footer />

            </div>
        </div>

    );

}
export default CompreCrypto