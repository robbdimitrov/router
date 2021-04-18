import React from 'react';

import { Link } from '../router';

function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <Link href='/home'>Home</Link>
        </li>
        <li>
          <Link href='/users/10'>Profile</Link>
        </li>
        <li>
          <Link href='/settings'>Settings</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
