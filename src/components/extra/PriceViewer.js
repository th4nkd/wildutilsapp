import React, { useContext } from 'react';
import RonIcon from './RonIcon';
import ToggleContext from './ToggleContext';

const PriceViewer = ({ price, size, color }) => {
  const { selectedOption } = useContext(ToggleContext);
  const { ronPrice } = useContext(ToggleContext);

  const p_r = price * ronPrice;
  const price_ron = parseFloat(p_r.toString()).toFixed(2);

  return (
    <div className={`text-${color} font-semibold text-sm sm:text-sm md:text-${size} lg:text-${size}`}>
      {selectedOption === 'ron' ? price : price_ron } {selectedOption === 'ron' ? '' : '$'} {selectedOption === 'ron' && <RonIcon style={{ display: 'inline-block', marginLeft:-6, marginRight:-3 }} />}
    </div>
  );
};

export default PriceViewer;
