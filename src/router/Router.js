import React from 'react';

import { resolve, createTree } from './tree';
import { normalize, isParam } from './utils';

function matchRoute(routes, path) {
  for (const route of routes) {
    const pathValues = normalize(path).split('/');
    const routeValues = route.path.split('/');
    if (pathValues.length !== routeValues.length) {
      continue;
    }
    let params = {};
    let match = true;
    for (let i = 0; i < pathValues.length; i++) {
      if (isParam(routeValues[i])) {
        params[routeValues[i].slice(1)] = pathValues[i];
      } else if (routeValues[i] !== pathValues[i]) {
        match = false;
        break;
      }
    }
    if (match) {
      return { params, ...route };
    }
  }
  return routes.find((route) => route.path === '**');
}

class Router {
  constructor(routes) {
    this.routes = routes;
    this.tree = createTree(routes.map((item) => item.path));
  }

  getComponent() {
    const path = window.location.pathname;
    const route = this.routes.find((item) => item.path === path);
    return route ? route.component : null;
  }

  resolve() {
    const path = normalize(window.location.pathname);
    const result = resolve(this.tree, path);
    let route = this.routes.find((route) => route.path === result.path);
    if (!route) {
      route = this.routes.find((route) => route.path === '**');
    }
    if (route && route.redirectTo) {
      this.navigate(route.redirectTo);
    }
    return {
      ...result,
      component: route.component
    };
  }

  navigate(url) {
    window.history.pushState(null, '', url);
    this.render();
  }

  back() {
    window.history.back();
  }
}

export default Router;
