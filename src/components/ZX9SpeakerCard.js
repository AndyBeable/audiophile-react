import React from 'react';
import Speaker from '../assets/shared/desktop/image-speakers.png';
import './ZX9SpeakerCard.scss';
import Button from './shared/Button/Button';

const ZX9SpeakerCard = () => {
  return (
    <div className='speaker_container'>
      <img src={Speaker} />
      <div className='speaker_highlight_copy'>
        <h2>ZX9 Speaker</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default ZX9SpeakerCard;
