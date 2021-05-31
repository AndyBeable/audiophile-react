import React from 'react';
import ProductGridItem from './ProductGridItem';
import './ProductGrid.scss';
import Headphones from '../assets/shared/desktop/image-headphones.png';
import Speakers from '../assets/shared/desktop/image-speakers.png';
import Earphones from '../assets/shared/desktop/image-earphones.png';

const ProductGrid = () => {
  return (
    <div className='card_container'>
      <ProductGridItem img={Headphones} category='Headphones' />
      <ProductGridItem img={Speakers} category='Speakers' />
      <ProductGridItem img={Earphones} category='Earphones' />
    </div>
  );
};

export default ProductGrid;
