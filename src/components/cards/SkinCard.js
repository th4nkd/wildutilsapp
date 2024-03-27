import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import PriceViewer from '../extra/PriceViewer';
import PriceLinkViewer from '../extra/PriceLinkViewer';

const RONIN_MARKETPLACE_URL = 'https://marketplace.skymavis.com/collections/0xa899849929e113315200609be208e6a0858f645c';

const SkinCard = ({ unit, marketData, walletData }) => {
    const hasMarketData = marketData && Object.keys(marketData).length > 0;
    const hasWalletData = walletData && Object.keys(walletData).length > 0;

    let e_price = 0, l_price = 0;
    if (hasMarketData)
    {
        if (marketData.hasOwnProperty('e_price') && marketData.e_price !== null)
            e_price = parseFloat(marketData.e_price.toString()).toFixed(2);
        if (marketData.hasOwnProperty('l_price') && marketData.l_price !== null)
            l_price = parseFloat(marketData.l_price.toString()).toFixed(2);
    }

    let e_amount = 0, l_amount = 0, e_total = 0, l_total = 0, total = 0;
    let e_t = 0, l_t = 0;
    if (hasWalletData)
    {
      if (walletData.hasOwnProperty('epic') && walletData.epic !== null)
      {
        e_amount = walletData.epic;
        e_t = e_price * e_amount;
      }
      
      if (walletData.hasOwnProperty('legendary') && walletData.legendary !== null)
      {
        l_amount = walletData.legendary;
        l_t = l_price * l_amount;
      }

      e_total = parseFloat(e_t.toString()).toFixed(2);
      l_total = parseFloat(l_t.toString()).toFixed(2);

      const t_t = e_t + l_t;
      total = parseFloat(t_t.toString()).toFixed(2);
    }

    return (
    <div key={unit.id} className="bg-secondary rounded-lg shadow-md overflow-hidden m-2 border-2 border-b-0 border-accent1 rounded-t-lg relative">
      <img
        src={unit.img}
        className="w-full h-30 object-cover mb-4 rounded-t-lg"
        style={{ marginTop: '-1rem', marginBottom: '0', marginRight: '-1px' }}
      />
      <div className="bottom-0 left-0 top-0 right-0">
        <p className="text-lg font-semibold text-center bg-accent1">{unit.name}</p>
      </div>
      <div className="text-center pb-2 pl-2 pr-2 pt-1">
        <p className="text-textSecondary font-semibold mb-1 text-sm sm:text-base md:text-base lg:text-base">Market Price</p>
        <div className="bg-epicColor rounded-md pl-1 m-0 mb-0.5 flex justify-between items-center">
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">Epic</span>
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base"><PriceLinkViewer price={e_price} link={RONIN_MARKETPLACE_URL + '?rarity=epic&type=' + unit.name.toLowerCase()} />
          </span>
        </div>
        <div className="bg-legendaryColor rounded-md pl-1 m-0 mb-0.5 flex justify-between items-center">
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">Legendary</span>
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base"><PriceLinkViewer price={l_price} link={RONIN_MARKETPLACE_URL + '?rarity=legendary&type=' + unit.name.toLowerCase()} />
          </span>
        </div>
      </div>
      {hasWalletData && (
          <div className="text-center pb-2 pl-2 pr-2 pt-1">
            <hr className="border-1 border-accent1 mt-1 mb-2" />
            <p className="text-textSecondary font-semibold mb-1 text-sm sm:text-base md:text-base lg:text-base">In Wallet</p>
            <div className="border-0 border-epicColor rounded-t-lg rounded-md pl-2 pr-2 m-0 mb-0.5 flex justify-between items-center">
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${e_amount === 0 ? 'text-textSecondary' : 'text-epicColor'}`}>{e_amount === 0 ? 'Epic' : e_amount + ' x Epic '}</span>
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${e_amount === 0 ? 'text-textSecondary' : 'text-epicColor'}`}>{e_amount === 0 ? 'None' : e_total}</span>
            </div>
            <div className="border-0 border-legendaryColor rounded-t-lg rounded-md pl-2 pr-2 m-0 mb-0.5 flex justify-between items-center">
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${l_amount === 0 ? 'text-textSecondary' : 'text-legendaryColor'}`}>{l_amount === 0 ? 'Legendary' : l_amount + ' x Legendary '}</span>
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${l_amount === 0 ? 'text-textSecondary' : 'text-legendaryColor'}`}>{l_amount === 0 ? 'None' : l_total}</span>
            </div>
            <hr className="border-1 border-accent1 mt-3" />
          <div className="rounded-md m-0 mb-0.5 mt-1 flex justify-between items-center">
            <p className={`font-semibold ml-2 text-sm sm:text-base md:text-lg lg:text-lg text-left ${total == 0 ? 'text-textSecondary' : 'text-textPrimary'}`}>Total: </p>
            <PriceViewer price={total} size={'lg'} color={total == 0 ? 'textSecondary' : 'white'}/>
          </div>
          </div>
        )}
    </div>
    );
  }
  
  export default SkinCard;