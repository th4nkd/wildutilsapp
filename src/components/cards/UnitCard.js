import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import PriceViewer from '../extra/PriceViewer';
import PriceLinkViewer from '../extra/PriceLinkViewer';

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
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">
            <PriceLinkViewer price={c_price} link={RONIN_MARKETPLACE_URL + '?rarity=common&type=' + unit.name.toLowerCase()} />
          </span>
        </div>
        <div className="bg-uncommonColor rounded-md pl-1 m-0 mb-0.5 flex justify-between items-center">
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">Uncommon</span>
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">
            <PriceLinkViewer price={u_price} link={RONIN_MARKETPLACE_URL + '?rarity=uncommon&type=' + unit.name.toLowerCase()} />
          </span>
        </div>
        <div className="bg-rareColor rounded-md pl-1 m-0 mb-0.5 flex justify-between items-center">
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">Rare</span>
          <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base">
            <PriceLinkViewer price={r_price} link={RONIN_MARKETPLACE_URL + '?rarity=rare&type=' + unit.name.toLowerCase()} />
          </span>
        </div>
      </div>
      {hasWalletData && (
          <div className="text-center pb-2 pl-2 pr-2 pt-1">
            <hr className="border-1 border-accent1 mt-1 mb-2" />
            <p className="text-textSecondary font-semibold mb-1 text-sm sm:text-base md:text-base lg:text-base">In Wallet</p>
            <div className="border-0 border-commonColor rounded-t-lg rounded-md pl-2 pr-2 m-0 mb-0.5 flex justify-between items-center">
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${c_amount === 0 ? 'text-textSecondary' : 'text-commonColor'}`}>{c_amount === 0 ? 'Common' : c_amount + 'x Common '}</span>
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${c_amount === 0 ? 'text-textSecondary' : 'text-commonColor'}`}>{c_amount === 0 ? 'None' :  <PriceViewer price={c_total} size={'sm'} color={total == 0 ? 'textSecondary' : 'text-commonColor'}/>}</span>
            </div>
            <div className="border-0 border-uncommonColor rounded-t-lg rounded-md pl-2 pr-2 m-0 mb-0.5 flex justify-between items-center">
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${u_amount === 0 ? 'text-textSecondary' : 'text-uncommonColor'}`}>{u_amount === 0 ? 'Uncommon' : u_amount + 'x Uncommon '}</span>
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${u_amount === 0 ? 'text-textSecondary' : 'text-uncommonColor'}`}>{u_amount === 0 ? 'None' : <PriceViewer price={u_total} size={'sm'} color={total == 0 ? 'textSecondary' : 'text-uncommonColor'}/>}</span>
            </div>
            <div className="border-0 border-rareColor rounded-t-lg rounded-md pl-2 pr-2 m-0 mb-0.5 flex justify-between items-center">
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${r_amount === 0 ? 'text-textSecondary' : 'text-rareColor'}`}>{r_amount === 0 ? 'Rare' : r_amount + 'x Rare '}</span>
              <span className={`font-semibold text-sm sm:text-sm md:text-sm lg:text-base text-right ${r_amount === 0 ? 'text-textSecondary' : 'text-rareColor'}`}>{r_amount === 0 ? 'None' : <PriceViewer price={r_total} size={'sm'} color={total == 0 ? 'textSecondary' : 'text-rareColor'}/>}</span>
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
  
  export default UnitCard;