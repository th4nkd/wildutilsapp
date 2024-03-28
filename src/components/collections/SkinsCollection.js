import React from 'react';
import SkinCard from '../cards/SkinCard';
import BandImg from '../../assets/images/band2.png';
import { SkinsData } from '../../assets/data/skinsData';

const SkinsCollection = ({ marketData, walletData }) => {
const convertToRoman = (num) => {
    const romanNumerals = ['I', 'II', 'III', 'IV', 'V'];
    return romanNumerals[num - 1] || num.toString();
    };

    const unitsByTier = SkinsData.reduce((acc, unit) => {
    if (!acc[unit.tier]) {
        acc[unit.tier] = [];
    }
    acc[unit.tier].push(unit);
    return acc;
    }, {});

  return (
    <div className="w-80vw mx-auto mt-8">
      <div className="relative">
        <img
          src={BandImg}
          alt="Banner"
          className="w-full h-20 object-cover border-2 border-b-0 border-accent1 rounded-t-lg"
        />
        <div className="absolute inset-x-0 top-0 text-center p-4 text-white font-semibold">
          <p className="bg-gradient-to-b from-sfont1 to-sfont2 text-transparent bg-clip-text text-xl md:text-3xl lg:text-5xl text-center font-bold " style={{ textShadow: '0 0 10px rgba(255, 229, 58, 0.5)', WebkitTextStroke: '0.5px #000000' }}>SKINS</p>
        </div>
      </div>
      <div className='gap-1 p-6 border-2 border-accent1 rounded-b-lg'>
      
      {Object.keys(unitsByTier).map((tier, index) => (
        <div key={index} className="mb-6">
          <p className="text-3xl font-semibold text-right mr-2">TIER {convertToRoman(tier)}</p>
          <hr className="border-2 border-accent1 mt-1 mb-2" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {unitsByTier[tier].map((unit) => {
              
              let marketItem;
              if (typeof marketData !== 'undefined')
                marketItem = marketData.find((item) => item.unit.replace(/\s/g, '').toLowerCase() === unit.id);
              
              let walletItem;
              if (typeof walletData !== 'undefined') {
                walletItem = walletData.find((item) => item.unit.replace(/\s/g, '').toLowerCase() === unit.id);  
                if (typeof walletItem === 'undefined') {
                  walletItem = { unit: '', rare: 0, common: 0, uncommon: 0 };
                }
              }

              return (
                <SkinCard key={unit.id} unit={unit} marketData={marketItem} walletData={walletItem} />
              );
            })}
          </div>
        </div>
      ))}

      </div>
    </div>
  );
};

export default SkinsCollection;
