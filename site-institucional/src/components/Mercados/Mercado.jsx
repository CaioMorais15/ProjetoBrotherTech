import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './Mercado.css'

const Mercados = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.binance.com/api/v3/ticker/price');
                setData(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados da Binance:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Símbolo</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.symbol}>
                        <td>{item.symbol}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Mercados;