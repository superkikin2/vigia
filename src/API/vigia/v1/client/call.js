const handleError = (error) => {
  console.error(`Error calling server: ${error}`);
  throw error;
};

const processResponse = async (response) => {
  const value = {
    status: {
      level: response.status > 400 ? 'ERROR' : 'OK',
      OK: response.status <= 400,
      code: response.status,
    },
    data: response.status === 204 ? {} : await response.json(),
  };

  if (response.status === 401) {
    const error = new Error(`Error calling server: ${response.status} ${response.statusText}`);
    error.name = 'UnauthorizedError';
    throw error;
  }
  if (response.status === 403) {
    const error = new Error(`Error calling server: ${response.status} ${response.statusText}`);
    error.name = 'ForbiddenError';
    throw error;
  }
  if (response.status === 404) {
    const error = new Error(`Error calling server: ${response.status} ${response.statusText}`);
    error.name = 'NotFoundError';
    throw error;
  }
  if (response.status === 500) {
    const error = new Error(`Error calling server: ${response.status} ${response.statusText}`);
    error.name = 'ServerError';
    throw error;
  }
  if (response.status === 503) {
    const error = new Error(`Error calling server: ${response.status} ${response.statusText}`);
    error.name = 'ServiceUnavailableError';
    throw error;
  }
  if (response.status > 400) {
    const error = new Error(`Error calling server: ${response.status} ${response.statusText}`);
    error.name = 'ServerError';
    throw error;
  }

  return value;
};

export async function call(method, url, queryParams, body, headers = {}) {
  const config = {
    method,
    headers,
  };

  // assign body to config if method is not GET
  if (method !== 'GET' && body) {
    config.body = JSON.stringify(body);
  }

  // add query params
  let finalUrl = url;
  if (queryParams) {
    const urlObj = new URL(url);
    Object.keys(queryParams).forEach((key) => {
      urlObj.searchParams.append(key, String(queryParams[key]));
    });
    finalUrl = urlObj.toString();
  }

  try {
    const httpResponse = await fetch(finalUrl, config);
    return await processResponse(httpResponse);
  } catch (error) {
    handleError(error);
    return undefined;
  }
}
