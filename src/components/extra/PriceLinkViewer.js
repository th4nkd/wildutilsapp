import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import PriceViewer from './PriceViewer';

const PriceLinkViewer = ({ price, link }) => {
  return (
    <span className="text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-base" style={{ display: 'inline-flex', alignItems: 'center' }}>      
        <PriceViewer price={price} size={'md'} color={'white'} />
        <FontAwesomeIcon
            icon={faExternalLink}
            size="sm"
            className="text-white cursor-pointer ml-1 pr-1"
            title="View in Mavis Marketplace"
            onClick={() => {
            window.open(link, '_blank');
            }}
        />
    </span>
  );
};

export default PriceLinkViewer;
