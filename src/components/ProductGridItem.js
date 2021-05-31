import React from 'react';
import './ProductGridItem.scss';

const ProductGridItem = (props) => {
  return (
    <div className='card'>
      <div className='img_container'>
        <img src={props.img} alt='' className='productImg' />
      </div>
      <div className='link_container'>
        <h6 className='category_title'>{props.category}</h6>
      </div>
    </div>
  );
};

export default ProductGridItem;
