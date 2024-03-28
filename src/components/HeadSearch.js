import React, { useContext, useState, useEffect } from 'react';
import headBg from '../assets/images/head-bg.png';
import ToggleComponent from './extra/ToggleComponent';
import RonIcon from '../assets/images/ron-1.png';
import ToggleContext from './extra/ToggleContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const HeadSearch = () => {
  const location = useLocation();
  const [address, setAddress] = useState('');
  const [invalidAddress, setInvalidAddress] = useState('');

  const handleSearch = () => {
    window.location.href = `/market?address=${encodeURIComponent(address)}`;
  };

  const { ronPrice } = useContext(ToggleContext);
  let price_ron = 0;

  if (ronPrice) price_ron = parseFloat(ronPrice.toString()).toFixed(2);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const addrs = queryParams.get('address');
    const regex = /^0x[a-fA-F0-9]{40}$/;

    setInvalidAddress('');
    console.log(addrs);
    if (!regex.test(addrs) && addrs !== null && addrs !== undefined && addrs !== '')
        setInvalidAddress(addrs);
  }, []);

  return (
    <div>
    {invalidAddress !== '' && <div className=" text-sm sm:text-sm md:text-sm lg:text-sm text-red-200 mt-2 bg-red-900">Invalid Address: {invalidAddress}</div>}
    <div className="w-80vw mx-auto mt-8">
      <div className="relative border-2 border-accent1 rounded-md">
        <div
          style={{
            backgroundImage: `url(${headBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            padding: '10px',
          }}
        >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div className=" justify-between">
                  <div className="bg-primary bg-opacity-70 rounded-lg p-5 text-sm sm:text-base md:text-lg lg:text-lg flex w-full pt-7 pb-8  border-2 border-accent1 rounded-t-lg">
                    <div className="flex-1 pr-5 border-r-2 border-accent1">
                      <h2 className="text-textPrimary font-semibold pb-2">RONIN PRICE</h2>
                      <div className="flex justify-center mb-3">
                        <div className="flex items-center">
                          <img src={RonIcon} width={24} height={24} className="mr-1" alt="Ron Icon" />
                          <p className="text-textPrimary font-semibold mb-0">{price_ron} $</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 pl-5">
                      <div className="flex justify-center mb-2">
                        <h2 className="text-textPrimary font-semibold mb-0">Display Values In</h2>
                      </div>
                      <div className="flex justify-center">
                        <ToggleComponent />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='rounded-lg'>
                  <div className="bg-primary bg-opacity-70 rounded-lg p-7 text-sm sm:text-base md:text-lg lg:text-lg border-2 border-accent1 rounded-t-lg">
                    <div className="flex justify-center mb-2">
                        <h2 className="text-textPrimary font-semibold mb-0">View Address Dashboard</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <input
                            type="text"
                            placeholder="Ronin Address: 0x...."
                            className="py-2 px-2 w-80 rounded-l-md focus:outline-none text-secondary"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <button
                            className="py-2 px-6 bg-textSecondary rounded-r-md text-white"
                            onClick={handleSearch}
                        >
                        <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                  </div>
              </div>
            </div>
            <div className="text-right mt-4 mb-1">
              <hr className="border-1 border-accent1 pt-3 mb-1" />
              <span className="font-semibold text-sm sm:text-sm md:text-sm lg:text-sm text-right pr-1 text-textPrimary">The floor price is used to determine the value of each item</span>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeadSearch;
