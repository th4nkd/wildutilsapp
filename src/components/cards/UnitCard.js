import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

const RONIN_MARKETPLACE_URL = 'https://marketplace.skymavis.com/collections/0xa038c593115f6fcd673f6833e15462b475994879';

const UnitCard = ({ unit, marketData, walletData }) => {
    const hasMarketData = marketData && Object.keys(marketData).length > 0;
    const hasWalletData = walletData && Object.keys(walletData).length > 0;

    let c_price = 0, u_price = 0, r_price = 0;
    if (hasMarketData)
    {
      if (marketData.hasOwnProperty('c_price') && marketData.c_price !== null)
        c_price = parseFloat(marketData.c_price.toString()).toFixed(2);
      if (marketData.hasOwnProperty('u_price') && marketData.u_price !== null)
        u_price = parseFloat(marketData.u_price.toString()).toFixed(2);
      if (marketData.hasOwnProperty('r_price') && marketData.r_price !== null)
        r_price = parseFloat(marketData.r_price.toString()).toFixed(2);
    }

    let c_amount = 0, u_amount = 0, r_amount = 0, c_total = 0, u_total = 0, r_total = 0, total = 0;
    let c_t = 0, u_t = 0, r_t = 0;
    if (hasWalletData)
    {
      if (walletData.hasOwnProperty('common') && walletData.common !== null)
      {
        c_amount = walletData.common;
        c_t = c_price * c_amount;
      }
      
      if (walletData.hasOwnProperty('uncommon') && walletData.uncommon !== null)
      {
        u_amount = walletData.uncommon;
        u_t = u_price * u_amount;
      }

      if (walletData.hasOwnProperty('rare') && walletData.rare !== null)
      {
        r_amount = walletData.rare;
        r_t = r_price * r_amount;
      }
      
      c_total = parseFloat(c_t.toString()).toFixed(2);
      u_total = parseFloat(u_t.toString()).toFixed(2);
      r_total = parseFloat(r_t.toString()).toFixed(2);

      const t_t = c_t + u_t + r_t;
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
        <div className="bg-commonColor rounded-md pl-1 m-0 mb-0.5 flex justify-between items-center">
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">Common</span>
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">{c_price}
          <FontAwesomeIcon icon={faExternalLink} size="sm" className="text-white cursor-pointer ml-1 pr-1" title="View in Mavis Market" onClick={() => { window.open(RONIN_MARKETPLACE_URL + '?rarity=common&type=' + unit.name.toLowerCase(), '_blank'); }} />
          </span>
        </div>
        <div className="bg-uncommonColor rounded-md pl-1 m-0 mb-0.5 flex justify-between items-center">
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">Uncommon</span>
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">{u_price}
          <FontAwesomeIcon icon={faExternalLink} size="sm" className="text-white cursor-pointer ml-1 pr-1" title="View in Mavis Market" onClick={() => { window.open(RONIN_MARKETPLACE_URL + '?rarity=uncommon&type=' + unit.name.toLowerCase(), '_blank'); }} />
          </span>
        </div>
        <div className="bg-rareColor rounded-md pl-1 m-0 mb-0.5 flex justify-between items-center">
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">Rare</span>
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">{r_price}
          <FontAwesomeIcon icon={faExternalLink} size="sm" className="text-white cursor-pointer ml-1 pr-1" title="View in Mavis Market" onClick={() => { window.open(RONIN_MARKETPLACE_URL + '?rarity=rare&type=' + unit.name.toLowerCase(), '_blank'); }} />
          </span>
        </div>
      </div>
      {hasWalletData && (
          <div className="text-center pb-2 pl-2 pr-2 pt-1">
            <hr className="border-1 border-accent1 mt-1 mb-2" />
            <p className="text-textSecondary font-semibold mb-1 text-sm sm:text-base md:text-base lg:text-base">In Wallet</p>
            <div className="border-2 border-commonColor rounded-t-lg rounded-md pl-2 pr-2 m-0 mb-0.5 flex justify-between items-center">
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${c_amount === 0 ? 'text-textSecondary' : 'text-textPrimary'}`}>{c_amount === 0 ? '' : c_amount + ' x'}</span>
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${c_amount === 0 ? 'text-textSecondary' : 'text-textPrimary'}`}>{c_amount === 0 ? 'None' : c_total}</span>
            </div>
            <div className="border-2 border-uncommonColor rounded-t-lg rounded-md pl-2 pr-2 m-0 mb-0.5 flex justify-between items-center">
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${u_amount === 0 ? 'text-textSecondary' : 'text-textPrimary'}`}>{u_amount === 0 ? '' : u_amount + ' x'}</span>
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${u_amount === 0 ? 'text-textSecondary' : 'text-textPrimary'}`}>{u_amount === 0 ? 'None' : u_total}</span>
            </div>
            <div className="border-2 border-rareColor rounded-t-lg rounded-md pl-2 pr-2 m-0 mb-0.5 flex justify-between items-center">
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${r_amount === 0 ? 'text-textSecondary' : 'text-textPrimary'}`}>{r_amount === 0 ? '' : r_amount + ' x'}</span>
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${r_amount === 0 ? 'text-textSecondary' : 'text-textPrimary'}`}>{r_amount === 0 ? 'None' : r_total}</span>
            </div>
            <hr className="border-1 border-accent1 mt-3" />
          <div className="rounded-md m-0 mb-0.5 mt-1 flex justify-between items-center">
            <p className="text-textPrimary font-semibold mb-1 ml-2 text-sm sm:text-base md:text-base lg:text-base text-left">Total: </p>
            <p className="text-textPrimary font-semibold mb-1 mr-2 text-sm sm:text-base md:text-base lg:text-base text-right">{total}</p>
          </div>
          </div>
        )}
    </div>
    );
  }
  
  export default UnitCard;