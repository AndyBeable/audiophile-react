import React from 'react';
import ProductGridItem from './ProductGridItem';
import './ProductGrid.scss';
const ProductGrid = () => {
  return (
    <div className='card_container'>
      <ProductGridItem />
      <ProductGridItem />
      <ProductGridItem />
    </div>
  );
};

export default ProductGrid;
