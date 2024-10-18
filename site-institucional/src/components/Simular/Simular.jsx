import React, { useState } from 'react';

const Simular = () => {
  const [cryptoAmount, setCryptoAmount] = useState('');
  const [conversionRate] = useState(250000); // Exemplo: 1 Bitcoin = 250,000 BRL
  const [convertedValue, setConvertedValue] = useState(null);

  const handleChange = (e) => {
    setCryptoAmount(e.target.value);
  };

  const convertToBRL = () => {
    const valueInBRL = cryptoAmount * conversionRate;
    setConvertedValue(valueInBRL);
  };
 
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Conversor de Criptomoeda para Reais</h1>
      <input
        type="number"
        value={cryptoAmount}
        onChange={handleChange}
        placeholder="Quantidade de Cripto"
        style={{ padding: '10px', width: '100%' }}
      />
      <button onClick={convertToBRL} style={{ marginTop: '10px', padding: '10px', width: '100%' }}>
        Converter
      </button>
      {convertedValue !== null   && (
        <h2 style={{ marginTop: '20px' }}>
          Valor em Reais: R$ {convertedValue.toFixed(2)}
        </h2>
      )}
    </div>
  );
};

export default Simular;