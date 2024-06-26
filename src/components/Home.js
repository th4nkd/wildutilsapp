import React, { useState } from 'react';
import Background from '../assets/images/bg.png';
import Logo from '../assets/images/logo.png';
import Menu from './Menu';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [address, setAddress] = useState('');

  const handleSearch = () => {
    window.location.href = `/market?address=${encodeURIComponent(address)}`;
  };

  return (
    <div className="relative min-h-screen flex flex-col ff">
      <Menu />

      <div
  className="flex-1 flex justify-center items-center bg-black bg-opacity-80"
  style={{
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
  }}
      >
        <div className="z-10 text-white text-center rounded-md pt-10 pb-4 pl-4 pr-4 max-w-screen-md w-full">
          <img
            src={Logo}
            className="max-w-48 mx-auto mb-4"
            alt="Logo"
          />

          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Ronin Address: 0x...."
              className="py-3 px-6 w-96 rounded-l-md focus:outline-none text-secondary"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button
              className="py-3 px-8 bg-orange-400 rounded-r-md text-white"
              onClick={handleSearch}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <div className="p-3 mt-1 text-white text-sm text-center font-semibold">
          All data presented are collected directly from the <br />Mavis Marketplace and Ronin Services 
          </div>
        </div>
      </div>

      <Footer full={false} />
    </div>
  );
};

export default Home;
