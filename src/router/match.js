import { normalize } from './utils';

export function matchRoute(routes, path) {
  let wildcard = undefined;

  for (const route of routes) {
    if (route.path === '**') {
      wildcard = route;
      continue;
    }

    const pathValues = normalize(path).split('/');
    const routeValues = route.path.split('/');
    if (pathValues.length !== routeValues.length) {
      continue;
    }

    let params = {};
    let match = true;

    for (let i = 0; i < pathValues.length; i++) {
      if (routeValues[i][0] === ':') {
        params[routeValues[i].slice(1)] = pathValues[i];
      } else if (routeValues[i] !== pathValues[i]) {
        match = false;
        break;
      }
    }

    if (match) {
      return { ...route, params };
    }
  }

  return wildcard;
}
