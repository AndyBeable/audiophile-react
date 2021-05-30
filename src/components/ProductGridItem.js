import React from 'react';
import './ProductGridItem.scss';
import Speakers from '../assets/shared/desktop/image-headphones.png';

const ProductGridItem = () => {
  return (
    <div className='card'>
      <div className='img_container'>
        <img src={Speakers} alt='' className='productImg' />
      </div>
    </div>
  );
};

export default ProductGridItem;
