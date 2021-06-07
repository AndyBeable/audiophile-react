import React from 'react';
import '../productGrid/ProductGridItem.scss';
import Chevron from '../../assets/shared/desktop/icon-arrow-right.svg';

const ProductGridItem = (props) => {
  return (
    <div className='card'>
      <div className='img_container'>
        <img src={props.img} alt='' className='productImg' />
      </div>
      <div className='link_container'>
        <h6 className='category_title'>{props.category}</h6>
        <a href='#'>Shop</a>
        <img src={Chevron} />
      </div>
    </div>
  );
};

export default ProductGridItem;
