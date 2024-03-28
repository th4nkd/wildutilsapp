import React, { useContext } from 'react';
import ToggleContext from './ToggleContext';
import RonImg from '../../assets/images/ron-1.png';

const ToggleComponent = () => {
  const { selectedOption, handleRadioChange } = useContext(ToggleContext);

  return (
    <div className="flex items-center space-x-4">
      <label className="inline-flex items-center pr-1">
        <input
          type="radio"
          value="ron"
          checked={selectedOption === 'ron'}
          onChange={() => handleRadioChange('ron')}
          className="form-radio text-indigo-600 h-5 w-5"
        />
        <span className="mr-0 flex items-center">
          <img
            src={RonImg}
            alt=""
            className='h-5 w-5 m0-1 pr-0'
          /> RON
        </span>
      </label>
      <label className="inline-flex items-center pl-1">
        <input
          type="radio"
          value="USD"
          checked={selectedOption === 'USD'}
          onChange={() => handleRadioChange('USD')}
          className="form-radio text-indigo-600 h-5 w-5"
        />
        <span className="ml-1">$USD</span>
      </label>
    </div>
  );
};

export default ToggleComponent;
