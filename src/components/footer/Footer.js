import React from 'react';
import './Footer.scss';
import FB from '../../assets/shared/desktop/icon-facebook.svg';
import TW from '../../assets/shared/desktop/icon-twitter.svg';
import IN from '../../assets/shared/desktop/icon-instagram.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_container'>
        <div className='footer_heading'>
          <h3>audiophile</h3>
        </div>
        <div className='footer_links_container'>
          <ul className='footer_links'>
            <li>Home</li>
            <li>Headphones</li>
            <li>Speakers</li>
            <li>Earphones</li>
          </ul>
        </div>
        <div className='footer_paragraph'>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
        </div>
        <div className='footer_copyright'>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
        <div className='footer_social'>
          <img src={FB} />
          <img src={TW} />
          <img src={IN} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
