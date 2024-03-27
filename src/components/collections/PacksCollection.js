import React from 'react';
import PackCard from '../cards/PackCard';
import BandImg from '../../assets/images/band4.png';
import { PacksData } from '../../assets/data/packsData';

const PacksCollection = ({ marketData, walletData }) => {
  return (
    <div className="w-80vw mx-auto mt-8">
      <div className="relative">
        <img
          src={BandImg}
          alt="Banner"
          className="w-full h-20 object-cover border-2 border-b-0 border-accent1 rounded-t-lg"
        />
        <div className="absolute inset-x-0 top-0 text-center p-4 text-white font-semibold">
          <p className="bg-gradient-to-b from-sfont1 to-sfont2 text-transparent bg-clip-text text-xl md:text-3xl lg:text-4xl text-right mr-20 font-bold " style={{ textShadow: '0 0 10px rgba(255, 229, 58, 0.5)', WebkitTextStroke: '0.5px #000000' }}>PACK'S</p>
        </div>
      </div>
      <div className='gap-1 p-6 border-2 border-accent1 rounded-b-lg'>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {PacksData.map((unit) => {
              let marketItem;
              if (typeof marketData !== 'undefined')
                marketItem = marketData.find((item) => item.unit.replace(/\s/g, '').toLowerCase() === unit.id);
              
              let walletItem;
              if (typeof walletData !== 'undefined') {
                walletItem = walletData.find((item) => item.unit.replace(/\s/g, '').toLowerCase() === unit.id);  
                if (typeof walletItem === 'undefined') {
                  walletItem = { unit: '', price: 0 };
                }
              }

              return (
                <PackCard key={unit.id} unit={unit} marketData={marketItem} walletData={walletItem} />
              );
            })}
        </div>

      </div>
    </div>
  );
};

export default PacksCollection;
