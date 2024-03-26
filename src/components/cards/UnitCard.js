import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

const UnitCard = ({ card }) => {
    return (
    <div key={card.id} className="bg-secondary rounded-lg shadow-md overflow-hidden m-2 border-2 border-b-0 border-accent1 rounded-t-lg relative">
      <img
        src={card.img}
        alt="Product"
        className="w-full h-30 object-cover mb-4 rounded-t-lg"
        style={{ marginTop: '-1rem', marginBottom: '0', marginRight: '-1px' }}
      />
      <div className="bottom-0 left-0 top-0 right-0">
        <p className="text-lg font-semibold text-center bg-accent1">{card.name}</p>
      </div>
      <div className="text-center pb-2 pl-2 pr-2 pt-1">
        <p className="text-textSecondary font-semibold mb-1">Market Price</p>
        <div className="bg-commonColor rounded-md pl-3 m-0 mb-0.5 flex justify-between items-center">
          <span className="text-white font-semibold">Common</span>
          <span className="text-white font-semibold">0.9
          <FontAwesomeIcon icon={faExternalLink} className="text-white cursor-pointer ml-2 pr-1" onClick={() => { /* Adicione a lógica de redirecionamento aqui */ }} />
          </span>
        </div>
        <div className="bg-uncommonColor rounded-md pl-3 m-0 mb-0.5 flex justify-between items-center">
          <span className="text-white font-semibold">Uncommon</span>
          <span className="text-white font-semibold">0.9
          <FontAwesomeIcon icon={faExternalLink} className="text-white cursor-pointer ml-2 pr-1" onClick={() => { /* Adicione a lógica de redirecionamento aqui */ }} />
          </span>
        </div>
        <div className="bg-rareColor rounded-md pl-3 m-0 mb-0.5 flex justify-between items-center">
          <span className="text-white font-semibold">Rare</span>
          <span className="text-white font-semibold">0.9
          <FontAwesomeIcon icon={faExternalLink} className="text-white cursor-pointer ml-2 pr-1" onClick={() => { /* Adicione a lógica de redirecionamento aqui */ }} />
          </span>
        </div>
      </div>
    </div>
    );
  }
  
  export default UnitCard;