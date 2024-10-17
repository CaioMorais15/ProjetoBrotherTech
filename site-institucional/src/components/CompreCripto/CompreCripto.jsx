import "./CompreCripto.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CryptoConverter from "../CryptoConverter/CryptoConverter";

// Replace with your chosen library for currency conversion (e.g., coingecko)
const exchangeRateApi = 'https://api.binance.com/api/v3/ticker/price?symbol=';

function CompreCrypto() {
    return (
        <>
        <Navbar />
          <CryptoConverter />
          <Footer />
        </>
      );
    }

export default CompreCrypto