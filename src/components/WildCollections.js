import React from 'react';
import UnitsCollection from '../components/collections/UnitsCollection';
import SkinsCollection from '../components/collections/SkinsCollection';
import LordsCollection from '../components/collections/LordsCollection';
import PacksCollection from '../components/collections/PacksCollection';
import Head from '../components/Head';

const WildCollections = ({ marketData, walletData }) => {

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
  return (
    <div>
        {walletData && walletData.units ? (
          <div>
              <Head />
              <UnitsCollection marketData={marketUnitsData} walletData={walletData.units} />
              <SkinsCollection marketData={marketSkinsData} walletData={walletData.skins} />
              <LordsCollection marketData={marketLordsData} walletData={walletData.lords} />
              <PacksCollection marketData={marketPacksData} walletData={walletData.packs} />
          </div>
        ) : (
          <div>
            <UnitsCollection marketData={marketData} />
            <SkinsCollection marketData={marketData} />
          </div>
        )}
    </div>
  );
};

export default WildCollections;
