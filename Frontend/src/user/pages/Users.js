import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Gojo',
      places: 3,
      image: 'https://sm.mashable.com/t/mashable_in/photo/default/8ede538fcf75a0a1bd812810edb50cb7_733r.720.jpg'
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
