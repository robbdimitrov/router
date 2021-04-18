import React from 'react';

import {useRouter} from '../router';

function Profile(props) {
  const router = useRouter();

  const handleClick = () => {
    router.navigate('/settings');
  };

  return (
    <div className="container">
      <h1>Profile {router.params.userId}</h1>
      <button type='button' onClick={handleClick}>
        Open Settings
      </button>
    </div>
  );
}

export default Profile;
