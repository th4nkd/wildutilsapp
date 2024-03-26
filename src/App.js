import './App.css';
import React, { useState, useEffect } from 'react';
import { GetWalletData, GetMarketData } from './apiService';
import WildCollections from './components/WildCollections';
import LoadingScreen from './components/LoadingScreen';

// test
import { mData } from './marketData';
import { wData } from './walletData';
const UseTestData = true;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [walletData, setWalletData] = useState([]);
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fWalletData = await GetWalletData('0x31bda1999a40ec043ea08f69c316511ca80eb6e9');
        const fMarketData = await GetMarketData();

        if (typeof fWalletData !== 'undefined')
          setWalletData(fWalletData);

        if (typeof fMarketData !== 'undefined' && fMarketData.hasOwnProperty('body') && fMarketData.body !== null)
        {
          const marketDataArray = JSON.parse(fMarketData.body);
          setMarketData(marketDataArray);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao carregar unidades:', error.message);
        setIsLoading(false);
      }
    };

    if (!UseTestData) {
      fetchData();
    } else {
      setMarketData(mData);
      setWalletData(wData);
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="App bg-primary text-textPrimary">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <WildCollections marketData={marketData} walletData={walletData} />
        </div>
      )}
    </div>
  );
}

export default App;