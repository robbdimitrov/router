import React from 'react';

function Navbar() {
  return (
    <header>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/users/10">Profile</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </header>
  );
}

export default Navbar;
