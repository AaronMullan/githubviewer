import { FETCH_USER } from '../actions/userActions';
import reducer from './userReducer';

describe('user reducer', () => {
  it('handles the fetch user action', () => {
    const action = {
      type: FETCH_USER,
      payload: [
        { user: 'AaronMullan' }
      ]
    };
    const initalState = { list: [] };

    const newState = reducer(initalState, action);

    expect(newState).toEqual({
      list:  [
        { user: 'AaronMullan' }
      ] 
    });
  });
});
