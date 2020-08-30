import React from 'react';

import { match } from './route';
import { parse } from './query';

export const RouterContext = React.createContext({});
const initialPath = window.location.pathname;

export function useRouter() {
  return React.useContext(RouterContext);
}

export function useRoutes(routes) {
  const [path, setPath] = React.useState(initialPath);
  const route = match(routes, path);

  const navigate = (url, rewrite = false) => {
    if (url === path) {
      return;
    }
    const method = rewrite ? 'replace' : 'push';
    window.history[`${method}State`](null, '', url);
    setPath(url);
  };

  React.useEffect(() => {
    window.onpopstate = () => {
      setPath(window.location.pathname);
    }
  });

  if (route.redirectTo) {
    navigate(route.redirectTo, true);
    return null;
  }

  return {
    navigate, path,
    params: route.params,
    query: parse(window.location.search),
    component: route.component
  };
}
