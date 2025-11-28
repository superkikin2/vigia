/**
 * Transform API response to App format
 * @param {Object} serverObj - Server response object
 * @param {string} serverObj.token - The token from server
 * @returns {Object} Transformed object for app use
 */
const APIToAPP = (serverObj) => {
  return {
    token: serverObj?.token || null,
  };
};

const Adapter = {
  Service1: {
    APIToAPP,
  },
};

export { Adapter };
