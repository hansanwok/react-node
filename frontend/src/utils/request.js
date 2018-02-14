import 'whatwg-fetch';
//import config from '../configs';
const isBrowser = typeof window !== 'undefined';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  const APIUrl = `http://localhost:3001` + url;
  return fetch(APIUrl, options)
    .then(checkStatus)
    .then(parseJSON);
}

const getTimezoneOffset = () => {
  const d = new Date();
  return d.getTimezoneOffset();
};

export const requestOptions = {
  get: () => {
    return {
      method: 'GET',
      headers: {
        'x-timezone-offset': getTimezoneOffset(),
      },
    };
  },
  post: (body) => {
    return {
      method: 'POST',
      headers: {
        'x-timezone-offset': getTimezoneOffset(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  },
  put: (body) => {
    return {
      method: 'PUT',
      headers: {
        'x-timezone-offset': getTimezoneOffset(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  },
  delete: () => {
    return {
      method: 'DELETE',
      headers: {
        'x-timezone-offset': getTimezoneOffset(),
      },
    };
  },
  // Auth Request
  getWithAuth: (token) => {
    const authToken = isBrowser && localStorage.getItem('authToken');
    const sendToken = token ? token : authToken;
    return {
      method: 'GET',
      headers: {
        'x-auth-token': sendToken,
        'x-timezone-offset': getTimezoneOffset(),
      },
    };
  },
  postWithAuth: (body, token) => {
    const authToken = isBrowser && localStorage.getItem('authToken');
    const sendToken = token ? token : authToken;
    return {
      method: 'POST',
      headers: {
        'x-auth-token': sendToken,
        'x-timezone-offset': getTimezoneOffset(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  },
  putWithAuth: (body, token) => {
    const authToken = isBrowser && localStorage.getItem('authToken');
    const sendToken = token ? token : authToken;
    return {
      method: 'PUT',
      headers: {
        'x-auth-token': sendToken,
        'x-timezone-offset': getTimezoneOffset(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  },
  deleteWithAuth: (token) => {
    const authToken = isBrowser && localStorage.getItem('authToken');
    const sendToken = token ? token : authToken;
    return {
      method: 'DELETE',
      headers: {
        'x-auth-token': sendToken,
        'x-timezone-offset': getTimezoneOffset(),
      },
    };
  },
};
