import {safeCredentials, handleErrors} from "./fetchHelper";

//Log in and Sign up
export function logInUser(username, password, callback) {
  fetch(`/api/sessions`, safeCredentials({
    method: 'POST',
    body: JSON.stringify({
      'user': {
        'password': password,
        'username': username
      },
    })
  }))
    .then(handleErrors)
    .then(res => {
      callback(res)
    })
};

export function signUpUser(username, password, email, callback) {
  fetch(`/api/users`, safeCredentials({
    method: 'POST',
    body: JSON.stringify({
      'user': {
        'email': email,
        'password': password,
        'username': username
      },
    })
  }))
    .then(handleErrors)
    .then(res => {
      callback(res);
    })
};