import 'whatwg-fetch';

export function getUsers() {
  return get('users');
}

function get (url) {
  return fetch(url).then(onSuccess, onFailure);
}

function onSuccess (response) {
  return response.json;
}

function onFailure (err) {
  console.log(err); // eslint-disable-line no-console
}
