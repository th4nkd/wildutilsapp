import React, { useState } from 'react';
import Background from '../assets/images/logo.jpeg';
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
        }}
      >
        <div className="z-10 text-white text-center bg-primary bg-opacity-70 rounded-md pt-10 pb-4 pl-4 pr-4 max-w-screen-sm w-full">
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
              className="py-3 px-8 bg-primary rounded-r-md text-white"
              onClick={handleSearch}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <div className="p-3 rounded-md mt-4 text-white text-sm text-center">
            All prices presented are data collected directly from the Mavis Marketplace every hour.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
