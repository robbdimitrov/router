import React, { useContext } from 'react';

import { matchRoute } from './match';

export const RouterContext = React.createContext({});

function navigate(url) {
  window.history.pushState(null, '', url);
}

function back() {
  window.history.back();
}

export function useHistory() {

}

export function useRouter() {
  return useContext(RouterContext);
}

export function useRoutes(routes) {
  return matchRoute(routes, window.location.pathname);
}
