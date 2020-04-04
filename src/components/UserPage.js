import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions/userActions';

const UserPage = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    //need to set user in state here?
    dispatch(fetchUser(text)
    );
  };

  return (
    <>
      <h1>Github Displayer</h1>
      <form onSubmit={handleSubmit}>
        <h2>Input Github Username</h2>
        <input type="text" value= {text} onChange={({ target }) => setText(target.value)}/>
        <button>Submit</button>
      </form>
    </>
  );

};

export default UserPage;
