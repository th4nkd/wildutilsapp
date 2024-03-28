import React from 'react';
import UnitsCollection from '../components/collections/UnitsCollection';
import SkinsCollection from '../components/collections/SkinsCollection';
import LordsCollection from '../components/collections/LordsCollection';
import PacksCollection from '../components/collections/PacksCollection';
import Head from '../components/Head';
import HeadSearch from './HeadSearch';
import DashboardCalc from './extra/DashbordCalc';

const WildCollections = ({ marketData, walletData, wallet }) => {

  const filterByType = (data, type) => {
    if (!Array.isArray(data))
      return [];
    
    return data.filter(item => item.type === type);
  }

  let marketUnitsData = [];
  let marketSkinsData = [];
  let marketLordsData = [];
  let marketPacksData = [];

  if (typeof marketData !== 'undefined')
  {
    marketUnitsData = filterByType(marketData, 'unit');
    marketSkinsData = filterByType(marketData, 'skin');
    marketLordsData = filterByType(marketData, 'lord');
    marketPacksData = filterByType(marketData, 'pack');
  }
  
  const dashboard = DashboardCalc.CalcDashboard(marketUnitsData, marketSkinsData, marketLordsData, marketPacksData, walletData);

  if (wallet !== null && wallet !== undefined && wallet !== '') {
    const formatedWallet = wallet.substring(0, 4) + '...' + wallet.substring(wallet.length - 4);
    dashboard.wallet = formatedWallet;
  }
  
  return (
    <div>
        {walletData ? (
          <div>
              <Head dashboardData={dashboard} />
              <UnitsCollection marketData={marketUnitsData} walletData={walletData.units} />
              <SkinsCollection marketData={marketSkinsData} walletData={walletData.skins} />
              <LordsCollection marketData={marketLordsData} walletData={walletData.lords} />
              <PacksCollection marketData={marketPacksData} walletData={walletData.packs} />
          </div>
        ) : (
          <div>
            <HeadSearch />
            <UnitsCollection marketData={marketUnitsData} />
            <SkinsCollection marketData={marketSkinsData} />
            <LordsCollection marketData={marketLordsData} />
            <PacksCollection marketData={marketPacksData} />
          </div>
        )}
    </div>
  );
};

export default WildCollections;
