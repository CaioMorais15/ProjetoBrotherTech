   import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './Mercado.css'; 
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Mercados = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const   
    fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await axios.get('https://api.binance.com/api/v3/ticker/price');   
        
        setData(response.data.slice(0, 10)); // Limit to 10 items
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Erro ao carregar dados da Binance');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <div>
<Navbar />
    <div className="Page">
    <table className="mercado-table">
      <thead>
        <tr>
          <th>Símbolo</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan="2">Carregando dados...</td>
          </tr>
        ) : error ? (
          <tr>
            <td colSpan="2">{error}</td>
          </tr>
        ) : data.length > 0 ? (
          data.map((item) => (
            <tr key={item.symbol}>
              <td>{item.symbol}</td>
              <td>{item.price}</td>
            </tr>
          ))
          ) : (
            <tr>
            <td colSpan="2">Nenhum dado encontrado</td>
          </tr>
        )}
      </tbody>
    </table>
        </div>
    <Footer />
        </div>
  );
};

export default Mercados;