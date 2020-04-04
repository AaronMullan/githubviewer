import { fetchUser, FETCH_USER } from './userActions';

jest.mock('../services/getUser.js');


describe('user actions', () => {
  it('creates a fetch user action', () => {
    const dispatch = jest.fn();
    const action = fetchUser();

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_USER,
          payload: 
            {
              login: 'AaronMullan',
              'id': 50382381,
              'node_id': 'MDQ6VXNlcjUwMzgyMzgx',
              'avatar_url': 'https://avatars2.githubusercontent.com/u/50382381?v=4',
              'gravatar_id': '',
              'url': 'https://api.github.com/users/AaronMullan',
              'html_url': 'https://github.com/AaronMullan',
              'followers_url': 'https://api.github.com/users/AaronMullan/followers',
              'following_url': 'https://api.github.com/users/AaronMullan/following{/other_user}',
              'gists_url': 'https://api.github.com/users/AaronMullan/gists{/gist_id}',
              'starred_url': 'https://api.github.com/users/AaronMullan/starred{/owner}{/repo}',
              'subscriptions_url': 'https://api.github.com/users/AaronMullan/subscriptions',
              'organizations_url': 'https://api.github.com/users/AaronMullan/orgs',
              'repos_url': 'https://api.github.com/users/AaronMullan/repos',
              'events_url': 'https://api.github.com/users/AaronMullan/events{/privacy}',
              'received_events_url': 'https://api.github.com/users/AaronMullan/received_events',
              'type': 'User',
              'site_admin': false,
              'name': null,
              'company': null,
              'blog': 'https://www.linkedin.com/in/aaron-mullan/',
              'location': 'Portland, OR',
              'email': null,
              'hireable': null,
              'bio': 'After years as an audio engineer I now bring my passion for craftsmanship and collaboration to the field of software engineering.',
              'public_repos': 44,
              'public_gists': 0,
              'followers': 12,
              'following': 36,
              'created_at': '2019-05-07T20:40:52Z',
              'updated_at': '2020-02-14T21:36:57Z'
            }
          
        });
      });
  });
});
