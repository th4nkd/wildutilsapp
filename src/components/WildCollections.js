import React from 'react';
import UnitsCollection from '../components/collections/UnitsCollection';
import SkinsCollection from '../components/collections/SkinsCollection';
import LordsCollection from '../components/collections/LordsCollection';

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
  //<UnitsCollection marketData={marketUnitsData} walletData={walletData.units} />
  //<SkinsCollection marketData={marketSkinsData} walletData={walletData.skins} />
  return (
    <div>
        {walletData && walletData.units ? (
          <div>
            <LordsCollection marketData={marketLordsData} walletData={walletData.lords} />
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
