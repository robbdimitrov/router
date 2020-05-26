import React from 'react';

import { match } from './match';

const RouterContext = React.createContext({});

export function useRouter() {
  return React.useContext(RouterContext);
}

function Router(props) {
  const [ path, setPath ] = React.useState(window.location.pathname)
  const route = match(props.routes, path);

  const navigate = (url, rewrite = false) => {
    if (url === path) {
      return;
    }
    const method = rewrite ? 'replace' : 'push';
    window.history[`${method}State`](null, '', url);
    setPath(url);
  };

  React.useEffect(() => {
    window.onpopstate = (e) => setPath(window.location.pathname);
  });

  if (route.redirectTo) {
    navigate(route.redirectTo, true);
    return null;
  }

  const value = { path, navigate, params: route.params };

  return (
    <RouterContext.Provider value={value}>
      {props.children}
      <React.Suspense fallback={<div>Loading...</div>}>
        <route.component />
      </React.Suspense>
    </RouterContext.Provider>
  );
}

export default Router;
