import { Adapter } from '../adapters/service1';
import { get } from '../client/client';

/**
 * Get Service1 data
 * @param {string} token - Authorization token
 * @returns {Promise<Object>} Transformed service data
 */
const getService1 = (token) => {
  const path = '/service1';
  return get(token, path).then((response) => {
    return Adapter.Service1.APIToAPP(response?.data);
  });
};

export default {
  getService1,
};
