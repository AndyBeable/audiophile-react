import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          Audiophile
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
