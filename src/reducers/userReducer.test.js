import { FETCH_USER } from '../actions/userActions';
import reducer from './userReducer';

describe('repos reducer', () => {
  it('handles the fetch repos action', () => {
    const action = {
      type: FETCH_USER,
      payload: [
        {}
      ]
    };
  });
});
