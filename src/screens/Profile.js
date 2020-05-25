import React from 'react';

import { useRouter } from '../router/';

function Profile(props) {
  const { params } = useRouter();

  return (
    <h1>Profile {params.userId}</h1>
  );
}

export default Profile;
