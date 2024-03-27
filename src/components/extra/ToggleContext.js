import React, { useState, createContext } from 'react';

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState('ron');
  const [ronPrice, setRonPrice] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedOption(value);
    localStorage.setItem('selectedOption', value);
  };

  const setPriceRon = (price) => {
    setRonPrice(price);
  };

  return (
    <ToggleContext.Provider value={{ selectedOption, handleRadioChange, ronPrice, setPriceRon }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContext;
