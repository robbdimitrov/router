import React, { useContext } from 'react';

import { RouterContext } from '../router/Router';

function Profile(props) {
  const { params } = useContext(RouterContext);

  return (
    <h1>Profile {params.userId}</h1>
  );
}

export default Profile;
