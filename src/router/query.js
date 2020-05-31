function parseQueryString(string) {
  const pairs = string.slice(1).split('&');
  return pairs.reduce((acc, item) => {
    const pair = item.split('=');
    acc[pair[0]] = pair[1];
    return acc;
  }, {});
}

export function parse(string) {
  if (!string) {
    return {};
  }
  return parseQueryString(string);
}
