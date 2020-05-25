import React from 'react';

import { useRouter } from '../router/';

function Settings(props) {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div>
      <h1>Settings</h1>
      <button type='button' onClick={handleClick}>Back</button>
    </div>
  );
}

export default Settings;
