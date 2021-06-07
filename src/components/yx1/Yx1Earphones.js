import React from 'react';
import Button from '../shared/Button/Button';
import YX1 from '../../assets/home/desktop/image-earphones-yx1.jpg';
import './Yx1Earphones.scss';

const Yx1Earphones = () => {
  return (
    <div className='yx1'>
      <div>
        <img src={YX1} className='yx1_img' />
      </div>
      <div className='yx1_content_container'>
        <h2 className='yx1_title'>YX1 Earphones</h2>
        <Button />
      </div>
    </div>
  );
};

export default Yx1Earphones;
