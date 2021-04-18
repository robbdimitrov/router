import React from 'react';

import {match} from './route';
import {parse} from './query';

export const RouterContext = React.createContext({});
const initialPath = window.location.pathname;

export function useRouter() {
  return React.useContext(RouterContext);
}

export function useRoutes(routes) {
  const [path, setPath] = React.useState(initialPath);
  const route = match(routes, path);

  React.useEffect(() => {
    window.onpopstate = () => {
      setPath(window.location.pathname);
    }
  });

  const navigate = (url, rewrite) => {
    if (url === path) {
      return;
    }
    const method = rewrite ? 'replace' : 'push';
    window.history[`${method}State`](null, '', url);
    setPath(url);
  };

  if (route.redirectTo) {
    navigate(route.redirectTo, true);
  }

  return {
    navigate, path,
    params: route.params,
    query: parse(window.location.search),
    component: route.component,
  };
}
