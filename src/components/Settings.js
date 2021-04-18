import React from 'react';

import {useRouter} from '../../src/router';

function Settings(props) {
  const router = useRouter();

  const handleClick = () => {
    router.navigate('/users/12');
  };

  return (
    <div>
      <h1>Settings</h1>
      <button type='button' onClick={handleClick}>
        Profile
      </button>
    </div>
  );
}

export default Settings;
