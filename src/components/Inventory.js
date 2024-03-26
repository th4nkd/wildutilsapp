import React from 'react';
import UnitCard from '../components/cards/UnitCard';

import BandImg from '../assets/images/band1.png';

import { UnitsData } from '../assets/data/unitsData'

const Inventory = () => {
  return (
    <div className="w-80vw mx-auto mt-8">
      <div className="relative">
        <img
          src={BandImg}
          alt="Banner"
          className="w-full h-20 object-cover border-2 border-b-0 border-accent1 rounded-t-lg"
        />
         <div className="absolute inset-x-0 top-0 text-center p-4 text-white font-semibold">
            <p className="bg-gradient-to-b from-sfont1 to-sfont2 text-transparent bg-clip-text text-xl md:text-3xl lg:text-4xl text-right mr-20 font-bold " style={{ textShadow: '0 0 10px  rgba(255, 229, 58, 0.5)', WebkitTextStroke: '0.5px #000000' }}>UNITS</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 p-6 border-2 border-accent1 rounded-b-lg ">
        {/* Mapeando o array de dados para renderizar os cards */}
        {UnitsData.map((card) => (
            <UnitCard card={card} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
