export const FETCH_REPOS = 'FETCH_REPOS';
export const fetchReops = () => dispatch => {
  return getRepos()
    .then(repos => dispatch({
      type: FETCH_REPOS,
      payload: repos
    }));
};
