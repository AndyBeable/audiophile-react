import React from 'react';
import Speaker from '../assets/shared/desktop/image-speakers.png';
import './SpeakerHighlightCard.scss';

const SpeakerHighlightCard = () => {
  return (
    <div className='image_container'>
      <img src={Speaker} />
    </div>
  );
};

export default SpeakerHighlightCard;
