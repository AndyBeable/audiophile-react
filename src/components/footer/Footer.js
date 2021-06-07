import React from 'react';
import './Footer.scss';

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
        <div>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
        </div>
        <div>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
