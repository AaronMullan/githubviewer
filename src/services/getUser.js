const request = path => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${path}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    });
};

export const getUser = user => request(user);
