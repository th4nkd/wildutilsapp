import React from 'react';
import PriceViewer from './PriceViewer';

const PriceTextViewer = ({ price, text, size, color, textFront }) => {
  return (
    <span className={`text-${color} font-semibold text-sm sm:text-sm md:text-${size} lg:text-${size}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
         {textFront && <span className='pr-2'>{textFront}</span>} <PriceViewer price={price} size={size} color={color} /> <span className='pl-1'>{text}</span> 
    </span>
  );
};

export default PriceTextViewer;
