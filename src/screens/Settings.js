import React from 'react';

import { back } from '../router/utils';

function Settings(props) {
  const handleClick = (e) => {
    back();
  };

  return (
    <div>
      <h1>Settings</h1>
      <button type='button' onClick={handleClick}>Back</button>
    </div>
  );
}

export default Settings;
