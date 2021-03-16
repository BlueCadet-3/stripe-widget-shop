import sendRequest from './send-request'

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

// Again, this is for testing purposes only, you don't need it
export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
