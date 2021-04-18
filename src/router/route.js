function createRegex(route) {
  const formatted = route
    .replace('/', '\\/')
    .replace(/:[\w\d]+/, '[\\w\\d]+')
    .replace('*', '.+');
  return new RegExp(`^${formatted}$`);
}

function findRoute(routes, path) {
  return routes.find((route) => {
    const regex = createRegex(route.path);
    return path.match(regex);
  });
}

function getParams(route, path) {
  const pathValues = path.split('/');
  const routeValues = route.path.split('/');
  return routeValues.reduce((acc, item, i) => {
    if (routeValues[i].startsWith(':')) {
      acc[item.slice(1)] = pathValues[i];
    }
    return acc;
  }, {});
}

export function match(routes, path) {
  const route = findRoute(routes, path);
  const params = getParams(route, path);
  return {...route, params};
}
