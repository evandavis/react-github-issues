import React from 'react';

const UserDisplay = ({user, className}) => {
  return (
    <div className={`user-display ${className}`}>
      <img src={`${user.avatar_url}&s=32`} alt={user.login} className='user-display-avatar' />
      <span className='user-display-name'>{user.login}</span>
    </div>
  );
}

export default UserDisplay;

