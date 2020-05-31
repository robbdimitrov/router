import { normalize, isParam } from './utils';

let regexCache = {};

function createRegex(route) {
  if (regexCache[route]) {
    return regexCache[route];
  }
  const formatted = route
    .replace('/', '\\/')
    .replace(/:[\w\d]+/, '[\\w\\d]+')
    .replace('*', '.+');
  const regex = new RegExp(`^${formatted}$`);
  regexCache[route] = regex;
  return regex;
}

function findRoute(routes, path) {
  return routes.find((route) => {
    const regex = createRegex(route.path);
    return path.match(regex);
  });
}

function getParams(route, path) {
  const pathValues = normalize(path).split('/');
  const routeValues = normalize(route.path).split('/');
  let params = {};

  if (pathValues.length !== routeValues.length) {
    return params;
  }

  for (let i = 0; i < pathValues.length; i++) {
    if (isParam(routeValues[i])) {
      params[routeValues[i].slice(1)] = pathValues[i];
    }
  }

  return params;
}

export function match(routes, path) {
  const route = findRoute(routes, path);
  if (!route) {
    return;
  }
  const params = getParams(route, path);
  return { ...route, params };
}
