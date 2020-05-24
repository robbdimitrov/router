import React from 'react';

function Profile(props) {
  const { params } = props;

  return (
    <div>
      <h1>Profile {params.userId}</h1>
    </div>
  );
}

export default Profile;
