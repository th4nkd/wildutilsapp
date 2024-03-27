import React, { useContext } from 'react';
import headBg from '../assets/images/head-bg.png';
import PriceTextViewer from './extra/PriceTextViewer';
import ToggleComponent from './extra/ToggleComponent';
import RonIcon from '../assets/images/ron-1.png';
import ToggleContext from './extra/ToggleContext';

const Head = ({ dashboardData }) => {
  const { ronPrice } = useContext(ToggleContext);
  let price_ron = 0;

  if (ronPrice) price_ron = parseFloat(ronPrice.toString()).toFixed(2);

console.log(dashboardData);

  return (
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
                  <div className="bg-primary bg-opacity-70 rounded-lg p-5 text-sm sm:text-base md:text-lg lg:text-lg flex w-full pt-7 pb-7  border-2 border-accent1 rounded-t-lg">
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
                  <div className="bg-primary bg-opacity-70 rounded-lg p-1 text-sm sm:text-base md:text-lg lg:text-lg border-2 border-accent1 rounded-t-lg">
                    <h2 className="text-textPrimary font-semibold p-4">RONIN WALLET: {dashboardData.wallet}</h2>
                    <hr className="border-1 border-accent1 mt-0 mb-1" />
                    <h2 className="text-textPrimary font-semibold p-4"><PriceTextViewer price={dashboardData.general.total.toFixed(2)} size={'lg'} color={'text-textPrimary'} textFront={'TOTAL VALUE: '}/></h2>
                  </div>
                  <h2 className="font-semibold text-textPrimary text-sm sm:text-base md:text-lg lg:text-lg mt-4">Units</h2>
                  <hr className="border-1 border-accent1 mt-0 mb-1" />
                  <div className="grid grid-cols-4 gap-4 text-white mb-3">
                    <div className="text-commonColor font-semibold">
                      <p className="text-sm sm:text-base md:text-lg lg:text-lg">{dashboardData.units.c_amount}</p>
                      <p>Common</p>
                      <p className="pt-2"><PriceTextViewer price={dashboardData.units.c_total.toFixed(2)} size={'lg'} color={'text-commonColor'} /></p>
                    </div>
                    <div className="text-uncommonColor font-semibold">
                      <p className="text-sm sm:text-base md:text-lg lg:text-lg">{dashboardData.units.u_amount}</p>
                      <p>Uncommon</p>
                      <p className="pt-2"><PriceTextViewer price={dashboardData.units.u_total.toFixed(2)} size={'lg'} color={'text-uncommonColor'}/></p>
                    </div>
                    <div className="text-rareColor font-semibold">
                      <p className="text-sm sm:text-base md:text-lg lg:text-lg">{dashboardData.units.r_amount}</p>
                      <p>Rare</p>
                      <p className="pt-2"><PriceTextViewer price={dashboardData.units.r_total.toFixed(2)} size={'lg'} color={'text-rareColor'}/></p>
                    </div>
                    <div className="text-textPrimary font-semibold">
                      <p className="text-sm sm:text-base md:text-lg lg:text-lg">{dashboardData.units.amount}</p>
                      <p>Total</p>
                      <p className="pt-2"><PriceTextViewer price={dashboardData.units.total.toFixed(2)} size={'lg'} color={'text-textPrimary'}/></p>
                    </div>
                  </div>

                  <h2 className="font-semibold text-textPrimary text-sm sm:text-base md:text-lg lg:text-lg pt-3">Skins</h2>
                  <hr className="border-1 border-accent1 mt-0 mb-1" />
                  <div className="grid grid-cols-3 gap-3 text-white mb-3">
                    <div className="text-epicColor font-semibold">
                      <p className="text-sm sm:text-base md:text-lg lg:text-lg">{dashboardData.skins.e_amount}</p>
                      <p>Epic</p>
                      <p className="pt-2"><PriceTextViewer price={dashboardData.skins.e_total.toFixed(2)} size={'lg'} color={'text-epicColor'}/></p>
                    </div>
                    <div className="text-legendaryColor font-semibold">
                      <p className="text-sm sm:text-base md:text-lg lg:text-lg">{dashboardData.skins.l_amount}</p>
                      <p>Legendary</p>
                      <p className="pt-2"><PriceTextViewer price={dashboardData.skins.l_total.toFixed(2)} size={'lg'} color={'text-legendaryColor'} /></p>
                    </div>
                    <div className="text-textPrimary font-semibold">
                      <p className="text-sm sm:text-base md:text-lg lg:text-lg">{dashboardData.skins.amount}</p>
                      <p>Total</p>
                      <p className="pt-2"><PriceTextViewer price={dashboardData.skins.total.toFixed(2)} size={'lg'} color={'text-textPrimary'} /></p>
                    </div>
                  </div>

                  <h2 className="font-semibold text-textPrimary text-sm sm:text-base md:text-lg lg:text-lg pt-3">Lords</h2>
                  <hr className="border-1 border-accent1 mt-0 mb-1" />
                  <div className="grid grid-cols-1 gap-1 text-white mb-3">
                  {dashboardData.lords.lords.map((lord, index) => (
                    <div key={index} className={`text-${lord.type}Color font-semibold`}>
                      <p className="pt-2">
                        <PriceTextViewer price={lord.total.toFixed(2)} size={'lg'} color={'text-textPrimary'} text={''} textFront={lord.name + ": "} />
                      </p>
                    </div>
                  ))}
                  </div>
                  
                  <h2 className="font-semibold text-textPrimary text-sm sm:text-base md:text-lg lg:text-lg pt-3">Packs</h2>
                  <hr className="border-1 border-accent1 mt-0 mb-1" />
                  <div className="grid grid-cols-1 gap-1 text-white mb-3">
                  {dashboardData.packs.packs.map((pack, index) => (
                    <div key={index} className={`text-textPrimary font-semibold`}>
                      <p className="pt-2">
                        <PriceTextViewer price={pack.total.toFixed(2)} size={'lg'} color={'text-textPrimary'} text={''} textFront={pack.name + ": "} />
                      </p>
                    </div>
                  ))}
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
