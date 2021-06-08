import React from 'react';
import '../hero/Hero.scss';
import { Button } from '../shared/Button/Button';

function Hero() {
  return (
    <section className='section'>
      <div className='wrapper'>
        <div className='content'>
          <span className='tagline'>New product</span>
          <h1 className='title'>XX99 Mark II Headphone</h1>
          <p className='description'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button buttonStyle='btn--primary'>See Product</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
