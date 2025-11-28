import { call } from './call';

const getBaseUrl = () => {
  const domain = import.meta.env.VITE_API_DOMAIN || 'http://localhost:3000';
  const version = import.meta.env.VITE_API_VERSION || '/api/v1';
  return `${domain}${version}`;
};

function generateHeader(token) {
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

if (token) {
    headers['Authorization'] = `Bearer ${token}`;
}

return headers;
}

export function get(token, path, queryParams) {
  const baseUrl = getBaseUrl();
  return call('GET', `${baseUrl}${path}`, queryParams, undefined, generateHeader(token));
}

export function post(token, path, queryParams, body) {
  const baseUrl = getBaseUrl();
  return call('POST', `${baseUrl}${path}`, queryParams, body, generateHeader(token));
}

export function put(token, path, queryParams, body) {
  const baseUrl = getBaseUrl();
  return call('PUT', `${baseUrl}${path}`, queryParams, body, generateHeader(token));
}

export function patch(token, path, queryParams, body) {
  const baseUrl = getBaseUrl();
  return call('PATCH', `${baseUrl}${path}`, queryParams, body, generateHeader(token));
}

export function del(token, path, queryParams) {
  const baseUrl = getBaseUrl();
  return call('DELETE', `${baseUrl}${path}`, queryParams, undefined, generateHeader(token));
}
