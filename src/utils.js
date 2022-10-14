export function trimLeadingQuestion(url) {
  return url.replace(/^\?/, '');
}

export function parseParams(url) {
  const query = trimLeadingQuestion(url);

  const params = {};
  query.split('&').forEach((param) => {
    const [key, value] = param.split('=');
    const decodedKey = decodeURIComponent(key);
    const decodedValue = decodeURIComponent(value);

    params[decodedKey] = decodedValue;
  });

  return params;
};