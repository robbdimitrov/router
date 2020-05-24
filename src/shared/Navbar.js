import React from 'react';

import Link from '../router/Link';

function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <Link href='/home' className='home' activeLink='active'>Home</Link>
        </li>
        <li>
          <Link href='/users/10' activeLink='active'>Profile</Link>
        </li>
        <li>
          <Link href='/settings' activeLink='active'>Settings</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
