import React from 'react';

function Settings(props) {
  const handleClick = (e) => {
    // TODO: useRouter, call router.back
    // router.back();
  };

  return (
    <div>
      <h1>Settings</h1>
      <button type='button' onClick={handleClick}>Back</button>
    </div>
  );
}

export default Settings;
