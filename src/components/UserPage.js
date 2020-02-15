import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions/userActions';

const UserPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(fetchUser);

  return (
    <h1>greetings from UserPage</h1>
  );

};

export default UserPage;
