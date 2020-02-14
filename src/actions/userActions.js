import { getUser } from '../services/getUser';

export const FETCH_USER = 'FETCH_USER';
export const fetchUser = () => dispatch => {
  return getUser()
    .then(user => dispatch({
      type: FETCH_USER,
      payload: user
    }));
};
