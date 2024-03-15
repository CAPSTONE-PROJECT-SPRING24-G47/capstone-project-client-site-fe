import React, { useEffect, useState } from 'react';
import { getUser } from '../../api/service/user';

const GetAuthor = ({ userId }) => {
  const [user, setUser] = useState(null);
  console.log(userId);

  useEffect(() => {
    async function fetchData() {
      const response = await getUser(userId);

      if (response) {
        setUser(response?.data?.data[0]);
      }
    }
    fetchData();
  }, []);
  return <>{user?.lastName + ' ' + user?.firstName}</>;
};

export default GetAuthor;
