import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions/userActions';

const UserPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(fetchUser);

  const [text, setText] = useState();

  return (
    <>
      <h1>Github Displayer</h1>
      <form>
        <h2>Input Github Username</h2>
        <input type="text" value= { text }/>
        <button onSubmit={setText}>Submit</button>
      </form>
    </>
  );

};

export default UserPage;
