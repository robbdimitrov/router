export function parse(string) {
  return string.slice(1).split('&')
    .filter((item) => item.length)
    .reduce((acc, item) => {
      const pair = item.split('=');
      acc[pair[0]] = pair[1];
      return acc;
    }, {});
}
