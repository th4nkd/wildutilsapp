import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import Menu from './Menu';
import Footer from './Footer';
import ToggleContext from './extra/ToggleContext';
import WildCollections from './WildCollections';
import { GetWalletData, GetMarketData, GetRONPrice } from '../apiService';

// test data
import { mData } from '../marketData';
import { wData } from '../walletData';

const Dashboard = () => {
    
    const { setPriceRon } = useContext(ToggleContext); 
    const [isLoading, setIsLoading] = useState(true);
    const [ronAddress, setRonAddress] = useState('');
    const [walletData, setWalletData] = useState([]);
    const [marketData, setMarketData] = useState([]);
    const [dashboardOn, setDashboardOn] = useState(false);
    const location = useLocation();
    
    /* ONLY FOR TEST*/
    const UseTestData = true;
    /*--------------*/
  
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const addrs = queryParams.get('address');
        const regex = /^0x[a-fA-F0-9]{40}$/;
        let validAddress = '';
        if (regex.test(addrs))
        {
            setRonAddress(addrs);
            validAddress = addrs;
        }
        
        const fetchMarketData = async () => {
            try {
                const fMarketData = await GetMarketData();

                if (typeof fMarketData !== 'undefined' && fMarketData.hasOwnProperty('body') && fMarketData.body !== null)
                {
                    const marketDataArray = JSON.parse(fMarketData.body);
                    setMarketData(marketDataArray);
                }

            } catch (error) {
                console.error('Erro loading API data:', error.message);
            }
        };

        const fetchWalletData = async (address) => {
            try {

                const fWalletData = await GetWalletData(address);

                if (typeof fWalletData !== 'undefined')
                {
                    setWalletData(fWalletData);
                    return true;
                }

                return false;

            } catch (error) {
                console.error('Erro loading API data:', error.message);
            }
        };
    
        const fetchCurrencies = async () => {
            try {

                const ronPriceData = await GetRONPrice();

                if (typeof ronPriceData !== 'undefined')
                {
                const ronPrice = ronPriceData.data[0].price_usd;
                setPriceRon(ronPrice);
                }

            } catch (error) {
                console.error('Erro loading RON price:', error.message);
            }
        };

        const fetchData = async (address) => {
            
            if (!isLoading)
                setIsLoading(true);

            if (dashboardOn)
                setDashboardOn(false);

            await fetchCurrencies();
            await fetchMarketData();

            console.log('address: ' + address);
            if (address !== null && address !== undefined && address !== '') {
                const resp = await fetchWalletData(address);
                setDashboardOn(resp);
            }

            setIsLoading(false);

        };
    
        if (!UseTestData) {

            fetchData(validAddress);

        } else {

            // TEST NLY

            if (!isLoading)
                setIsLoading(true);

            if (dashboardOn)
                setDashboardOn(false);

            fetchCurrencies();
            setMarketData(mData);
            setWalletData(wData);

            setIsLoading(false);

            if (ronAddress !== null && ronAddress !== undefined)
                setDashboardOn(true);

        }
    }, []);

  return (
    <div>
        <Menu />
        <div className="App bg-primary text-textPrimary">
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <div>
                {dashboardOn ? (
                    <WildCollections marketData={marketData} walletData={walletData} wallet={ronAddress} />
                ) : (
                    <WildCollections marketData={marketData} /> 
                )}
            </div>
          )}
        </div>
        <Footer full={true} />
    </div>
  );
};

export default Dashboard;