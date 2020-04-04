import { getUser } from './userSelectors';

describe('user selector', () => {
  it('gets the user', () => {
    const state = { user: 'Mickey Mouse' };
  
    const users = getUser(state);

    expect(users).toEqual(
      'Mickey Mouse'
    );
  });
});
