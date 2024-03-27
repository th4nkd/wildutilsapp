import React, { useContext } from 'react';
import headBg from '../assets/images/head-bg.png';
import PriceTextViewer from './extra/PriceTextViewer';
import ToggleComponent from './extra/ToggleComponent';
import RonIcon from '../assets/images/ron-1.png';
import ToggleContext from './extra/ToggleContext';

const Head = () => {
  const { ronPrice } = useContext(ToggleContext);
  let price_ron = 0;

  if (ronPrice) price_ron = parseFloat(ronPrice.toString()).toFixed(2);

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
              <div className="bg-primary bg-opacity-70 rounded-lg p-5 text-sm sm:text-base md:text-lg lg:text-lg flex w-full">
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
                <h2 className="text-textPrimary font-semibold">RONIN WALLET</h2>
                <p className="text-textPrimary font-semibold">0x31b.......6e9</p>
              </div>
              <h2 className="font-semibold text-textPrimary text-sm sm:text-base md:text-lg lg:text-lg mt-4">Units</h2>
              <hr className="border-1 border-accent1 mt-0 mb-1" />
              <div className="grid grid-cols-4 gap-4 text-white mb-3">
                <div className="text-commonColor font-semibold">
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg">20</p>
                  <p>Common</p>
                  <p className="pt-2"><PriceTextViewer price={20} size={'lg'} color={'text-commonColor'} text={' (20$)'} /></p>
                </div>
                <div className="text-uncommonColor font-semibold">
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg">20</p>
                  <p>Uncommon</p>
                  <p className="pt-2"><PriceTextViewer price={20} size={'lg'} color={'text-uncommonColor'} text={' (20$)'} /></p>
                </div>
                <div className="text-rareColor font-semibold">
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg">20</p>
                  <p>Rare</p>
                  <p className="pt-2"><PriceTextViewer price={20} size={'lg'} color={'text-rareColor'} text={' (20$)'} /></p>
                </div>
                <div className="text-textPrimary font-semibold">
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg">20</p>
                  <p>Total</p>
                  <p className="pt-2"><PriceTextViewer price={20} size={'lg'} color={'text-textPrimary'} text={' (20$)'} /></p>
                </div>
              </div>

              <h2 className="font-semibold text-textPrimary text-sm sm:text-base md:text-lg lg:text-lg pt-3">Skins</h2>
              <hr className="border-1 border-accent1 mt-0 mb-1" />
              <div className="grid grid-cols-3 gap-3 text-white mb-3">
                <div className="text-epicColor font-semibold">
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg">20</p>
                  <p>Epic</p>
                  <p className="pt-2"><PriceTextViewer price={20} size={'lg'} color={'text-epicColor'} text={' (20$)'} /></p>
                </div>
                <div className="text-legendaryColor font-semibold">
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg">20</p>
                  <p>Legendary</p>
                  <p className="pt-2"><PriceTextViewer price={20} size={'lg'} color={'text-legendaryColor'} text={' (20$)'} /></p>
                </div>
                <div className="text-textPrimary font-semibold">
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg">20</p>
                  <p>Total</p>
                  <p className="pt-2"><PriceTextViewer price={20} size={'lg'} color={'text-textPrimary'} text={' (20$)'} /></p>
                </div>
              </div>

                    <h2 className="font-semibold text-textPrimary text-sm sm:text-base md:text-lg lg:text-lg pt-3">Packs</h2>
                    <hr className="border-1 border-accent1 mt-0 mb-1" />
                    <div className="grid grid-cols-1 gap-1 text-white mb-3">
                        <div className="text-rareColor font-semibold">
                            <p className="pt-2"><PriceTextViewer price={20} size={'lg'} color={'text-textPrimary'} text={' (20$)'} textFront={'1x Rare Lord '} /></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
