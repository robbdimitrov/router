import React, { Suspense } from 'react';

import { matchRoute } from './match';

export const RouterContext = React.createContext({
  path: window.location.pathname, params: {}
});

// function navigate(url) {
//   window.history.pushState(null, '', url);
//   this.render();
// }

// function back() {
//   window.history.back();
// }

function Router(props) {
  const route = matchRoute(props.routes, window.location.pathname);

  return (
    <RouterContext.Provider value={route}>
      <Suspense fallback={<div>Loading...</div>}>
        <route.component />
      </Suspense>
    </RouterContext.Provider>
  )
}

export default Router;
