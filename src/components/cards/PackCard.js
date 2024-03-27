import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import PriceViewer from '../extra/PriceViewer';

const RONIN_MARKETPLACE_URL = 'https://marketplace.skymavis.com/collections/0x0328b534d094b097020b4538230f998027a54db0';

const PackCard = ({ unit, marketData, walletData }) => {
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
    <div key={unit.id} className="bg-secondary rounded-lg shadow-md overflow-hidden m-2 border-2 border-b-0 border-accent1 rounded-t-lg relative pt-5">
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
        
          <div className="text-white font-semibold text-sm sm:text-sm md:text-lg lg:text-lg"> <PriceViewer price={price} size={'lg'} color={'textPrimary'} />
          </div>
          <div className="text-center mt-2">
            Open in Mavis 
          <FontAwesomeIcon icon={faExternalLink} size="sm" className="text-white cursor-pointer ml-2 pr-1" title="View in Mavis Market" onClick={() => { window.open(RONIN_MARKETPLACE_URL + '/' + unit.n, '_blank'); }} />
          </div>
        
      </div>
      {hasWalletData && (
          <div className="text-center pb-2 pl-2 pr-2 pt-1">
            <hr className="border-1 border-accent1 mt-1 mb-2" />
            <p className="text-textSecondary font-semibold mb-1 text-sm sm:text-base md:text-base lg:text-base">In Wallet</p>
            <span className={`font-semibold text-sm sm:text-sm md:text-lg lg:text-lg text-right ${amount === 0 ? 'text-textSecondary' : 'text-textPrimary'}`}>{amount === 0 ? 'None' : amount + ' x'}</span>
            <hr className="border-1 border-accent1 mt-3" />
          <div className="rounded-md m-0 mb-0.5 mt-1 flex justify-between items-center">
          <p className={`font-semibold ml-2 text-sm sm:text-base md:text-lg lg:text-lg text-left ${total == 0 ? 'text-textSecondary' : 'text-textPrimary'}`}>Total: </p>
          <PriceViewer price={total} size={'lg'} color={total == 0 ? 'textSecondary' : 'white'}/>
          </div>
          </div>
        )}
        <span class="bg-mysticColor border-mysticColor border-0 opacity-0"></span>
    </div>
    );
  }
  
  export default PackCard;