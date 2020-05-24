export function combine(str1, str2) {
  return (str1 + ' ' + str2).trim();
}

export function normalize(url) {
  let path = url;
  if (path[0] === '/') {
    path = path.slice(1);
  }
  if (path[path.length - 1] === '/') {
    path = path.slice(0, -1);
  }
  return path;
}
