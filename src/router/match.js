import { normalize, isParam } from './utils';

function routeToRegex(route) {
  const regex = route
    .replace('/', '\\/')
    .replace(/:[\w\d]+/, '[\\w\\d]+')
    .replace('*', '.+');
  return new RegExp(`^${regex}$`);
}

function matchRoute(routes, path) {
  return routes.find((route) => {
    const regex = routeToRegex(route.path);
    return path.match(regex);
  });
}

function pathParams(route, path) {
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
  const route = matchRoute(routes, path);
  if (!route) {
    return;
  }
  const params = pathParams(route, path);
  return { ...route, params };
}
