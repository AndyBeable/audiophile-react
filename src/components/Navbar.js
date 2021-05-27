import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          audiophile
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/headphones'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Headphones
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/speakers'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Speakers
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/earphones'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Earphones
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
