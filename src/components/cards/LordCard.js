import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

const RONIN_MARKETPLACE_URL = 'https://marketplace.skymavis.com/collections/0xa899849929e113315200609be208e6a0858f645c';

const LordCard = ({ unit, marketData, walletData }) => {
    const hasMarketData = marketData && Object.keys(marketData).length > 0;
    const hasWalletData = walletData && Object.keys(walletData).length > 0;

    let price = 0;
    if (hasMarketData)
    {
        if (marketData.hasOwnProperty('price') && marketData.price !== null)
            price = parseFloat(marketData.price.toString()).toFixed(2);
    }

    let amount = 0, a_t = 0, total = 0;
    if (hasWalletData)
    {
      if (walletData.hasOwnProperty('amount') && walletData.amount !== null)
      {
        amount = walletData.amount;
        a_t = price * amount;
      }
      
      total = parseFloat(a_t.toString()).toFixed(2);
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
        <div className={`bg-${unit.id}Color rounded-md pl-1 m-0 mb-0.5 flex justify-between items-center`}>
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">{unit.rarity}</span>
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">{price}
          <FontAwesomeIcon icon={faExternalLink} size="sm" className="text-white cursor-pointer ml-1 pr-1" title="View in Mavis Market" onClick={() => { window.open(RONIN_MARKETPLACE_URL + '?rarity=common&type=' + unit.name.toLowerCase(), '_blank'); }} />
          </span>
        </div>
      </div>
      {hasWalletData && (
          <div className="text-center pb-2 pl-2 pr-2 pt-1">
            <hr className="border-1 border-accent1 mt-1 mb-2" />
            <p className="text-textSecondary font-semibold mb-1 text-sm sm:text-base md:text-base lg:text-base">In Wallet</p>
            <div className={`border-2 border-${unit.id}Color rounded-t-lg rounded-md pl-2 pr-2 m-0 mb-0.5 flex justify-between items-center`}>
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${amount === 0 ? 'text-textSecondary' : 'text-textPrimary'}`}>{amount === 0 ? '' : amount + ' x'}</span>
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${amount === 0 ? 'text-textSecondary' : 'text-textPrimary'}`}>{amount === 0 ? 'None' : total}</span>
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
  
  export default LordCard;