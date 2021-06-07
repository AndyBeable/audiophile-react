import React from 'react';
import Gear from '../../assets/shared/desktop/image-best-gear.jpg';
import './AudioGear.scss';

const AudioGear = () => {
  return (
    <div className='audiogear_container'>
      <div className='audiogear_img_container'>
        <img src={Gear} className='audiogear_img' />
      </div>
      <div className='audiogear_copy_container'>
        <h2>
          Bringing you the <span className='audiogear_copy_span'>best </span>
          audio gear
        </h2>
        <p className='audiogear_paragraph'>
          Located at the heart New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers and audio accessories. We
          have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products. Stop by our
          store to mee some of the fantastic people who make Audiophile the best
          place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default AudioGear;
