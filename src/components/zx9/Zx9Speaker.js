import React from 'react';
import './Zx9Speaker.scss';
import ZX9 from '../../assets/home/desktop/image-speaker-zx9.png';
import Button from '../shared/Button/Button';

const Zx9Speaker = () => {
  return (
    <div className='zx9'>
      <div className='zx9_content_container'>
        <img src={ZX9} />
        <h2 className='zx9_title'>ZX9 Speaker</h2>
        <p className='zx9_copy'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound
        </p>
        <Button className='secondary' />
      </div>
    </div>
  );
};

export default Zx9Speaker;
